import { useState, useEffect, useRef } from 'react';
import type { News, NewsArticle } from '../models/NewsTypes';
import { getNews, getNewsBySlug, addComment } from '../api/newsAPI';
import { formatDate } from '../utils/dateUtils';
import type { Comment } from '../models/NewsTypes';
export const useNewsController = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newsItems, setNewsItems] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasInitialFetch = useRef(false);
  
  // Comment form state
  const [formData, setFormData] = useState<Comment>({
    author: '',
    email: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  
  // Cache cho kết quả API
  interface NewsDetailResponse {
    data: NewsArticle | null;
    loading: boolean;
    error: string | null;
  }
  
  const newsDetailCache = useRef<Record<string, NewsDetailResponse>>({});

  useEffect(() => {
    if (hasInitialFetch.current) return;
    
    const fetchNews = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await getNews();
        // định dạng cho cả date của comment
        if (response.data && Array.isArray(response.data)) {
          const dateFormatted = response.data.map((item: News) => ({
            ...item,
            date: formatDate(item.date)
          }));
          setNewsItems(dateFormatted);
          hasInitialFetch.current = true;
        } else {
          throw new Error('Dữ liệu không đúng định dạng');
        }
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
  const itemsPerPage = 6;
  
  // Tính toán tổng số trang
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  
  
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
    // Kiểm tra cache
    if (newsDetailCache.current[slug]) {
      return newsDetailCache.current[slug];
    }
    
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
        
        const result = {
          data: formattedData,
          loading: false,
          error: null
        };
        
        // Lưu vào cache
        newsDetailCache.current[slug] = result;
        return result;
      }
      
      const result = {
        data: response.data,
        loading: false,
        error: null
      };
      
      // Lưu vào cache
      newsDetailCache.current[slug] = result;
      return result;
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
  
  // Xử lý thay đổi input form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: Comment) => ({ ...prev, [name]: value }));
  };
  
  // Xử lý submit form comment
  const handleSubmitComment = async (slug: string, article: NewsArticle, e: React.FormEvent) => {
    e.preventDefault();
    
    if (!slug || !article) return null;
    
    // Validate form
    if (!formData.author.trim()) {
      setFormError('Vui lòng nhập họ tên');
      return null;
    }
    
    if (!formData.email.trim()) {
      setFormError('Vui lòng nhập email');
      return null;
    }
    
    if (!formData.content.trim()) {
      setFormError('Vui lòng nhập nội dung bình luận');
      return null;
    }
    
    setIsSubmitting(true);
    setFormError(null);
    
    try {
      const response = await addComment(slug, formData);
      
      if (response && response.success) {
        // Định dạng ngày cho comment mới trước khi thêm vào danh sách
        const newComment = {
          ...response.data,
          date: response.data.date ? formatDate(response.data.date) : formatDate(new Date())
        };
        
        const updatedComments = article.comments ? [...article.comments, newComment] : [newComment];
        
        const updatedArticle = {
          ...article,
          comments: updatedComments,
          commentCount: (article.commentCount || 0) + 1
        };
        
        // Cập nhật cache
        if (newsDetailCache.current[slug]) {
          newsDetailCache.current[slug] = {
            ...newsDetailCache.current[slug],
            data: updatedArticle
          };
        }
        
        // Reset form
        setFormData({
          author: '',
          email: '',
          content: ''
        });
        
        return updatedArticle;
      }
      return null;
    } catch (err) {
      console.error('Error submitting comment:', err);
      setFormError('Đã xảy ra lỗi khi gửi bình luận');
      return null;
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Lấy tin tức liên quan từ danh sách tin tức
  const getRelatedNews = (slug: string, limit = 5): News[] => {
    if (!newsItems || newsItems.length === 0) return [];
    
    return newsItems
      .filter(item => item.slug !== slug)
      .slice(0, limit);
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
    error,
    // Comment form
    formData,
    setFormData,
    isSubmitting,
    formError,
    handleInputChange,
    handleSubmitComment,
    getRelatedNews
  };
}; 