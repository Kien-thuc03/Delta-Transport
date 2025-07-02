import { useState, useEffect } from 'react';
import type { News } from '../models/NewsTypes';
// import { newsItems } from '../models/NewsTypes';
import { getNews } from '../api/newsAPI';

export const useNewsController = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [newsItems, setNewsItems] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const news = await getNews();
      const dateFormatted = news.data.map((item: News) => ({
        ...item,
        date: new Date(item.date).toLocaleDateString('vi-VN', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
      }));
      setNewsItems(dateFormatted);
    };
    fetchNews();
  }, []);
  // Xác định số lượng tin tức hiển thị dựa trên kích thước màn hình
  const itemsPerPage = windowWidth >= 1200 ? 3 : windowWidth >= 768 ? 2 : 1;
  
  // Tính toán tổng số trang
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  
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
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % newsItems.length);
  };
  
  // Chuyển đến trang trước đó
  const prevPage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 
        ? newsItems.length - (newsItems.length % itemsPerPage || itemsPerPage) 
        : prevIndex - itemsPerPage
    );
  };
  
  // Chuyển đến trang cụ thể
  const goToPage = (pageIndex: number) => {
    const newIndex = pageIndex * itemsPerPage;
    if (newIndex < newsItems.length) {
      setCurrentIndex(newIndex);
    }
  };
  
  // Lấy tin tức hiện tại cần hiển thị
  const getVisibleNews = (): News[] => {
    const endIndex = Math.min(currentIndex + itemsPerPage, newsItems.length);
    return newsItems.slice(currentIndex, endIndex);
  };
  
  return {
    newsItems,
    currentIndex,
    itemsPerPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    getVisibleNews,
  };
}; 