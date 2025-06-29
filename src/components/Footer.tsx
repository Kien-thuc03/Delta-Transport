import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone, faArrowUp, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import supportIcon from '../assets/icon-telemarketer.webp';


const Footer: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <footer>
      <div className="bg-white py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-5">TỔNG CÔNG TY CỔ PHẦN DELTA TRANSPORT</h3>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Delta Transport là doanh nghiệp hàng đầu cung cấp dịch vụ chuyển phát nhanh hàng hoá, bưu kiện trong nước, quốc tế tại Việt Nam.
            </p>
            <div>
              <p className="flex items-center gap-3 text-gray-600 mb-2.5">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#ff5722]" /> An Thượng, Hà Nội
              </p>
              <p className="flex items-center gap-3 text-gray-600 mb-2.5">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#ff5722]" /> deltawebltd@gmail.com
              </p>
              <p className="flex items-center gap-3 text-gray-600 mb-2.5">
                <FontAwesomeIcon icon={faPhone} className="text-[#ff5722]" /> 1900 6750
              </p>
            </div>
          </div>
          
          {/* GIỚI THIỆU - Accordion cho mobile */}
          <div className="border-b md:border-b-0 pb-3 md:pb-0">
            <div 
              className="flex justify-between items-center md:block cursor-pointer md:cursor-auto" 
              onClick={toggleMenu}
            >
              <h3 className="text-base font-semibold text-gray-800 mb-0 md:mb-5">GIỚI THIỆU</h3>
              <FontAwesomeIcon 
                icon={isMenuOpen ? faMinus : faPlus} 
                className="text-gray-400 block md:!hidden" 
              />
            </div>
            <ul className={`space-y-2.5 mt-3 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
              <li><Link to="/" className="text-gray-600 hover:text-[#ff5722]">Trang chủ</Link></li>
              <li><Link to="/gioi-thieu" className="text-gray-600 hover:text-[#ff5722]">Giới thiệu</Link></li>
              <li><Link to="/thi-truong" className="text-gray-600 hover:text-[#ff5722]">Thị trường</Link></li>
              <li><Link to="/dich-vu" className="text-gray-600 hover:text-[#ff5722]">Dịch vụ</Link></li>
              <li><Link to="/lien-he" className="text-gray-600 hover:text-[#ff5722]">Liên hệ</Link></li>
              <li><Link to="/hoi-dap" className="text-gray-600 hover:text-[#ff5722]">Hỏi đáp</Link></li>
            </ul>
          </div>
          
          <div>
            <div className="">
              <h3 className="text-base font-semibold text-gray-800 mb-5">HỖ TRỢ SIÊU TỐC</h3>
              <div className="flex items-center gap-4">
                <div className="hotline-icon">
                  <img src={supportIcon} alt="Support Icon" className="object-cover" />
                </div>
                <div>
                  <p className="text-gray-600 m-0">Liên hệ Hotline: 7:00 – 20:00</p>
                  <h4 className="text-2xl text-[#ff5722] font-semibold mt-1.5">1900 6750</h4>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-base font-semibold text-gray-800 my-5">KẾT NỐI</h3>
              <div className="flex gap-4">
                <Link to="https://www.facebook.com/" aria-label="Facebook" className="flex items-center justify-center w-10 h-10 bg-[#ff5722] rounded-full text-white hover:bg-[#e64a19]">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link to="https://www.youtube.com/" aria-label="Youtube" className="flex items-center justify-center w-10 h-10 bg-[#ff5722] rounded-full text-white hover:bg-[#e64a19]">
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
                <Link to="https://www.instagram.com/" aria-label="Instagram" className="flex items-center justify-center w-10 h-10 bg-[#ff5722] rounded-full text-white hover:bg-[#e64a19]">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#010e2a] py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-white m-0">&copy; Bản quyền thuộc về <span className="text-[#ff5722]">Delta Web</span> | Cung cấp bởi <span className="text-[#ff5722]">Sapo</span></p>
          <div className='hidden md:block'>
            <Link to="#top" className="flex items-center gap-1.5 text-[#ff5722]">
              Lên đầu trang <FontAwesomeIcon icon={faArrowUp} className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 