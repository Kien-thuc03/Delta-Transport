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
            <h2 className="bg-[#ff5722] text-white font-bold text-lg py-2 px-6 inline-block relative z-10 clip-title">
              TIN MỚI NHẤT
            </h2>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#ff5722] -z-0 transform -translate-y-1/2"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {/* Bài viết lớn */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden group">
                <Link to={`/tin-tuc/${newsItems[0].id}`}>
                  <img src={newsItems[0].image} alt={newsItems[0].title} className="w-full h-auto" />
                  
                  {/* Title overlay */}
                  <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {newsItems[0].title}
                    </h3>
                    <div className="text-[#ff5722] font-medium">{newsItems[0].date}</div>
                  </div>
                </Link>
                
                <div className="mt-4">
                  <p className="text-gray-600 mb-2">
                    alibaba1688.vn cung cấp dịch vụ lấy hàng Quảng Châu cho nữ, chất lượng, nhiều mẫu mã độc đáo, giá rẻ nhất, hợp thời t...
                  </p>
                  <Link to={`/tin-tuc/${newsItems[0].id}`} className="text-[#ff5722] hover:underline">
                    [Đọc tiếp]
                  </Link>
                </div>
              </div>
            </div>

            {/* Các bài viết nhỏ bên phải */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {newsItems.slice(1, 4).map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="flex-shrink-0 w-28">
                      <Link to={`/tin-tuc/${item.id}`}>
                        <img src={item.image} alt={item.title} className="w-full h-20 object-cover" />
                      </Link>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 hover:text-[#ff5722] transition-colors mb-1 text-sm">
                        <Link to={`/tin-tuc/${item.id}`}>
                          {item.title}
                        </Link>
                      </h3>
                      <p className="text-gray-500 text-xs mb-1">{item.date}</p>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {item.id === 1 ? "Dịch vụ kinh doanh hàng hóa thời trang đang là một xu hướng khá hot hiện nay..." : 
                         item.id === 2 ? "Ngày nay nhu cầu vận chuyển hàng hóa đi Đài Loan của các doanh nghiệp..." : 
                         "Dịch vụ vận chuyển hàng hóa từ nước ngoài về Việt Nam đang được coi là nghề..."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* HƯỚNG DẪN ĐẶT HÀNG */}
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <h2 className="bg-[#ff5722] text-white font-bold text-lg py-2 px-6 inline-block relative z-10">
                HƯỚNG DẪN ĐẶT HÀNG
              </h2>
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#ff5722] -z-0 transform -translate-y-1/2"></div>
            </div>
            <Link to="/tin-tuc" className="text-[#ff5722] hover:underline text-sm">
              Xem tất cả &gt;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {newsItems.slice(0, 4).map((item) => (
              <div key={`guide-${item.id}`} className="bg-white shadow-sm overflow-hidden">
                <div className="relative">
                  <Link to={`/tin-tuc/${item.id}`}>
                    <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                  </Link>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-sm">
                    <Link to={`/tin-tuc/${item.id}`} className="text-gray-800 hover:text-[#ff5722] transition-colors line-clamp-2">
                      {item.title}
                    </Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* TIN TỨC THỊ TRƯỜNG */}
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <h2 className="bg-[#ff5722] text-white font-bold text-lg py-2 px-6 inline-block relative z-10">
                TIN TỨC THỊ TRƯỜNG
              </h2>
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#ff5722] -z-0 transform -translate-y-1/2"></div>
            </div>
            <Link to="/tin-tuc" className="text-[#ff5722] hover:underline text-sm">
              Xem tất cả &gt;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {newsItems.slice(0, 4).map((item) => (
              <div key={`market-${item.id}`} className="bg-white shadow-sm overflow-hidden">
                <div className="relative">
                  <Link to={`/tin-tuc/${item.id}`}>
                    <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                  </Link>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-sm">
                    <Link to={`/tin-tuc/${item.id}`} className="text-gray-800 hover:text-[#ff5722] transition-colors line-clamp-2">
                      {item.title}
                    </Link>
                  </h3>
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