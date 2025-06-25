import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header>
      <div className="container mx-auto px-4 bg-gray-100 py-1.5 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <p>Chào mừng bạn đến với dịch vụ vận chuyển của chúng tôi</p>
          <div className="flex gap-4">
            <a href="#"><FontAwesomeIcon icon={faInstagram} className="text-gray-600 hover:text-[#ff5722] text-lg" /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} className="text-gray-600 hover:text-[#ff5722] text-lg" /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} className="text-gray-600 hover:text-[#ff5722] text-lg" /></a>
          </div>
        </div>
      </div>
      
      <div className="bg-[#010e2a] py-5 container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Delta Transport" className="h-12" />
            </a>
          </div>
          
          <div className="search-bar bg-white rounded-md p-2 flex items-center w-96 md:w-[500px]">
            <input type="text" placeholder="Bạn muốn tìm thông tin nào..." className="w-full focus:outline-none" />
            <button aria-label="Tìm kiếm" className="ml-2 text-gray-500"><FontAwesomeIcon icon={faSearch} /></button>
          </div>
          
          <div className="flex items-center justify-between gap-6">
            <div className="text-right">
              <p className="text-sm font-bold text-[#ff5722] text-center">Tư vấn dịch vụ</p>
              <p className="text-white font-bold text-lg text-center">1900 6750</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-[#ff5722] text-center">Tư vấn vận chuyển</p>
              <p className="text-white font-bold text-lg text-center">1900 6750</p>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="bg-[#ff5722] relative">
        <div className="container mx-auto px-4">
          <ul className="flex">
            <li><a href="/" className="block text-white py-4 px-5 font-medium hover:bg-white/10">Trang chủ</a></li>
            <li><a href="/gioi-thieu" className="block text-white py-4 px-5 font-medium hover:bg-white/10">Giới thiệu</a></li>
            <li className="relative group">
              <a 
                href="#" 
                className="block text-white py-4 px-5 font-medium hover:bg-white/10 flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                }}
              >
                Thị trường
                <FontAwesomeIcon icon={faChevronDown} className="ml-1.5 text-xs" />
              </a>
              <div className={`absolute left-0 bg-white shadow-lg min-w-[200px] z-10 ${dropdownOpen ? 'block' : 'hidden'} group-hover:block`}>
                <ul>
                  <li>
                    <a href="/tin-tuc" className="flex items-center text-gray-700 hover:text-[#ff5722] hover:bg-gray-50 py-3 px-5 border-b border-gray-100">
                      <span className="mr-1.5 text-[#ff5722]">›</span>Tin tức
                    </a>
                  </li>
                  <li>
                    <a href="/ky-nang-dat-hang" className="flex items-center text-gray-700 hover:text-[#ff5722] hover:bg-gray-50 py-3 px-5">
                      <span className="mr-1.5 text-[#ff5722]">›</span>Kỹ năng đặt hàng
                    </a>
                  </li>
                </ul>
              </div>
            </li>
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