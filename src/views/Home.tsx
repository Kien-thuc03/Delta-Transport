import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoModal from '../components/VideoModal';
import { useVideoModal } from '../controllers/VideoController';

import heroImg from '../assets/hero-banner.webp';
import truckImg from '../assets/truck.webp';
import supportIcon from '../assets/icon-telemarketer.webp';
import iconTruck from '../assets/icon_wl_1.webp';
import iconPlane from '../assets/icon_wl_2.webp';
import iconShip from '../assets/icon_wl_3.webp';
import iconWarehouse from '../assets/icon_wl_4.png';
import banner1 from '../assets/bg12.webp';

const Home: React.FC = () => {
  const { modalState, openVideoModal, closeVideoModal } = useVideoModal();

  return (
    <main className="flex-1">
      <Header />
      {/* Hero Section */}
      <section className="relative flex items-center h-[500px] bg-cover bg-center">
        <img src={heroImg} alt="Hero Banner" className="w-full h-full object-cover" />
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 relative">
            <div className="relative z-10">
              <h2 className="text-5xl font-medium text-gray-800 mb-2">DELTA TRANSPORT</h2>
              <div className="w-24 h-1 bg-[#ff5722] mx-auto mt-4 mb-6"></div>
            </div>
            <div className="absolute -top-15 left-0 right-0 text-[100px] font-bold text-black opacity-5 -z-10 text-center select-none">CHÀO MỪNG</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Cột 1 */}
            <div className="grid gap-6">
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow bg-white">
                <div className="flex gap-4 items-start">
                  <div className="text-[#ff5722] p-3 bg-orange-50 rounded-lg">
                    <img src={iconTruck} alt="ĐƯỜNG BỘ" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">ĐƯỜNG BỘ</h3>
                    <p className="text-gray-600">Chúng tôi cung cấp những phương tiện đường bộ tối ưu nhất</p>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow bg-white">
                <div className="flex gap-4 items-start">
                  <div className="text-[#ff5722] p-3 bg-orange-50 rounded-lg">
                    <img src={iconPlane} alt="ĐƯỜNG HÀNG KHÔNG" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">ĐƯỜNG HÀNG KHÔNG</h3>
                    <p className="text-gray-600">Chúng tôi cung cấp dịch vụ vận chuyển quốc tế bằng máy bay</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cột 2 - Hình ảnh xe tải */}
            <div className="flex justify-center items-center">
              <img src={truckImg} alt="Transport Truck" className="w-full max-w-md" />
            </div>
            
            {/* Cột 3 */}
            <div className="grid gap-6">
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow bg-white">
                <div className="flex gap-4 items-start">
                  <div className="text-[#ff5722] p-3 bg-orange-50 rounded-lg">
                    <img src={iconShip} alt="ĐƯỜNG BIỂN" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">ĐƯỜNG BIỂN</h3>
                    <p className="text-gray-600">Chúng tôi cung cấp dịch vụ vận chuyển bằng đường biển nhanh chóng</p>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow bg-white">
                <div className="flex gap-4 items-start">
                  <div className="text-[#ff5722] p-3 bg-orange-50 rounded-lg">
                    <img src={iconWarehouse} alt="VẬN CHUYỂN TẠI KHO" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">VẬN CHUYỂN TẠI KHO</h3>
                    <p className="text-gray-600">Tại kho chúng tôi di chuyển hàng bằng xe nâng để đảm bảo hàng hóa an toàn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sứ mệnh vận chuyển Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="overflow-hidden rounded-lg relative">
                <img src={banner1} alt="Nhân viên vận chuyển" className="w-[85%] h-auto mx-auto" />
                <a 
                  href="javascript:;" 
                  className="video_play play-now" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    openVideoModal("https://www.youtube.com/embed/TxlOqKwWcT4"); 
                  }}
                  aria-label="Xem video"
                  title="Xem video"
                >
                  <i className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </i>
                  <span className="ripple"></span>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col gap-6">
              <h2 className="text-1.5xl md:text-2xl font-bold text-gray-800">CHÚNG TÔI Ở ĐÂY ĐỂ HOÀN THÀNH SỨ MỆNH VẬN CHUYỂN</h2>
              <p className="text-gray-600">Được thành lập từ năm 2010 chúng tôi đã có trên 9 năm kinh nghiệm về vận chuyển hàng hóa, đáp ứng yêu cầu của hàng nghìn khách hàng.</p>
              
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center gap-3">
                  <div className="text-white bg-[#ff5722] rounded-full p-1 w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">PHƯƠNG THỨC ĐẶT HÀNG VÀ THANH TOÁN DỄ DÀNG</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-white bg-[#ff5722] rounded-full p-1 w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">SẢN PHẨM ĐƯỢC ĐẢM BẢO CHÍNH HÃNG VÀ CÓ TEM KIỂM ĐỊNH.</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-white bg-[#ff5722] rounded-full p-1 w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">MỌI SẢN PHẨM ĐỀU ĐƯỢC BẢO HIỂM TRONG QUÁ TRÌNH VẬN CHUYỂN.</span>
                </div>
              </div>
              
              <div className="mt-4">
                <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-medium py-3 px-8 rounded transition-colors">
                  ĐỌC TIẾP
                </button>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-16">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-[#ff5722] text-4xl font-bold">84220+</div>
                    <div className="text-gray-700 font-medium">Đơn hàng/năm</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-[#ff5722] text-4xl font-bold">24</div>
                    <div className="text-gray-700 font-medium">Chi nhánh</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-[#ff5722] text-4xl font-bold">26990+</div>
                    <div className="text-gray-700 font-medium">Khách hàng</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-[#ff5722] text-4xl font-bold">6</div>
                    <div className="text-gray-700 font-medium">Giải thưởng</div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex items-center gap-5 bg-white rounded-lg p-5 shadow-sm">
            <div>
              <img src={supportIcon} alt="Support" className="w-[50px] h-[50px]" />
            </div>
            <div>
              <h3 className="mt-0 mb-2.5 text-base text-gray-800">Tổng đài hỗ trợ (8h00 - 22h00)</h3>
              <h2 className="m-0 mb-1.5 text-2xl text-[#ff5722]">1900 6750</h2>
              <p className="m-0 text-gray-600">Email: deltawebltd@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-5 bg-white rounded-lg p-5 shadow-sm">
            <div>
              <img src={truckImg} alt="Newsletter" className="w-[50px] h-[50px]" />
            </div>
            <div className="flex-1">
              <h3 className="mt-0 mb-2.5 text-base text-gray-800">Nhận tin ưu đãi mới nhất!</h3>
              <div className="flex mt-4">
                <input 
                  type="email" 
                  placeholder="Nhập email" 
                  className="flex-1 p-2.5 border border-gray-300 border-r-0 rounded-l"
                />
                <button 
                  type="button" 
                  aria-label="Đăng ký"
                  className="bg-[#ff5722] text-white border-0 px-5 py-2.5 rounded-r font-medium"
                >
                  ĐĂNG KÝ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-8 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-[#003366] m-0">DELTA TRANSPORT</h2>
        </div>
      </section>

      {/* Video Modal Component */}
      <VideoModal 
        isOpen={modalState.isOpen} 
        videoUrl={modalState.videoUrl} 
        onClose={closeVideoModal}
      />

      <Footer />
    </main>
  );
};

export default Home; 