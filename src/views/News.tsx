import React from 'react';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { newsItems } from '../models/NewsTypes';

const News: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Tin tức', active: true }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Tin tức</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative">
                  <Link to={`/tin-tuc/${item.id}`} className="block">
                    <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
                    <div className="absolute w-[20%] top-0 left-0">
                      <div className="bg-[#ff5722] text-white text-3xl font-bold text-center p-2">
                        {item.date.split('/')[0]}
                      </div>
                      <div className="bg-[#010e2a] text-white text-sm text-center p-2">
                        {item.date.split('/')[1] + '/' + item.date.split('/')[2]}
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-3">
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

export default News; 