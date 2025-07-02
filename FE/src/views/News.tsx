import React from 'react';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { useNewsController } from '../controllers/NewsController';

const News: React.FC = () => {
  const { newsItems } = useNewsController();
  const breadcrumbItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Tin tức', active: true }
  ];

  // Đảm bảo trang luôn cuộn lên đầu khi load
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
            {newsItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
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
        </div>
      </div>
    </Layout>
  );
};

export default News; 