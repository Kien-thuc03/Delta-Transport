import { useState, useEffect } from 'react';
import type { News } from '../models/NewsTypes';
import { useNewsController } from './NewsController';

// Danh sách các tag tìm kiếm phổ biến
const popularTags = ['đặt hàng', 'mua hàng', 'quảng châu', 'châu âu', 'trong nước', 'quốc tế'];

export const useSearchController = (query: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [results, setResults] = useState<News[]>([]);
  const [relatedTags, setRelatedTags] = useState<string[]>([]);
  const { newsItems } = useNewsController();
  useEffect(() => {
    // Đảm bảo trang luôn cuộn lên đầu khi load
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Bắt đầu loading
    setLoading(true);
    
    // Simulate API call delay
    const searchTimeout = setTimeout(() => {
      performSearch();
    }, 800);
    
    return () => clearTimeout(searchTimeout);
  }, [query]);

  // Thực hiện tìm kiếm
  const performSearch = () => {
    if (query.trim()) {
      // Lọc tin tức dựa trên từ khóa tìm kiếm
      const filteredResults = newsItems.filter((item: News) => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        (item.excerpt || '').toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
      
      // Tạo các tag liên quan
      generateRelatedTags();
    } else {
      setResults([]);
      setRelatedTags([]);
    }
    
    setLoading(false);
  };

  // Tạo các tag liên quan dựa trên từ khóa tìm kiếm
  const generateRelatedTags = () => {
    // Trong thực tế, đây sẽ là một thuật toán phức tạp hơn để tìm các tag liên quan
    // Ví dụ: dựa trên từ khóa, lịch sử tìm kiếm, hoặc dữ liệu từ API
    
    // Đơn giản hóa: chọn ngẫu nhiên một số tag từ danh sách có sẵn
    const randomTags = popularTags.filter(() => Math.random() > 0.5);
    
    // Đảm bảo luôn có ít nhất 3 tag
    if (randomTags.length < 3) {
      const remainingTags = popularTags.filter(tag => !randomTags.includes(tag));
      const additionalCount = 3 - randomTags.length;
      
      for (let i = 0; i < additionalCount && i < remainingTags.length; i++) {
        randomTags.push(remainingTags[i]);
      }
    }
    
    setRelatedTags(randomTags);
  };

  // Lấy tất cả các tag phổ biến
  const getPopularTags = () => {
    return popularTags;
  };

  return {
    loading,
    results,
    relatedTags,
    getPopularTags,
  };
}; 