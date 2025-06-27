import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);

  // Helper function để handle hover với delay
  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
      setNewsDropdownOpen(false);
    }, 150); // 150ms delay
    setHoverTimeout(timeout);
  };

  const handleDropdownEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setDropdownOpen(true);
  };

  // Helper function để đóng mobile menu và reset states
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    setNewsDropdownOpen(false);
  };

  // Đóng mobile menu khi resize về desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
        setNewsDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  // Đóng dropdown khi click outside (chỉ cho desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Chỉ áp dụng cho desktop (khi mobile menu không mở)
      if (!mobileMenuOpen && dropdownOpen && !(event.target as Element).closest('.dropdown-container')) {
        setDropdownOpen(false);
        setNewsDropdownOpen(false);
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
          setHoverTimeout(null);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [dropdownOpen, hoverTimeout, mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Header */}
      <div className="bg-gray-100 py-1.5 border-b border-gray-200">
        <div className="flex justify-between items-center container mx-auto px-4">
          <p className="text-sm text-gray-700 hidden md:block">Chào mừng bạn đến với dịch vụ vận chuyển của chúng tôi</p>
          <div className="flex gap-3">
            <a 
              href="#" 
              aria-label="Instagram"
              title="Theo dõi chúng tôi trên Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-gray-600 hover:text-[#ff5722] text-lg transition-colors" />
            </a>
            <a 
              href="#" 
              aria-label="YouTube"
              title="Kênh YouTube của chúng tôi"
            >
              <FontAwesomeIcon icon={faYoutube} className="text-gray-600 hover:text-[#ff5722] text-lg transition-colors" />
            </a>
            <a 
              href="#" 
              aria-label="Facebook"
              title="Trang Facebook của chúng tôi"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-gray-600 hover:text-[#ff5722] text-lg transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="bg-[#010e2a] py-3 lg:py-5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="logo flex-shrink-0">
              <a href="/">
                <img src={logo} alt="Delta Transport" className="h-8 sm:h-10 lg:h-12" />
              </a>
            </div>
            
            {/* Desktop Search Bar */}
            <div className="hidden lg:flex search-bar bg-white rounded-md p-2 items-center w-96 xl:w-[500px] mx-4">
              <input 
                type="text" 
                placeholder="Bạn muốn tìm thông tin nào..." 
                className="w-full focus:outline-none text-sm"
              />
              <button 
                aria-label="Tìm kiếm" 
                className="ml-2 text-gray-500 hover:text-[#ff5722] transition-colors"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            
            {/* Contact Info - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
              <div className="text-center">
                <p className="text-xs xl:text-sm font-bold text-[#ff5722]">Tư vấn dịch vụ</p>
                <p className="text-white font-bold text-sm xl:text-lg whitespace-nowrap">1900 6750</p>
              </div>
              <div className="text-center">
                <p className="text-xs xl:text-sm font-bold text-[#ff5722]">Tư vấn vận chuyển</p>
                <p className="text-white font-bold text-sm xl:text-lg whitespace-nowrap">1900 6750</p>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-3 lg:hidden">
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#ff5722] hover:text-white transition-colors p-2"
                aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
              >
                <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-lg" />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar - Luôn hiển thị */}
          <div className="lg:hidden mt-3">
            <div className="search-bar bg-white rounded-md p-2 flex items-center">
              <input 
                type="text" 
                placeholder="Bạn muốn tìm thông tin nào..." 
                className="w-full focus:outline-none text-sm"
              />
              <button 
                aria-label="Tìm kiếm" 
                className="ml-2 text-gray-500 hover:text-[#ff5722] transition-colors"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="bg-[#ff5722] relative">
        {/* Desktop Navigation */}
        <div className="container mx-auto px-4">
          <ul className="hidden lg:flex">
            <li>
              <Link to="/" className="block text-white py-4 px-5 font-medium hover:bg-white/10 transition-colors">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to="/gioi-thieu" className="block text-white py-4 px-5 font-medium hover:bg-white/10 transition-colors">
                Giới thiệu
              </Link>
            </li>
            <li 
              className="relative dropdown-container"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <a 
                href="/thi-truong" 
                className="text-white py-4 px-5 font-medium hover:bg-white/10 flex items-center transition-colors"
              >
                Thị trường
                <FontAwesomeIcon 
                  icon={faChevronDown} 
                  className={`ml-1.5 text-xs transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
                />
              </a>
              <div 
                className={`absolute left-0 bg-white shadow-lg min-w-[200px] z-50 transition-all duration-200 ${
                  dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <ul>
                  <li 
                    className="relative group"
                    onMouseEnter={() => setNewsDropdownOpen(true)}
                    onMouseLeave={() => setNewsDropdownOpen(false)}
                  >
                    <a 
                      href="/tin-tuc" 
                      className="flex items-center justify-between text-gray-700 hover:text-[#ff5722] hover:bg-gray-50 py-3 px-5 border-b border-gray-100 transition-colors"
                    >
                      <span className="flex items-center">Tin tức</span>
                      <FontAwesomeIcon icon={faChevronDown} className="text-xs rotate-[-90deg]" />
                    </a>
                    
                    {/* Sub-dropdown cho Tin tức */}
                    <div 
                      className={`absolute left-full top-0 bg-white shadow-lg min-w-[180px] z-60 transition-all duration-200 ${
                        newsDropdownOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-2'
                      }`}
                    >
                      <ul>
                        <li>
                          <a href="/tin-tuyen-dung" className="flex items-center text-gray-700 hover:text-[#ff5722] hover:bg-gray-50 py-3 px-5 transition-colors">
                            Tin tuyển dụng
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="/ky-nang-dat-hang" className="flex items-center text-gray-700 hover:text-[#ff5722] hover:bg-gray-50 py-3 px-5 transition-colors">
                      Kỹ năng đặt hàng
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/dich-vu" className="block text-white py-4 px-5 font-medium hover:bg-white/10 transition-colors">
                Dịch vụ
              </Link>
            </li>
            <li>
              <a href="/lien-he" className="block text-white py-4 px-5 font-medium hover:bg-white/10 transition-colors">
                Liên hệ
              </a>
            </li>
            <li>
              <a href="/hoi-dap" className="block text-white py-4 px-5 font-medium hover:bg-white/10 transition-colors">
                Hỏi đáp
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-[#ff5722] shadow-lg z-40 transition-all duration-300 transform ${
          mobileMenuOpen ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        }`}>
          <div className="container mx-auto px-4">
            <ul className="py-2">
              <li>
                <Link 
                  to="/" 
                  className="block text-white py-3 px-4 font-medium hover:bg-white/10 transition-colors border-b border-white/10"
                  onClick={closeMobileMenu}
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link 
                  to="/gioi-thieu" 
                  className="block text-white py-3 px-4 font-medium hover:bg-white/10 transition-colors border-b border-white/10"
                  onClick={closeMobileMenu}
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <div>
                  <div className="flex items-center justify-between border-b border-white/10">
                    <Link
                      to="/thi-truong" 
                      className="text-white py-3 px-4 font-medium hover:bg-white/10 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Thị trường
                    </Link>
                    <button
                      type="button"
                      className="text-white py-3 px-4 hover:bg-white/10 active:bg-white/20 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setDropdownOpen(!dropdownOpen);
                      }}
                      aria-label="Toggle dropdown"
                    >
                      <FontAwesomeIcon 
                        icon={faChevronDown} 
                        className={`text-xs transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>
                  </div>
                  <div className={`bg-white/10 transition-all duration-200 ${
                    dropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    {/* Tin tức với sub-menu */}
                    <div>
                      <div className="flex items-center justify-between">
                        <Link
                          to="/tin-tuc"
                          className="text-white py-2 px-8 hover:bg-white/10 transition-colors text-sm"
                          onClick={closeMobileMenu}
                        >
                          Tin tức
                        </Link>
                        <button
                          type="button"
                          className="text-white py-2 px-4 hover:bg-white/10 active:bg-white/20 transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setNewsDropdownOpen(!newsDropdownOpen);
                          }}
                          aria-label="Toggle news dropdown"
                        >
                          <FontAwesomeIcon 
                            icon={faChevronDown} 
                            className={`text-xs transition-transform ${newsDropdownOpen ? 'rotate-180' : ''}`} 
                          />
                        </button>
                      </div>
                      <div className={`bg-white/20 transition-all duration-200 ${
                        newsDropdownOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}>
                        <a 
                          href="/tin-tuyen-dung" 
                          className="block text-white py-2 px-12 hover:bg-white/10 transition-colors text-xs"
                          onClick={closeMobileMenu}
                        >
                          Tin tuyển dụng
                        </a>
                      </div>
                    </div>
                    
                    {/* Kỹ năng đặt hàng - không có sub-menu */}
                    <a 
                      href="/ky-nang-dat-hang" 
                      className="block text-white py-2 px-8 hover:bg-white/10 transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      Kỹ năng đặt hàng
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <Link 
                  to="/dich-vu" 
                  className="block text-white py-3 px-4 font-medium hover:bg-white/10 transition-colors border-b border-white/10"
                  onClick={closeMobileMenu}
                >
                  Dịch vụ
                </Link>
              </li>
              <li>
                <a 
                  href="/lien-he" 
                  className="block text-white py-3 px-4 font-medium hover:bg-white/10 transition-colors border-b border-white/10"
                  onClick={closeMobileMenu}
                >
                  Liên hệ
                </a>
              </li>
              <li>
                <a 
                  href="/hoi-dap" 
                  className="block text-white py-3 px-4 font-medium hover:bg-white/10 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Hỏi đáp
                </a>
              </li>
            </ul>
            
            {/* Mobile Contact Info */}
            <div className="px-4 py-4 border-t border-white/20">
              <div className="flex justify-around text-center">
                <div>
                  <p className="text-xs font-bold text-white/80">Tư vấn dịch vụ</p>
                  <a href="tel:19006750" className="text-white font-bold text-sm">1900 6750</a>
                </div>
                <div>
                  <p className="text-xs font-bold text-white/80">Tư vấn vận chuyển</p>
                  <a href="tel:19006750" className="text-white font-bold text-sm">1900 6750</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
};

export default Header; 