import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { Testimonial } from '../../models/TestimonialTypes';

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  isLoading?: boolean;
  error?: string | null;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials, isLoading = false, error = null }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const handleSlideChange = useCallback((newIndex: number) => {
    if (testimonials.length === 0) return;
    
    setIsTransitioning(true);
    
    // Tính toán index mới
    let nextIndex = newIndex;
    if (nextIndex < 0) nextIndex = testimonials.length - 1;
    if (nextIndex >= testimonials.length) nextIndex = 0;
    
    setCurrentIndex(nextIndex);
    
    // Kết thúc hiệu ứng transition sau 300ms
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, [testimonials.length]);
  
  // Tự động chuyển slide sau 5 giây (5000ms)
  useEffect(() => {
    if (testimonials.length === 0 || isLoading || error) return;
    
    const timer = setInterval(() => {
      handleSlideChange(currentIndex + 1);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentIndex, testimonials.length, isLoading, error, handleSlideChange]);
  
  const nextSlide = () => {
    handleSlideChange(currentIndex + 1);
  };
  
  const prevSlide = () => {
    handleSlideChange(currentIndex - 1);
  };
  
  // Xử lý sự kiện vuốt trên mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isTransitioning || testimonials.length === 0) return;
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
    if (isTransitioning || testimonials.length === 0) return;
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
  
  // Hiển thị 2 testimonial trên màn hình lớn, 1 trên màn hình nhỏ
  const visibleTestimonials = testimonials.length > 0 
    ? (window.innerWidth >= 768 
      ? [
          testimonials[currentIndex],
          testimonials[(currentIndex + 1) % testimonials.length]
        ]
      : [testimonials[currentIndex]])
    : [];

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
  
  // Hiển thị trạng thái loading
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-2">
        {[1, 2].map((item) => (
          <div key={item} className="bg-white p-8 rounded-lg shadow-md animate-pulse">
            <div className="md:flex md:items-start md:gap-4">
              <div className="md:flex-shrink-0 flex justify-center mb-4 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-gray-200"></div>
              </div>
              <div className="w-full">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mt-4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  // Hiển thị thông báo lỗi
  if (error) {
    return (
      <div className="py-10 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }
  
  // Hiển thị thông báo khi không có dữ liệu
  if (testimonials.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="text-gray-600">Chưa có đánh giá nào.</p>
      </div>
    );
  }
    
  return (
    <div className="relative w-full overflow-hidden">
      <div 
        ref={sliderRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 select-none py-2"
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
        {visibleTestimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className={`bg-white p-8 rounded-lg shadow-md relative transition-all duration-300 ${
              isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
            }`}
          >
            <div className="md:flex md:items-start md:gap-4 h-full">
              <div className="md:flex-shrink-0 flex justify-center mb-4 md:mb-0">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#ff5722]"
                  draggable="false"
                />
              </div>
              <div className='h-full flex flex-col md:justify-between'>
                <p className="text-gray-600 text-center md:text-left mb-4 md:mb-0">{testimonial.content}</p>
                <h4 className="font-medium text-[#ff5722] text-center md:text-left">{testimonial.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Indicator dots */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
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
  );
};

export default TestimonialSlider; 