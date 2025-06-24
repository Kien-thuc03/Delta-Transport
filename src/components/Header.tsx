import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header>
      <div className="bg-gray-100 py-1.5 border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>Chào mừng bạn đến với dịch vụ vận chuyển của chúng tôi</p>
          <div className="flex gap-4">
            <a href="#"><FontAwesomeIcon icon={faInstagram} className="text-gray-600 hover:text-[#ff5722] text-lg" /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} className="text-gray-600 hover:text-[#ff5722] text-lg" /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} className="text-gray-600 hover:text-[#ff5722] text-lg" /></a>
          </div>
        </div>
      </div>
      
      <div className="flex-row items-center justify-between bg-[#010e2a] py-5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Delta Transport" className="h-12" />
            </a>
          </div>
          
          <div className="search-bar bg-white border-2 border-gray-300 rounded-md p-2 flex items-center">
            <input type="text" placeholder="Bạn muốn tìm thông tin nào..." className="w-full" />
            <button aria-label="Tìm kiếm" className="ml-2"><FontAwesomeIcon icon={faSearch} /></button>
          </div>
          
          <div className="flex items-center justify-between gap-4">
            <div className="">
              <p className="text-sm font-bold text-[#ff5722]">Tư vấn dịch vụ</p>
              <p className="text-white font-bold text-lg">1900 6750</p>
            </div>
            <div className="ml-4">
              <p className="text-sm font-bold text-[#ff5722]">Tư vấn vận chuyển</p>
              <p className="text-white font-bold text-lg">1900 6750</p>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="bg-[#ff5722]">
        <div className="container mx-auto px-4">
          <ul className="flex">
            <li><a href="/" className="block text-white py-4 px-5 font-medium hover:bg-white/10">Trang chủ</a></li>
            <li><a href="/gioi-thieu" className="block text-white py-4 px-5 font-medium hover:bg-white/10">Giới thiệu</a></li>
            <li><a href="/thi-truong" className="block text-white py-4 px-5 font-medium hover:bg-white/10">Thị trường</a></li>
            <li><a href="/dich-vu" className="block text-white py-4 px-5 font-medium hover:bg-white/10">Dịch vụ</a></li>
            <li><a href="/lien-he" className="block text-white py-4 px-5 font-medium hover:bg-white/10">Liên hệ</a></li>
            <li><a href="/hoi-dap" className="block text-white py-4 px-5 font-medium hover:bg-white/10">Hỏi đáp</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 