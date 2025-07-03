import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import NewsContentRenderer from '../components/NewsContentRenderer';
import { useNewsController } from '../controllers/NewsController';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faComment } from '@fortawesome/free-solid-svg-icons';
import type { NewsArticle, News } from '../models/NewsTypes';

import defaultAvatar from '../assets/default-avatar-icon-of-social-media-user-vector.jpg';

const NewsDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getNewsDetail, newsItems } = useNewsController();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const popularArticlesRef = useRef<News[]>([]);

  // Cuộn lên đầu trang khi mới vào, nhưng chỉ 1 lần
  useEffect(() => {
    if (!hasScrolled) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setHasScrolled(true);
    }
  }, [hasScrolled]);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;
      
      try {
        const response = await getNewsDetail(slug);
        if (response.error) {
          setError(response.error);
        } else {
          setArticle(response.data);
        }
      } catch (err: unknown) {
        console.error('Error fetching article:', err);
        setError('Đã xảy ra lỗi khi tải bài viết');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [slug, getNewsDetail]);

  // Xử lý danh sách tin tức liên quan riêng biệt
  useEffect(() => {
    if (slug && newsItems && newsItems.length > 0 && article) {
      // Lọc ra các tin tức khác với tin tức hiện tại
      popularArticlesRef.current = newsItems
        .filter(item => item.slug !== slug)
        .slice(0, 5);
    }
  }, [slug, newsItems, article]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="h-64 bg-gray-200 rounded mb-6"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-gray-800">
            {error || 'Bài viết không tồn tại'}
          </h1>
        </div>
      </Layout>
    );
  }

  const breadcrumbItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Tin tức', href: '/tin-tuc' },
    { label: article.title, active: true }
  ];

  // Lấy tin tức liên quan
  const popularArticles = popularArticlesRef.current;

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
                  {article.content && Array.isArray(article.content) ? (
                    <NewsContentRenderer content={article.content} />
                  ) : (
                    <p className="text-gray-700">Nội dung bài viết không khả dụng.</p>
                  )}
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
                    
                    {article.comments.map((comment, index) => (
                      <div key={comment.id || `comment-${index}`} className="flex gap-4 mb-6">
                        <img 
                          src={ comment.avatar || defaultAvatar} 
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
                    <Link to="/tin-tuc" className="hover:text-[#ff5722] transition-colors">
                      Tin đọc nhiều
                    </Link>
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {popularArticles.length > 0 ? (
                    popularArticles.map((item, index) => ( 
                      <Link key={item.id || `popular-${index}`} to={`/tin-tuc/${item.slug}`} className='block'>
                        <div className="flex gap-3">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-20 h-16 object-cover rounded flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium text-gray-800 line-clamp-3 hover:text-[#ff5722] transition-colors">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-500">Không có tin tức liên quan</p>
                  )}
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
