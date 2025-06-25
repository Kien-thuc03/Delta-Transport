import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import heroImg from '../assets/hero-banner.webp';
import truckImg from '../assets/truck.webp';
import supportIcon from '../assets/icon-telemarketer.webp';
import iconTruck from '../assets/icon_wl_1.webp';
import iconPlane from '../assets/icon_wl_2.webp';
import iconShip from '../assets/icon_wl_3.webp';
import iconWarehouse from '../assets/icon_wl_4.png';
import banner1 from '../assets/bg12.webp';

const Home: React.FC = () => {
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
            <h2 className="text-5xl font-bold text-gray-800 mb-2 z-10 relative">DELTA TRANSPORT</h2>
            <div className="w-24 h-1 bg-[#ff5722] mx-auto mt-4 mb-6"></div>
            <div className="absolute top-0 left-0 right-0 text-[150px] font-bold text-black opacity-20 -z-10 text-center select-none">CHÀO MỪNG</div>
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

      {/* Service Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2.5">
              <img src={truckImg} alt="Lấy hàng Quảng Châu" className="w-full h-[200px] object-cover" />
              <h3 className="p-4 m-0 text-base font-semibold text-center text-gray-800 h-20 flex items-center justify-center">
                LẤY HÀNG QUẦN ÁO QUẢNG CHÂU CHO NỮ ĐẸP GIÁ SỈ TỐT NHẤT CHO CHỊ EM
              </h3>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2.5">
              <img src={truckImg} alt="Đặt hàng Quảng Châu" className="w-full h-[200px] object-cover" />
              <h3 className="p-4 m-0 text-base font-semibold text-center text-gray-800 h-20 flex items-center justify-center">
                ĐẶT HÀNG QUẢNG CHÂU VỀ KINH DOANH CÓ LỢI ÍCH GÌ?
              </h3>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2.5">
              <img src={truckImg} alt="Thuê xe tải" className="w-full h-[200px] object-cover" />
              <h3 className="p-4 m-0 text-base font-semibold text-center text-gray-800 h-20 flex items-center justify-center">
                CẦN THUÊ XE TẢI CHỞ HÀNG CỦA NHÀ XE Á CHÂU PHẢI LÀM THẾ NÀO?
              </h3>
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
      <Footer />
    </main>
  );
};

export default Home; 