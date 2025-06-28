import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import NewsContentRenderer from '../components/NewsContentRenderer';
import { newsArticles, newsItems } from '../models/NewsTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faComment } from '@fortawesome/free-solid-svg-icons';

const NewsDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = newsArticles.find(a => a.slug === slug);

  // Đảm bảo trang luôn cuộn lên đầu khi load
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-gray-800">Bài viết không tồn tại</h1>
        </div>
      </Layout>
    );
  }

  const breadcrumbItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Tin tức', href: '/tin-tuc' },
    { label: article.title, active: true }
  ];

  // Get related articles (popular articles for sidebar)
  const popularArticles = newsItems.filter(item => item.id !== article.id).slice(0, 5);

  return (
    <Layout>
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Article Header */}
                <div className="p-6 pb-4 border-b border-gray-200">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    {article.title}
                  </h1>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    {article.commentCount !== undefined && (
                      <span className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faComment} />
                        {article.commentCount} Bình luận
                      </span>
                    )}
                    <span>|</span>
                    <span className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faCalendar} />
                      {article.date}
                    </span>
                    {article.author && (
                      <>
                        <span>|</span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faUser} />
                          {article.author}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <NewsContentRenderer content={article.content} />
                </div>

                {/* Social Share */}
                <div className="px-6 py-4 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-700 font-medium">Chia sẻ:</span>
                    <div className="flex gap-2">
                      <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                        Facebook
                      </button>
                      <button className="bg-blue-400 text-white px-3 py-2 rounded text-sm hover:bg-blue-500 transition-colors">
                        Twitter
                      </button>
                      <button className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700 transition-colors">
                        Pinterest
                      </button>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                {article.comments && article.comments.length > 0 && (
                  <div className="px-6 py-6 border-t border-gray-200">
                    <h5 className="text-lg font-semibold text-gray-800 mb-6">
                      {article.commentCount} Bình luận:
                    </h5>
                    
                    {article.comments.map(comment => (
                      <div key={comment.id} className="flex gap-4 mb-6">
                        <img 
                          src={comment.avatar} 
                          alt={comment.author}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <strong className="text-gray-800">{comment.author}</strong>
                            <span className="text-sm text-gray-500">{comment.date}</span>
                          </div>
                          <p className="text-gray-700">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Comment Form */}
                <div className="px-6 py-6 border-t border-gray-200 bg-gray-50">
                  <h5 className="text-lg font-semibold text-gray-800 mb-4">
                    Viết bình luận của bạn:
                  </h5>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Họ và tên"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"
                        required
                      />
                    </div>
                    <textarea
                      placeholder="Nhập nội dung"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"
                      required
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-[#ff5722] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e64a19] transition-colors"
                    >
                      Gửi bình luận
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="border-b border-[#ff5722] pb-4 mb-6">
                  <h2 className="text-xl font-bold text-gray-800">
                    <a href="/tin-tuc" className="hover:text-[#ff5722] transition-colors">
                      Tin đọc nhiều
                    </a>
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {popularArticles.map(item => (
                    <div key={item.id} className="flex gap-3">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-20 h-16 object-cover rounded flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-800 line-clamp-3 hover:text-[#ff5722] transition-colors">
                          <a href={`/tin-tuc/${item.slug}`}>
                            {item.title}
                          </a>
                        </h3>
                      </div>
                    </div>
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

export default NewsDetail;
