import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationTriangle, faInfoCircle, faShoppingCart, faExchangeAlt, faMoneyBillWave, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const OrderingSkills: React.FC = () => {
  // Đảm bảo trang luôn cuộn lên đầu khi load
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="flex-1">
      <Header />
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Thị trường', href: '/thi-truong' },
          { label: 'Kỹ năng đặt hàng', active: true },
        ]}
      />
      
      {/* Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Kỹ năng đặt hàng</h1>
            <div className="w-24 h-1 bg-[#ff5722]"></div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <div className="prose max-w-none">
              <p className="font-bold text-lg mb-5 text-[#ff5722]">
                Hướng dẫn đặt hàng từ các trang thương mại điện tử Trung Quốc
              </p>

              <p className="mb-6 text-gray-700">
                Với sự phát triển mạnh mẽ của thương mại điện tử Trung Quốc như Taobao, Tmall, 1688,... đặt hàng online đã trở nên phổ biến hơn bao giờ hết. Tuy nhiên, không phải ai cũng có đủ kỹ năng và kinh nghiệm để đặt hàng hiệu quả. Delta Transport giúp bạn có được những kiến thức cơ bản nhất để đặt hàng thành công.
              </p>

              <div className="space-y-12 mt-10">
                {/* Phần 1: Tìm hiểu về các trang TMĐT */}
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-[#ff5722] shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff5722] text-white text-sm shadow-sm">1</span>
                    Tìm hiểu về các trang thương mại điện tử Trung Quốc
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Có nhiều trang thương mại điện tử lớn ở Trung Quốc, mỗi trang có đặc điểm và ưu điểm riêng. Dưới đây là một số trang phổ biến nhất:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mt-5">
                      <div className="border border-gray-200 p-4 rounded-lg bg-white hover:border-[#ff5722] transition-colors duration-200 shadow-sm">
                        <h3 className="font-bold text-[#ff5722]">TAOBAO</h3>
                        <p className="text-sm text-gray-600">
                          Đây là trang TMĐT lớn nhất Trung Quốc, với hàng triệu sản phẩm đa dạng, giá rẻ. Phù hợp với người tiêu dùng cá nhân.
                        </p>
                      </div>
                      
                      <div className="border border-gray-200 p-4 rounded-lg bg-white hover:border-[#ff5722] transition-colors duration-200 shadow-sm">
                        <h3 className="font-bold text-[#ff5722]">TMALL</h3>
                        <p className="text-sm text-gray-600">
                          Là nền tảng bán hàng cao cấp hơn của Alibaba, chủ yếu bán các sản phẩm chính hãng, có thương hiệu.
                        </p>
                      </div>
                      
                      <div className="border border-gray-200 p-4 rounded-lg bg-white hover:border-[#ff5722] transition-colors duration-200 shadow-sm">
                        <h3 className="font-bold text-[#ff5722]">1688</h3>
                        <p className="text-sm text-gray-600">
                          Trang TMĐT bán buôn, giá sỉ cực tốt, phù hợp cho các chủ kinh doanh nhỏ.
                        </p>
                      </div>
                      
                      <div className="border border-gray-200 p-4 rounded-lg bg-white hover:border-[#ff5722] transition-colors duration-200 shadow-sm">
                        <h3 className="font-bold text-[#ff5722]">PINDUODUO</h3>
                        <p className="text-sm text-gray-600">
                          Chuyên mua chung giá rẻ, càng nhiều người mua cùng một sản phẩm thì giá càng giảm.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phần 2: Kỹ năng tìm kiếm sản phẩm */}
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff5722] text-white text-sm shadow-sm">2</span>
                    Kỹ năng tìm kiếm sản phẩm hiệu quả
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Do rào cản ngôn ngữ, việc tìm kiếm sản phẩm trên các trang TMĐT Trung Quốc có thể gặp khó khăn. Dưới đây là một số kỹ năng cơ bản:
                    </p>
                    
                    <ul className="list-none space-y-3 mt-4">
                      <li className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <FontAwesomeIcon icon={faCheck} className="text-[#ff5722] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Sử dụng công cụ dịch</p>
                          <p className="text-gray-600 text-sm">Dùng Google Translate để dịch từ khóa tìm kiếm từ tiếng Việt sang tiếng Trung (giản thể).</p>
                        </div>
                      </li>
                      
                      <li className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <FontAwesomeIcon icon={faCheck} className="text-[#ff5722] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Tìm theo hình ảnh</p>
                          <p className="text-gray-600 text-sm">Các trang TMĐT Trung Quốc cho phép tìm kiếm bằng hình ảnh, giúp bạn tìm thấy sản phẩm tương tự mà không cần biết tên tiếng Trung.</p>
                        </div>
                      </li>
                      
                      <li className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <FontAwesomeIcon icon={faCheck} className="text-[#ff5722] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Dùng các công cụ hỗ trợ</p>
                          <p className="text-gray-600 text-sm">Có nhiều extension cho trình duyệt giúp dịch tự động giao diện các trang TMĐT Trung Quốc sang tiếng Việt.</p>
                        </div>
                      </li>
                      
                      <li className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <FontAwesomeIcon icon={faCheck} className="text-[#ff5722] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Tìm sản phẩm có nhiều đánh giá</p>
                          <p className="text-gray-600 text-sm">Nên ưu tiên các sản phẩm có nhiều lượt đánh giá và điểm đánh giá cao.</p>
                        </div>
                      </li>
                    </ul>

                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mt-6 flex gap-3">
                      <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Lưu ý khi tìm kiếm</p>
                        <p className="text-gray-600 text-sm">Kiểm tra kỹ thông tin về kích thước, chất liệu và đặc biệt là đánh giá của người mua trước khi quyết định mua hàng.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phần 3: Quy trình đặt hàng qua trung gian */}
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-[#ff5722] shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff5722] text-white text-sm shadow-sm">3</span>
                    Quy trình đặt hàng qua trung gian
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Khi đặt hàng qua Delta Transport, quy trình đặt hàng thường trải qua các bước sau:
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div className="relative">
                        <div className="border border-gray-200 p-4 rounded-lg bg-white h-full hover:border-[#ff5722] transition-colors duration-200 shadow-md">
                          <div className="flex justify-center mb-3">
                            <FontAwesomeIcon icon={faShoppingCart} className="text-[#ff5722] text-3xl" />
                          </div>
                          <h3 className="font-bold text-center mb-2 text-gray-800">Bước 1: Gửi yêu cầu</h3>
                          <p className="text-sm text-gray-600">
                            Gửi link sản phẩm và các thông tin như màu sắc, kích cỡ, số lượng đến Delta Transport.
                          </p>
                        </div>
                        <div className="hidden md:flex absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#ff5722] text-white items-center justify-center shadow-sm">
                          <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="border border-gray-200 p-4 rounded-lg bg-white h-full hover:border-[#ff5722] transition-colors duration-200 shadow-md">
                          <div className="flex justify-center mb-3">
                            <FontAwesomeIcon icon={faMoneyBillWave} className="text-[#ff5722] text-3xl" />
                          </div>
                          <h3 className="font-bold text-center mb-2 text-gray-800">Bước 2: Thanh toán</h3>
                          <p className="text-sm text-gray-600">
                            Thanh toán đặt cọc 70% giá trị đơn hàng để Delta Transport tiến hành đặt mua.
                          </p>
                        </div>
                        <div className="hidden md:flex absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#ff5722] text-white items-center justify-center shadow-sm">
                          <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                        </div>
                      </div>
                      
                      <div>
                        <div className="border border-gray-200 p-4 rounded-lg bg-white h-full hover:border-[#ff5722] transition-colors duration-200 shadow-md">
                          <div className="flex justify-center mb-3">
                            <FontAwesomeIcon icon={faExchangeAlt} className="text-[#ff5722] text-3xl" />
                          </div>
                          <h3 className="font-bold text-center mb-2 text-gray-800">Bước 3: Nhận hàng</h3>
                          <p className="text-sm text-gray-600">
                            Thanh toán phần còn lại và nhận hàng sau khi đơn hàng về đến kho Việt Nam.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mt-6 flex gap-3">
                      <FontAwesomeIcon icon={faInfoCircle} className="text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Thời gian vận chuyển</p>
                        <p className="text-gray-600 text-sm">Thời gian từ lúc đặt hàng đến khi nhận được hàng thường từ 5-10 ngày, tùy thuộc vào vị trí của shop và mùa mua sắm.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phần 4: Lưu ý quan trọng */}
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff5722] text-white text-sm shadow-sm">4</span>
                    Lưu ý quan trọng khi đặt hàng
                  </h2>
                  
                  <div className="space-y-5 mt-4 ml-4">
                    <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#ff5722] text-white font-medium text-sm shadow-sm">1</div>
                      <div>
                        <p className="font-medium text-gray-800">Chọn shop uy tín</p>
                        <p className="text-gray-600 text-sm">Shop có điểm đánh giá cao (trên 4.7 sao), số lượng giao dịch nhiều và đã hoạt động lâu năm thường đáng tin cậy hơn.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#ff5722] text-white font-medium text-sm shadow-sm">2</div>
                      <div>
                        <p className="font-medium text-gray-800">Kiểm tra kỹ thông tin sản phẩm</p>
                        <p className="text-gray-600 text-sm">Đặc biệt là kích thước, chất liệu và hình ảnh thực tế từ khách hàng đã mua.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#ff5722] text-white font-medium text-sm shadow-sm">3</div>
                      <div>
                        <p className="font-medium text-gray-800">Tính toán chi phí tổng</p>
                        <p className="text-gray-600 text-sm">Chi phí đặt hàng gồm: giá sản phẩm + phí vận chuyển nội địa Trung Quốc + phí vận chuyển quốc tế + phí dịch vụ.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#ff5722] text-white font-medium text-sm shadow-sm">4</div>
                      <div>
                        <p className="font-medium text-gray-800">Chú ý thời điểm mua hàng</p>
                        <p className="text-gray-600 text-sm">Các dịp lễ lớn (11/11, 12/12, Tết Nguyên Đán) thường có nhiều khuyến mãi lớn nhưng thời gian vận chuyển sẽ kéo dài hơn.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-gradient-to-r from-orange-50 to-gray-50 p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Bạn cần hỗ trợ thêm?</h3>
                <p className="mb-4 text-gray-700">
                  Delta Transport cung cấp dịch vụ đặt hàng trọn gói với mức phí chỉ từ 1% giá trị đơn hàng. Chúng tôi sẽ giúp bạn tìm kiếm, đặt hàng và vận chuyển sản phẩm từ Trung Quốc về Việt Nam một cách nhanh chóng và an toàn.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-medium px-6 py-3 rounded transition-colors shadow-sm">
                    Tư vấn miễn phí
                  </button>
                  <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded border border-gray-300 transition-colors shadow-sm">
                    Đặt hàng ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Component */}
      <Contact />
      
      {/* Footer Component */}
      <Footer />
    </main>
  );
};

export default OrderingSkills; 