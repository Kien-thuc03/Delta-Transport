import { useState, useEffect } from 'react';
import { testimonials, type Testimonial } from '../models/TestimonialTypes';

export const useTestimonialController = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  // Xác định số lượng testimonial hiển thị dựa trên kích thước màn hình
  const itemsPerPage = windowWidth >= 768 ? 2 : 1;
  
  // Tính toán tổng số trang
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Thêm event listener khi component được mount
    window.addEventListener('resize', handleResize);
    
    // Cleanup khi component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Chuyển đến trang tiếp theo
  const nextPage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % testimonials.length);
  };
  
  // Chuyển đến trang trước đó
  const prevPage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 
        ? testimonials.length - (testimonials.length % itemsPerPage || itemsPerPage) 
        : prevIndex - itemsPerPage
    );
  };
  
  // Chuyển đến trang cụ thể
  const goToPage = (pageIndex: number) => {
    const newIndex = pageIndex * itemsPerPage;
    if (newIndex < testimonials.length) {
      setCurrentIndex(newIndex);
    }
  };
  
  // Lấy testimonials hiện tại cần hiển thị
  const getVisibleTestimonials = (): Testimonial[] => {
    const endIndex = Math.min(currentIndex + itemsPerPage, testimonials.length);
    return testimonials.slice(currentIndex, endIndex);
  };
  
  return {
    testimonials,
    currentIndex,
    itemsPerPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    getVisibleTestimonials,
  };
}; 