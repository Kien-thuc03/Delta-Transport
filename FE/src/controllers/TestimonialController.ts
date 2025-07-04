import { useState, useEffect } from 'react';
import { type Testimonial } from '../models/TestimonialTypes';
import { getTestimonials } from '../api/testimoniaslAPI';
export const useTestimonialController = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Xác định số lượng testimonial hiển thị dựa trên kích thước màn hình
  const itemsPerPage = windowWidth >= 768 ? 2 : 1;
  
  // Tính toán tổng số trang
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  // Lấy dữ liệu đánh giá từ API
  useEffect(() => {
    const fetchTestimonials = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await getTestimonials();
        if (response.data && Array.isArray(response.data)) {
          // Chuyển đổi dữ liệu từ API thành định dạng Testimonial
          const formattedData = response.data.map((item: Testimonial) => ({
            id: item._id || item.id || '',
            name: item.name,
            avatar: item.avatar,
            content: item.content,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            deletedAt: item.deletedAt,
            isActive: item.isActive
          }));
          setTestimonials(formattedData);
        } else {
          throw new Error('Dữ liệu không đúng định dạng');
        }
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('Không thể tải danh sách đánh giá');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTestimonials();
  }, []);
  
  // Theo dõi thay đổi kích thước màn hình
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
    isLoading,
    error,
    nextPage,
    prevPage,
    goToPage,
    getVisibleTestimonials,
  };
}; 