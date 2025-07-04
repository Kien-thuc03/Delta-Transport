import { useState, useEffect, useCallback } from 'react';
import type { News } from '../models/NewsTypes';
import { searchNews, getPopularTags } from '../api/searchAPI';
import { formatDate } from '../utils/dateUtils';

export const useSearchController = (query: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [results, setResults] = useState<News[]>([]);
  const [relatedTags, setRelatedTags] = useState<string[]>([]);
  const [popularTagsList, setPopularTagsList] = useState<{name: string, count: number}[]>([]);

  // Lấy tags phổ biến
  useEffect(() => {
    const fetchPopularTags = async () => {
      try {
        const response = await getPopularTags();
        if (response.success) {
          // Sắp xếp theo count giảm dần
          const sortedTags = [...response.data].sort((a, b) => b.count - a.count);
          setPopularTagsList(sortedTags);
        }
      } catch (error) {
        console.error('Error fetching popular tags:', error);
      }
    };

    fetchPopularTags();
  }, []);

  // Thực hiện tìm kiếm
  const performSearch = useCallback(async () => {
    if (!query.trim()) {
      setResults([]);
      setRelatedTags([]);
      setLoading(false);
      return;
    }

    try {
      const response = await searchNews(query);
      if (response.success) {
        //thực hiện fomat date cho dữ liệu
        const formattedResults = response.data.map((item: News) => ({
          ...item,
          date: formatDate(item.date)
        }));
        setResults(formattedResults);
        
        // Lấy 5 tag phổ biến nhất dựa trên count
        if (popularTagsList.length > 0) {
          const topTags = popularTagsList.slice(0, 5).map(tag => tag.name);
          setRelatedTags(topTags);
        }
      }
    } catch (error) {
      console.error('Error searching news:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, [query, popularTagsList]);

  useEffect(() => {
    // Đảm bảo trang luôn cuộn lên đầu khi load
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Bắt đầu loading
    setLoading(true);
    
    // Thêm độ trễ nhỏ để tránh gọi API quá nhiều khi người dùng đang gõ
    const searchTimeout = setTimeout(() => {
      performSearch();
    }, 800);
    
    return () => clearTimeout(searchTimeout);
  }, [query, performSearch]);

  // Lấy tất cả các tag phổ biến
  const getPopularTagsList = () => {
    return popularTagsList;
  };

  return {
    loading,
    results,
    relatedTags,
    popularTagsList: getPopularTagsList,
  };
}; 