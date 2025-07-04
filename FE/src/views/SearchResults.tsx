import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTag } from '@fortawesome/free-solid-svg-icons';
import { useSearchController } from '../controllers/SearchController';

// Skeleton loading component
const SearchItemSkeleton: React.FC = () => (
  <div className="animate-pulse bg-white rounded-xl shadow-md overflow-hidden mb-4">
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-48 h-40 bg-gray-200"></div>
      <div className="p-5 flex-1">
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-4/6"></div>
      </div>
    </div>
  </div>
);

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  // Sử dụng SearchController
  const { loading, results, relatedTags } = useSearchController(query);

  const breadcrumbItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Tìm kiếm', active: true }
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6 lg:py-10">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faSearch} className="text-[#ff5722]" />
                Kết quả tìm kiếm: "{query}"
              </span>
            </h1>
            <div className="h-1 w-20 bg-[#ff5722]"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Search Results */}
            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center justify-between">
                  <span>Có {loading ? '...' : results.length} kết quả tìm kiếm phù hợp</span>
                </h2>

                {loading ? (
                  <>
                    <SearchItemSkeleton />
                    <SearchItemSkeleton />
                  </>
                ) : results.length > 0 ? (
                  results.map(item => (
                    <div key={item.id} className="mb-6 border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <div className="flex flex-col md:flex-row gap-4 group">
                        <div className="md:w-48 flex-shrink-0 relative overflow-hidden rounded-lg">
                          <Link to={`/tin-tuc/${item.slug}`}>
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500" 
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </Link>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-800 group-hover:text-[#ff5722] transition-colors mb-2">
                            <Link to={`/tin-tuc/${item.slug}`} className="hover:underline">
                              {item.title}
                            </Link>
                          </h3>
                          <span className="bg-gray-100 px-2 py-1 rounded-full w-fit text-xs text-gray-500 mb-1 block">{item.date}</span>
                          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                            {item.excerpt}
                          </p>
                          <Link 
                            to={`/tin-tuc/${item.slug}`} 
                            className="inline-flex items-center gap-1 text-[#ff5722] hover:text-[#e64a19] text-sm font-medium"
                          >
                            Đọc tiếp
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <div className="text-gray-400 text-5xl mb-4">
                      <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">Không tìm thấy kết quả</h3>
                    <p className="text-gray-500">Vui lòng thử lại với từ khóa khác</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Related tags */}
            <div className="w-full lg:w-1/4 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    Tìm kiếm nhiều
                  </h3>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-[#ff5722] to-transparent"></div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {relatedTags.map((tag, i) => (
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
      </div>
    </Layout>
  );
};

export default SearchResults; 