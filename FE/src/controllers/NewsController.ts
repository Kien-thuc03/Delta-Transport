import { useState, useEffect } from 'react';
import type { News, NewsArticle } from '../models/NewsTypes';
// import { newsItems } from '../models/NewsTypes';
import { getNews, getNewsBySlug } from '../api/newsAPI';
import { formatDate } from '../utils/dateUtils';

export const useNewsController = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [newsItems, setNewsItems] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const news = await getNews();
        // định dạng cho cả date của comment
        const dateFormatted = news.data.map((item: News) => ({
          ...item,
          date: formatDate(item.date)
        }));
        setNewsItems(dateFormatted);
      } catch (err) {
        console.error('Error fetching news list:', err);
        setError('Không thể tải danh sách tin tức');
      } finally {
        setIsLoading(false);
      }
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
  // lấy chi tiết tin tức theo slug
  const getNewsDetail = async (slug: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getNewsBySlug(slug);
      // Định dạng ngày tháng của bài viết chi tiết và comment
      if (response.data) {
        const formattedData = {
          ...response.data,
          date: response.data.date ? formatDate(response.data.date) : '',
          // Định dạng ngày cho các comment và map _id thành id
          comments: response.data.comments ? response.data.comments.map((comment: NewsArticle) => ({
            ...comment,
            date: comment.date ? formatDate(comment.date) : ''
          })) : []
        };
        return {
          data: formattedData,
          loading: false,
          error: null
        };
      }
      return {
        data: response.data,
        loading: false,
        error: null
      };
    } catch (error) {
      console.error("Error fetching news by slug:", error);
      return {
        data: null,
        loading: false,
        error: 'Không thể tải tin tức chi tiết'
      };
    } finally {
      setIsLoading(false);
    }
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
    getNewsDetail,
    isLoading,
    error
  };
}; 