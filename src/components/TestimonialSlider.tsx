import React, { useState, useRef, useEffect } from 'react';
import type { Testimonial } from '../models/TestimonialTypes';

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Tự động chuyển slide sau 5 giây (5000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentIndex]);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
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
  
  // Hiển thị 2 testimonial trên màn hình lớn, 1 trên màn hình nhỏ
  const visibleTestimonials = window.innerWidth >= 768 
    ? [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length]
      ]
    : [testimonials[currentIndex]];

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
    
  return (
    <div className="relative w-full overflow-hidden">
      <div 
        ref={sliderRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 select-none"
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
            className="bg-white p-8 rounded-lg shadow-md relative transition-all duration-300"
          >
            <div className="flex items-start gap-4 h-full">
              <div className="flex-shrink-0">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-auto h-full rounded-full object-cover border-2 border-[#ff5722]"
                  draggable="false" // Ngăn chặn việc kéo thả ảnh
                />
              </div>
              <div className='h-full flex flex-col justify-between'>
                <p className="text-gray-600">{testimonial.content}</p>
                <h4 className="font-medium text-[#ff5722]">{testimonial.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Điều hướng */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              Math.floor(currentIndex / (window.innerWidth >= 768 ? 2 : 1)) === Math.floor(index / (window.innerWidth >= 768 ? 2 : 1)) 
                ? 'bg-[#ff5722]' 
                : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider; 