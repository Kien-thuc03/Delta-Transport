import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faShoppingBag, faChartLine, faTruck, faTag } from '@fortawesome/free-solid-svg-icons';
import { useSearchController } from '../controllers/SearchController';
import { useNewsController } from '../controllers/NewsController';

// Skeleton loading component for news items
const NewsItemSkeleton: React.FC = () => (
  <div className="animate-pulse bg-white rounded-xl shadow-md overflow-hidden">
    <div className="w-full h-48 bg-gray-200"></div>
    <div className="p-5">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
    </div>
  </div>
);

// Toast notification component
const Toast: React.FC<{message: string, type: 'success' | 'error' | 'info', onClose: () => void}> = ({message, type, onClose}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onClose]);
  
  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
  
  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center transform transition-all duration-500 ease-in-out`}
         role="alert">
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full"
              aria-label="Close notification">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  );
};

const Market: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [toast, setToast] = useState<{show: boolean, message: string, type: 'success' | 'error' | 'info'}>({
    show: false,
    message: '',
    type: 'info'
  });
  const { newsItems } = useNewsController();
  // Lấy danh sách tag phổ biến từ SearchController
  const { getPopularTags } = useSearchController('');
  const popularTags = getPopularTags();

  const breadcrumbItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Thị trường', active: true }
  ];

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const closeToast = () => {
    setToast(prev => ({...prev, show: false}));
  };

  // Đảm bảo trang luôn cuộn lên đầu khi load
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Layout>
      <div className="bg-gray-50">
        {/* Toast notification */}
        {toast.show && (
          <Toast 
            message={toast.message} 
            type={toast.type} 
            onClose={closeToast} 
          />
        )}

        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6 lg:py-10">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Thị trường</h1>
            <div className="w-24 h-1 bg-[#ff5722]"></div>
          </div>
          {/* TIN MỚI NHẤT */}
          <div className="relative mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="relative title-slide-in">
                <h2 className="bg-[#ff5722] text-white font-bold text-base sm:text-lg py-2 sm:py-3 px-4 sm:px-6 inline-block relative z-10 uppercase tracking-wide shadow-md clip-title">
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faNewspaper} className="float-animation text-sm" />
                    <span className="text-sm sm:text-base">TIN MỚI NHẤT</span>
                  </span>
                </h2>
              </div>

              <div className="hidden sm:block link-slide-in">
                <Link 
                  to="/tin-tuc" 
                  className="group view-more-link inline-flex items-center gap-2 text-[#ff5722] hover:text-[#e64a19] font-medium text-sm transition-all duration-300 transform hover:scale-105"
                  aria-label="Xem tất cả tin tức"
                >
                  <span className="group-hover:underline">Xem tất cả</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ff5722] to-transparent -z-0 opacity-70"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-4">
            {/* Bài viết chính lớn */}
            <div className="lg:col-span-2">
              {loading ? (
                <div className="animate-pulse bg-white rounded-xl shadow-xl h-96"></div>
              ) : (
                newsItems && newsItems.length > 0 ? (
                  <div className="relative overflow-hidden rounded-xl shadow-2xl group bg-white transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(255,87,34,0.25)]">
                    <Link to={`/tin-tuc/${newsItems[0].slug}`} className="block">
                      <div className="relative">
                        <img 
                          src={newsItems[0].image} 
                          alt={newsItems[0].title} 
                          className="w-full h-96 object-cover transition-all duration-700 group-hover:scale-110" 
                          loading="lazy"
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-500">
                          <div className="flex items-center gap-3 text-sm mb-4">
                            <span className="bg-[#ff5722] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                              {newsItems[0].date}
                            </span>
                            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                              Tin nổi bật
                            </span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-shadow-lg group-hover:text-[#ff9800] transition-colors duration-300">
                            {newsItems[0].title}
                          </h3>
                          <p className="text-gray-200 text-base line-clamp-3 mb-4 leading-relaxed">
                            {newsItems[0].excerpt}
                          </p>
                          <div className="flex items-center gap-3 transform translate-y-0 group-hover:translate-y-0 transition-all duration-300">
                            <span className="text-[#ff5722] group-hover:text-white transition-colors text-sm font-bold uppercase tracking-wide">
                              ĐỌC TIẾP
                            </span>
                            <svg className="w-5 h-5 text-[#ff5722] group-hover:text-white group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl p-8 shadow-xl text-center">
                    <p className="text-gray-500">Không có tin tức nào để hiển thị</p>
                  </div>
                )
              )}
            </div>

            {/* Danh sách bài viết bên phải */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Tin tức khác
                </h3>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-[#ff5722] to-transparent"></div>
              </div>
              
              {loading ? (
                <>
                  <NewsItemSkeleton />
                  <NewsItemSkeleton />
                </>
              ) : (
                newsItems && newsItems.length > 1 ? (
                  newsItems.slice(1, 3).map((item, index) => (
                    <div key={item.id || index} className="group">
                      <Link to={`/tin-tuc/${item.slug}`} className="block" aria-label={`Đọc bài ${item.title}`}>
                        <div className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#ff5722]/30 hover:-translate-y-1">
                          <div className="flex-shrink-0 relative overflow-hidden rounded-lg">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-32 h-28 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500" 
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-gray-800 group-hover:text-[#ff5722] transition-colors duration-300 mb-2 text-sm leading-tight line-clamp-2">
                              {item.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                              <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">
                                {item.date}
                              </span>
                            </div>
                            <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed">
                              {item.excerpt}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-xl p-8 shadow-md text-center">
                    <p className="text-gray-500">Không có tin tức khác để hiển thị</p>
                  </div>
                )
              )}
              
              
            </div>
          </div>

          {/* Nút xem thêm cho mobile */}
          <div className="flex justify-center mb-6 sm:hidden">
            <Link to="/tin-tuc" className="inline-flex items-center gap-2 text-[#ff5722] hover:text-[#e64a19] font-medium text-sm transition-all duration-300 transform hover:scale-105">
              <span>Xem tất cả</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* HƯỚNG DẪN ĐẶT HÀNG */}
          <div className="relative mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="relative title-slide-in">
                <h2 className="bg-[#ff5722] text-white font-bold text-base sm:text-lg py-2 sm:py-3 px-4 sm:px-6 inline-block relative z-10 uppercase tracking-wide shadow-md clip-title">
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faShoppingBag} className="float-animation text-sm" />
                    <span className="text-sm sm:text-base">HƯỚNG DẪN ĐẶT HÀNG</span>
                  </span>
                </h2>
              </div>
              <div className="hidden sm:block">
                <div className="flex justify-end link-slide-in">
                  <Link 
                    to="/tin-tuc" 
                    className="group view-more-link inline-flex items-center gap-2 text-[#ff5722] hover:text-[#e64a19] font-medium text-sm transition-all duration-300 transform hover:scale-105"
                    aria-label="Xem tất cả hướng dẫn đặt hàng"
                  >
                    <span className="group-hover:underline">Xem tất cả</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ff5722] to-transparent -z-0 opacity-70"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
            {loading ? (
              <>
                <NewsItemSkeleton />
                <NewsItemSkeleton />
                <NewsItemSkeleton />
                <NewsItemSkeleton />
              </>
            ) : (
              newsItems && newsItems.length > 0 ? (
                newsItems.slice(0, 4).map((item, index) => (
                  <div key={`guide-${item.id || index}`} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                    <div className="relative overflow-hidden">
                      <Link to={`/tin-tuc/${item.slug}`} aria-label={`Bước ${index + 1}: ${item.title}`}>
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 left-4 bg-[#ff5722] text-white px-3 py-1 rounded-full text-xs font-bold">
                          <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faTruck} className="text-xs" /> Bước {index + 1}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ff5722] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </Link>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-sm text-gray-800 group-hover:text-[#ff5722] transition-colors line-clamp-2 leading-tight">
                        <Link to={`/tin-tuc/${item.slug}`} className="focus:outline-none focus:underline">
                          {item.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-xs mt-2 line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-4 bg-white rounded-xl p-8 shadow-lg text-center">
                  <p className="text-gray-500">Không có hướng dẫn đặt hàng để hiển thị</p>
                </div>
              )
            )}
          </div>

          {/* Nút xem thêm cho mobile */}
          <div className="flex justify-center mb-6 sm:hidden">
            <Link to="/tin-tuc" className="inline-flex items-center gap-2 text-[#ff5722] hover:text-[#e64a19] font-medium text-sm transition-all duration-300 transform hover:scale-105">
              <span>Xem tất cả</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* TIN TỨC THỊ TRƯỜNG */}
          <div className="relative mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="relative title-slide-in">
                <h2 className="bg-[#ff5722] text-white font-bold text-base sm:text-lg py-2 sm:py-3 px-4 sm:px-6 inline-block relative z-10 uppercase tracking-wide shadow-md clip-title">
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faChartLine} className="float-animation text-sm" />
                    <span className="text-sm sm:text-base">TIN TỨC THỊ TRƯỜNG</span>
                  </span>
                </h2>
              </div>
              <div className="hidden sm:block">
                <div className="flex justify-end link-slide-in">
                  <Link 
                    to="/tin-tuc" 
                    className="group view-more-link inline-flex items-center gap-2 text-[#ff5722] hover:text-[#e64a19] font-medium text-sm transition-all duration-300 transform hover:scale-105"
                    aria-label="Xem tất cả tin tức thị trường"
                  >
                    <span className="group-hover:underline">Xem tất cả</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ff5722] to-transparent -z-0 opacity-70"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
            {loading ? (
              <>
                <NewsItemSkeleton />
                <NewsItemSkeleton />
                <NewsItemSkeleton />
                <NewsItemSkeleton />
              </>
            ) : (
              newsItems && newsItems.length > 2 ? (
                newsItems.slice(2, 6).map((item, index) => (
                  <div key={`market-${item.id || index}`} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                    <div className="relative overflow-hidden">
                      <Link to={`/tin-tuc/${item.slug}`} aria-label={`Đọc tin: ${item.title}`}>
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 right-4 bg-[#ff5722] text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-0 group-hover:rotate-3 transition-transform duration-300">
                          Hot
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ff5722] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </Link>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-sm text-gray-800 group-hover:text-[#ff5722] transition-colors line-clamp-2 leading-tight">
                        <Link to={`/tin-tuc/${item.slug}`} className="focus:outline-none focus:underline">
                          {item.title}
                        </Link>
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded-full">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-4 bg-white rounded-xl p-8 shadow-lg text-center">
                  <p className="text-gray-500">Không có tin tức thị trường để hiển thị</p>
                </div>
              )
            )}
          </div>
          
          {/* Nút xem thêm cho mobile */}
          <div className="flex justify-center mb-6 sm:hidden">
            <Link to="/tin-tuc" className="inline-flex items-center gap-2 text-[#ff5722] hover:text-[#e64a19] font-medium text-sm transition-all duration-300 transform hover:scale-105">
              <span>Xem tất cả</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* ĐẶT HÀNG HIỆU QUẢ + TÌM KIẾM NHIỀU */}
          <div className="relative mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="relative title-slide-in">
                <h2 className="bg-[#ff5722] text-white font-bold text-base sm:text-lg py-2 sm:py-3 px-4 sm:px-6 inline-block relative z-10 uppercase tracking-wide shadow-md clip-title">
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faNewspaper} className="float-animation text-sm" />
                    <span className="text-sm sm:text-base">ĐẶT HÀNG HIỆU QUẢ</span>
                  </span>
                </h2>
              </div>
              <div className="hidden sm:block link-slide-in">
                <Link 
                  to="/dat-hang-hieu-qua" 
                  className="group view-more-link inline-flex items-center gap-2 text-[#ff5722] hover:text-[#e64a19] font-medium text-sm transition-all duration-300 transform hover:scale-105"
                  aria-label="Xem tất cả đặt hàng hiệu quả"
                >
                  <span className="group-hover:underline">Xem tất cả</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ff5722] to-transparent -z-0 opacity-70"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            {/* Left: Grid of 6 cards */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                  <>
                    <NewsItemSkeleton />
                    <NewsItemSkeleton />
                    <NewsItemSkeleton />
                    <NewsItemSkeleton />
                    <NewsItemSkeleton />
                    <NewsItemSkeleton />
                  </>
                ) : (
                  newsItems && newsItems.length > 0 ? (
                    newsItems.slice(0, 6).map((item, index) => (
                      <div key={`dat-hang-${item.id || index}`} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                        <div className="relative overflow-hidden">
                          <Link to={`/tin-tuc/${item.slug}`} aria-label={`Đọc tin: ${item.title}`}>
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-4 right-4 bg-[#ff5722] text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-0 group-hover:rotate-3 transition-transform duration-300">
                              Hot
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ff5722] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                          </Link>
                        </div>
                        <div className="p-5">
                          <h3 className="font-bold text-sm text-gray-800 group-hover:text-[#ff5722] transition-colors line-clamp-2 leading-tight">
                            <Link to={`/tin-tuc/${item.slug}`} className="focus:outline-none focus:underline">
                              {item.title}
                            </Link>
                          </h3>
                          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                            <span className="bg-gray-100 px-2 py-1 rounded-full">
                              {item.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-3 bg-white rounded-xl p-8 shadow-lg text-center">
                      <p className="text-gray-500">Không có bài viết đặt hàng hiệu quả để hiển thị</p>
                    </div>
                  )
                )}
              </div>

              {/* Nút xem thêm cho mobile */}
              <div className="flex justify-center mt-6 mb-6 sm:hidden">
                <Link to="/dat-hang-hieu-qua" className="inline-flex items-center gap-2 text-[#ff5722] hover:text-[#e64a19] font-medium text-sm transition-all duration-300 transform hover:scale-105">
                  <span>Xem tất cả</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right: Tìm kiếm nhiều */}
            <div className="w-full lg:w-1/4 flex-shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Tìm kiếm nhiều
                </h3>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-[#ff5722] to-transparent"></div>
              </div>
              <div className="flex flex-wrap gap-3">
                {popularTags.map((tag, i) => (
                  <Link 
                    key={i} 
                    to={`/tim-kiem?q=${encodeURIComponent(tag)}`}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-xs font-medium cursor-pointer hover:bg-[#ff5722] hover:text-white transition-all shadow-sm hover:shadow-md flex items-center gap-1.5"
                  >
                    <FontAwesomeIcon icon={faTag} className="text-xs" />
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Market; 