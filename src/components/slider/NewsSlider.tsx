import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { News } from '../../models/NewsTypes';

interface NewsSliderProps {
  newsItems: News[];
}

const NewsSlider: React.FC<NewsSliderProps> = ({ newsItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Xử lý sự kiện vuốt trên mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isTransitioning) return;
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || isTransitioning) return;
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
    if (isTransitioning) return;
    e.preventDefault(); // Ngăn chặn hành vi chọn mặc định
    setStartX(e.clientX);
    setIsDragging(true);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isTransitioning) return;
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
  
  const handleSlideChange = (newIndex: number) => {
    setIsTransitioning(true);
    
    // Tính toán index mới
    let nextIndex = newIndex;
    if (nextIndex < 0) nextIndex = newsItems.length - 1;
    if (nextIndex >= newsItems.length) nextIndex = 0;
    
    setCurrentIndex(nextIndex);
    
    // Kết thúc hiệu ứng transition sau 300ms
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };
  
  const nextSlide = () => {
    handleSlideChange(currentIndex + 1);
  };
  
  const prevSlide = () => {
    handleSlideChange(currentIndex - 1);
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
  
  // Tự động chuyển slide sau 6 giây
  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange(currentIndex + 1);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [currentIndex]);
    
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
            className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
              isTransitioning ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'
            }`}
          >
            <Link to={`/tin-tuc/${news.slug}`} className='block'>
              <div className="relative">
                <img 
                  src={news.image}
                  alt={news.title}
                  className="w-full h-60 object-cover"
                  draggable="false"
                />
                <div className="absolute w-[20%] top-0 left-0 bg-[#ff5722] text-white flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-center p-2">{news.date.split('/')[0]}</span>
                  <span className="text-sm bg-[#010e2a] w-full text-center p-2">{news.date.split('/')[1] + '/' + news.date.split('/')[2]}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-3 text-gray-800 hover:text-[#ff5722] transition-colors line-clamp-2">
                  {news.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      {/* Nút điều hướng và indicators */}
      <div className="flex justify-center mt-8">
        {/* Indicator dots */}
        <div className="flex items-center gap-2">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#ff5722] w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSlider; 