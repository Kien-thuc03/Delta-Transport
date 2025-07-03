import React from 'react';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { useNewsController } from '../controllers/NewsController';

const News: React.FC = () => {
  const { 
    currentIndex, 
    itemsPerPage, 
    totalPages,
    nextPage, 
    prevPage, 
    goToPage, 
    getVisibleNews 
  } = useNewsController();
  
  const breadcrumbItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Tin tức', active: true }
  ];

  // Đảm bảo trang luôn cuộn lên đầu khi load
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex]);

  // Tính toán số trang hiện tại
  const currentPage = Math.floor(currentIndex / itemsPerPage) + 1;
  
  // Hiển thị các nút phân trang
  const renderPagination = () => {
    const pages = [];
    const maxPageButtons = 5; // Số lượng nút trang tối đa hiển thị
    
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
    
    // Điều chỉnh lại nếu số trang hiển thị ít hơn maxPageButtons
    if (endPage - startPage + 1 < maxPageButtons) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }
    
    // Thêm nút trang đầu nếu không hiển thị
    if (startPage > 1) {
      pages.push(
        <button 
          key="first" 
          onClick={() => goToPage(0)}
          className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100"
        >
          1
        </button>
      );
      
      if (startPage > 2) {
        pages.push(
          <span key="dots-start" className="mx-1">...</span>
        );
      }
    }
    
    // Thêm các nút trang
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => goToPage(i - 1)}
          className={`w-10 h-10 flex items-center justify-center rounded-md ${
            currentPage === i 
              ? 'bg-[#ff5722] text-white' 
              : 'hover:bg-gray-100'
          }`}
        >
          {i}
        </button>
      );
    }
    
    // Thêm nút trang cuối nếu không hiển thị
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="dots-end" className="mx-1">...</span>
        );
      }
      
      pages.push(
        <button 
          key="last" 
          onClick={() => goToPage(totalPages - 1)}
          className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100"
        >
          {totalPages}
        </button>
      );
    }
    
    return pages;
  };

  const visibleNews = getVisibleNews();

  return (
    <Layout>
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Tin tức</h1>
            <div className="w-24 h-1 bg-[#ff5722]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleNews.map((item, index) => (
              <div key={item.id || `news-${index}`} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-[#ff5722] transition-colors">
                    <Link to={`/tin-tuc/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h3>
                  {item.excerpt && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{item.date}</span>
                    <Link 
                      to={`/tin-tuc/${item.slug}`}
                      className="text-[#ff5722] hover:text-[#e64a19] font-medium text-sm transition-colors"
                    >
                      Đọc thêm →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Phân trang */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === 1 
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Trước
                </button>
                
                <div className="flex items-center space-x-1">
                  {renderPagination()}
                </div>
                
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === totalPages 
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Sau
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default News; 