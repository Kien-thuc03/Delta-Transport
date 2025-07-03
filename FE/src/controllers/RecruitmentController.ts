import { useState, useEffect, useRef } from 'react';
import type { Job } from '../models/RecruitmentTypes';
import { getRecruitments, getRecruitmentById, getLocations } from '../api/recruitmentAPI';
import { formatDate } from '../utils/dateUtils';

export const useRecruitmentController = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recruitments, setRecruitments] = useState<Job[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasInitialFetch = useRef(false);

  // Số lượng tin tuyển dụng cố định trên mỗi trang
  const itemsPerPage = 6;
  
  // Tính toán tổng số trang
  const totalPages = Math.ceil(recruitments.length / itemsPerPage);

  useEffect(() => {
    if (hasInitialFetch.current) return;
    
    const fetchRecruitments = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await getRecruitments();
        
        if (response.data && Array.isArray(response.data)) {
          // Định dạng ngày tháng cho deadline và các ngày khác
          const formattedData = response.data.map((item: Job) => ({
            ...item,
            // Sử dụng _id từ MongoDB làm id
            id: item._id || `job-${Math.random().toString(36).substr(2, 9)}`,
            deadline: formatDate(item.deadline),
            createdAt: item.createdAt ? formatDate(item.createdAt) : undefined,
            updatedAt: item.updatedAt ? formatDate(item.updatedAt) : undefined
          }));
          
          setRecruitments(formattedData);
          hasInitialFetch.current = true;
        } else {
          throw new Error('Dữ liệu không đúng định dạng');
        }
        
        // Lấy danh sách địa điểm
        const locationsResponse = await getLocations();
        if (locationsResponse.data && Array.isArray(locationsResponse.data)) {
          setLocations(locationsResponse.data);
        }
      } catch (err) {
        console.error('Error fetching recruitments list:', err);
        setError('Không thể tải danh sách tuyển dụng');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchRecruitments();
  }, []);
  
  // Lấy chi tiết tin tuyển dụng theo ID
  const getRecruitmentDetail = async (id: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await getRecruitmentById(id);
      
      if (response.data) {
        // Định dạng ngày tháng
        const formattedData = {
          ...response.data,
          deadline: formatDate(response.data.deadline),
          createdAt: response.data.createdAt ? formatDate(response.data.createdAt) : undefined,
          updatedAt: response.data.updatedAt ? formatDate(response.data.updatedAt) : undefined
        };
        
        return { data: formattedData, error: null };
      }
      
      return { data: null, error: 'Không tìm thấy tin tuyển dụng' };
    } catch (err) {
      console.error('Error fetching recruitment detail:', err);
      return { data: null, error: 'Không thể tải thông tin chi tiết' };
    } finally {
      setIsLoading(false);
    }
  };
  
  // Chuyển đến trang tiếp theo
  const nextPage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % recruitments.length);
  };
  
  // Chuyển đến trang trước đó
  const prevPage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 
        ? recruitments.length - (recruitments.length % itemsPerPage || itemsPerPage) 
        : prevIndex - itemsPerPage
    );
  };
  
  // Chuyển đến trang cụ thể
  const goToPage = (pageIndex: number) => {
    const newIndex = pageIndex * itemsPerPage;
    if (newIndex < recruitments.length) {
      setCurrentIndex(newIndex);
    }
  };
  
  // Lấy tin tuyển dụng hiện tại cần hiển thị
  const getVisibleRecruitments = (): Job[] => {
    const endIndex = Math.min(currentIndex + itemsPerPage, recruitments.length);
    return recruitments.slice(currentIndex, endIndex);
  };
  
  // Lọc tin tuyển dụng theo địa điểm
  const filterByLocation = (location: string) => {
    if (!location || location === 'Tất cả') {
      return recruitments;
    }
    
    return recruitments.filter(job => job.location === location);
  };
  
  return {
    recruitments,
    locations,
    currentIndex,
    itemsPerPage,
    totalPages,
    isLoading,
    error,
    nextPage,
    prevPage,
    goToPage,
    getVisibleRecruitments,
    getRecruitmentDetail,
    filterByLocation
  };
}; 