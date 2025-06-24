import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import heroImg from '../assets/hero-banner.webp';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';
import supportIcon from '../assets/support-icon.png';
import emailIcon from '../assets/email-icon.png';

const Home: React.FC = () => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative flex items-center h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="absolute inset-0 bg-[#003366]/60"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-[600px] text-white">
            <h2 className="text-4xl font-bold mb-2.5">DELTA TRANSPORT</h2>
            <h3 className="text-3xl font-normal mb-5">Dịch vụ vận chuyển quốc tế</h3>
            <p className="text-xl text-[#ff5722] font-medium">An toàn - Nhanh chóng - Uy tín</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2.5">
              <img src={service1} alt="Lấy hàng Quảng Châu" className="w-full h-[200px] object-cover" />
              <h3 className="p-4 m-0 text-base font-semibold text-center text-gray-800 h-20 flex items-center justify-center">
                LẤY HÀNG QUẦN ÁO QUẢNG CHÂU CHO NỮ ĐẸP GIÁ SỈ TỐT NHẤT CHO CHỊ EM
              </h3>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2.5">
              <img src={service2} alt="Đặt hàng Quảng Châu" className="w-full h-[200px] object-cover" />
              <h3 className="p-4 m-0 text-base font-semibold text-center text-gray-800 h-20 flex items-center justify-center">
                ĐẶT HÀNG QUẢNG CHÂU VỀ KINH DOANH CÓ LỢI ÍCH GÌ?
              </h3>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2.5">
              <img src={service3} alt="Thuê xe tải" className="w-full h-[200px] object-cover" />
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
              <img src={emailIcon} alt="Newsletter" className="w-[50px] h-[50px]" />
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
    </main>
  );
};

export default Home; 