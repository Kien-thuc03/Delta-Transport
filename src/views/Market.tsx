import React from 'react';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { newsItems } from '../models/NewsTypes';

const Market: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Thị trường', active: true }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6">
          {/* TIN MỚI NHẤT */}
          <div className="relative mb-8">
            <h2 className="bg-gradient-to-r from-[#ff5722] to-[#e64a19] text-white font-bold text-xl py-4 px-8 inline-block relative z-10 uppercase tracking-wide shadow-lg rounded-tl-lg rounded-tr-lg">
              <span className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                </svg>
                TIN MỚI NHẤT
              </span>
            </h2>
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#ff5722] to-[#e64a19] -z-0 transform -translate-y-1/2 opacity-30"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {/* Bài viết chính lớn */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-xl shadow-2xl group bg-white">
                <Link to={`/tin-tuc/${newsItems[0].slug}`} className="block">
                  <div className="relative">
                    <img 
                      src={newsItems[0].image} 
                      alt={newsItems[0].title} 
                      className="w-full h-96 object-cover transition-all duration-500 group-hover:scale-110" 
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="flex items-center gap-3 text-sm mb-4">
                        <span className="bg-[#ff5722] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                          {newsItems[0].date}
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                          Tin nổi bật
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-4 leading-tight text-shadow-lg">
                        {newsItems[0].title}
                      </h3>
                      <p className="text-gray-200 text-base line-clamp-3 mb-4 leading-relaxed">
                        {newsItems[0].excerpt}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-[#ff5722] hover:text-white transition-colors text-sm font-bold uppercase tracking-wide">
                          ĐỌC TIẾP
                        </span>
                        <svg className="w-5 h-5 text-[#ff5722] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Danh sách bài viết bên phải */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Tin tức khác
                </h3>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-[#ff5722] to-transparent"></div>
              </div>
              
              {newsItems.slice(1, 6).map((item, index) => (
                <div key={item.id} className="group">
                  <Link to={`/tin-tuc/${item.slug}`} className="block">
                    <div className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#ff5722]/30 hover:-translate-y-1">
                      <div className="flex-shrink-0 relative">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-24 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" 
                        />
                        <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#ff5722] text-white text-xs font-bold rounded-full flex items-center justify-center">
                          {index + 2}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-800 group-hover:text-[#ff5722] transition-colors mb-2 text-sm leading-tight line-clamp-2">
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
              ))}
              
              {/* View all link */}
              <div className="pt-6 border-t border-gray-200">
                <Link 
                  to="/tin-tuc" 
                  className="inline-flex items-center gap-3 text-[#ff5722] hover:text-[#e64a19] font-bold text-sm transition-all duration-300 hover:gap-4 bg-gradient-to-r from-[#ff5722]/5 to-[#e64a19]/5 px-6 py-3 rounded-full hover:shadow-lg"
                >
                  <span>XEM TẤT CẢ TIN TỨC</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* HƯỚNG DẪN ĐẶT HÀNG */}
          <div className="relative mb-8">
            <h2 className="bg-gradient-to-r from-[#2196f3] to-[#1976d2] text-white font-bold text-xl py-4 px-8 inline-block relative z-10 uppercase tracking-wide shadow-lg rounded-tl-lg rounded-tr-lg">
              <span className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
                HƯỚNG DẪN ĐẶT HÀNG
              </span>
            </h2>
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#2196f3] to-[#1976d2] -z-0 transform -translate-y-1/2 opacity-30"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2">
              <Link to="/tin-tuc" className="text-[#2196f3] hover:text-[#1976d2] hover:underline text-sm font-medium transition-colors">
                Xem tất cả &gt;
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {newsItems.slice(0, 4).map((item, index) => (
              <div key={`guide-${item.id}`} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <Link to={`/tin-tuc/${item.slug}`}>
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 bg-[#2196f3] text-white px-3 py-1 rounded-full text-xs font-bold">
                      Bước {index + 1}
                    </div>
                  </Link>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-sm text-gray-800 group-hover:text-[#2196f3] transition-colors line-clamp-2 leading-tight">
                    <Link to={`/tin-tuc/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-xs mt-2 line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* TIN TỨC THỊ TRƯỜNG */}
          <div className="relative mb-8">
            <h2 className="bg-gradient-to-r from-[#4caf50] to-[#388e3c] text-white font-bold text-xl py-4 px-8 inline-block relative z-10 uppercase tracking-wide shadow-lg rounded-tl-lg rounded-tr-lg">
              <span className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                TIN TỨC THỊ TRƯỜNG
              </span>
            </h2>
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#4caf50] to-[#388e3c] -z-0 transform -translate-y-1/2 opacity-30"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2">
              <Link to="/tin-tuc" className="text-[#4caf50] hover:text-[#388e3c] hover:underline text-sm font-medium transition-colors">
                Xem tất cả &gt;
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {newsItems.slice(2, 6).map((item) => (
              <div key={`market-${item.id}`} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <Link to={`/tin-tuc/${item.slug}`}>
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-[#4caf50] text-white px-3 py-1 rounded-full text-xs font-bold">
                      Hot
                    </div>
                  </Link>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-sm text-gray-800 group-hover:text-[#4caf50] transition-colors line-clamp-2 leading-tight">
                    <Link to={`/tin-tuc/${item.slug}`}>
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
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Market; 