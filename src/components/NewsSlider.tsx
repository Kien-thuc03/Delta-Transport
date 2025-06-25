import React, { useState, useRef, useEffect } from 'react';
import type { News } from '../models/NewsTypes';

interface NewsSliderProps {
  newsItems: News[];
}

const NewsSlider: React.FC<NewsSliderProps> = ({ newsItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Xử lý sự kiện vuốt trên mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    
    // Nếu vuốt qua phải
    if (diff > 50) {
      nextSlide();
      setIsDragging(false);
    }
    // Nếu vuốt qua trái
    else if (diff < -50) {
      prevSlide();
      setIsDragging(false);
    }
  };
  
  const handleTouchEnd = () => {
    setIsDragging(false);
  };
  
  // Xử lý sự kiện chuột
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault(); // Ngăn chặn hành vi chọn mặc định
    setStartX(e.clientX);
    setIsDragging(true);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault(); // Ngăn chặn hành vi chọn mặc định
    const currentX = e.clientX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsDragging(false);
    }
  };
  
  const handleMouseUp = (e: React.MouseEvent) => {
    e.preventDefault(); // Ngăn chặn hành vi chọn mặc định
    setIsDragging(false);
  };
  
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };
  
  // Xác định số lượng hiển thị dựa trên kích thước màn hình
  const getItemsPerView = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1200) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const itemsPerView = getItemsPerView();
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= newsItems.length ? 0 : nextIndex;
    });
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? newsItems.length - 1 : nextIndex;
    });
  };

  // Hiển thị các tin tức dựa trên kích thước màn hình
  const getVisibleNews = () => {
    const result = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % newsItems.length;
      result.push(newsItems[index]);
    }
    return result;
  };

  // Ngăn chặn việc chọn text khi kéo
  useEffect(() => {
    const handleSelectStart = (e: Event) => {
      if (isDragging) {
        e.preventDefault();
      }
    };

    document.addEventListener('selectstart', handleSelectStart);

    return () => {
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, [isDragging]);
  
  // Theo dõi thay đổi kích thước màn hình để cập nhật số lượng hiển thị
  useEffect(() => {
    const handleResize = () => {
      // Cập nhật lại trang hiện tại nếu cần
      const newItemsPerView = getItemsPerView();
      if (newItemsPerView !== itemsPerView) {
        // Force re-render
        setCurrentIndex(currentIndex);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentIndex, itemsPerView]);
    
  return (
    <div className="relative w-full overflow-hidden">
      <div 
        ref={sliderRef}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 select-none`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ 
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none', 
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none'
        }}
      >
        {getVisibleNews().map((news) => (
          <div 
            key={news.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative">
              <img 
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
                draggable="false"
              />
              <div className="absolute top-0 left-0 bg-[#ff5722] text-white p-2 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">{news.date.split('/')[0]}</span>
                <span className="text-sm">{news.date.split('/')[1] + '/' + news.date.split('/')[2]}</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold mb-3 text-gray-800 hover:text-[#ff5722] transition-colors line-clamp-2">
                <a href={news.link}>{news.title}</a>
              </h3>
              <p className="text-gray-600 line-clamp-3">{news.summary}</p>
              <a 
                href={news.link} 
                className="inline-block mt-4 text-[#ff5722] font-medium hover:underline"
              >
                Đọc thêm
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Nút điều hướng */}
      <div className="flex justify-center mt-8 gap-4">
        <button 
          onClick={prevSlide}
          className="bg-gray-200 hover:bg-[#ff5722] w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:text-white"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="bg-gray-200 hover:bg-[#ff5722] w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:text-white"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewsSlider; 