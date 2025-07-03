import React, { useState } from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { useRecruitmentController } from '../controllers/RecruitmentController';

const Recruitment: React.FC = () => {
  const { recruitments, isLoading, error } = useRecruitmentController();
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 2;
  
  // Đảm bảo trang luôn cuộn lên đầu khi load
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Tính toán số trang
  const totalPages = Math.ceil((recruitments?.length || 0) / jobsPerPage);
  
  // Lấy danh sách việc làm cho trang hiện tại
  const getCurrentJobs = () => {
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;
    return recruitments?.slice(startIndex, endIndex) || [];
  };
  
  const jobListings = getCurrentJobs();
  
  // Xử lý chuyển trang
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="flex-1">
      <Header />
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Tin tuyển dụng', active: true },
        ]}
      />
      
      {/* Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Tin tuyển dụng</h1>
            <div className="w-24 h-1 bg-[#ff5722]"></div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <div className="prose max-w-none">
              <p className="text-[#ff5722] font-bold text-lg mb-8">Cùng tham gia vào đội ngũ Delta Transport</p>
              
              <p className="mb-6">
                Delta Transport là doanh nghiệp hàng đầu trong lĩnh vực vận chuyển hàng hóa Trung Quốc - Việt Nam với đội ngũ nhân viên chuyên nghiệp. 
                Chúng tôi luôn tìm kiếm những người tài năng, năng động và có đam mê để gia nhập đội ngũ của chúng tôi.
              </p>
              
              <p className="font-bold text-lg text-gray-700 mb-2">Vị trí đang tuyển dụng:</p>
              
              {/* Hiển thị loading state */}
              {isLoading && (
                <div className="py-10 text-center">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#ff5722] border-r-transparent"></div>
                  <p className="mt-4 text-gray-600">Đang tải dữ liệu...</p>
                </div>
              )}
              
              {/* Hiển thị lỗi nếu có */}
              {error && (
                <div className="py-10 text-center">
                  <p className="text-red-500">{error}</p>
                </div>
              )}
              
              {/* Hiển thị thông báo khi không có dữ liệu */}
              {!isLoading && !error && (!jobListings || jobListings.length === 0) && (
                <div className="py-10 text-center">
                  <p className="text-gray-600">Hiện không có tin tuyển dụng nào.</p>
                </div>
              )}
              
              {/* Danh sách vị trí tuyển dụng */}
              {!isLoading && !error && jobListings && jobListings.length > 0 && (
                <div className="space-y-8 mt-6">
                  {jobListings.map((job) => (
                    <div key={job.id} className="border-b border-gray-200 pb-6">
                      <div className="flex flex-wrap justify-between items-start mb-4">
                        <h3 className="text-[#ff5722] font-bold text-xl">{job.title}</h3>
                        <div className="mt-2 md:mt-0">
                          <span className="bg-orange-100 text-[#ff5722] text-xs font-medium px-2.5 py-1 rounded-full mr-2">
                            {job.location}
                          </span>
                          <span className="bg-orange-100 text-[#ff5722] text-xs font-medium px-2.5 py-1 rounded-full">
                            {job.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-500 mb-3">Hạn nộp hồ sơ: {job.deadline}</div>
                      
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-800 mb-2">Yêu cầu:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {job.requirements && job.requirements.map((req, index) => (
                            <li key={index} className="text-gray-600">{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-800 mb-2">Quyền lợi:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {job.benefits && job.benefits.map((benefit, index) => (
                            <li key={index} className="text-gray-600">{benefit}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-5">
                        <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-medium py-2 px-5 rounded-md transition-colors text-sm">
                          Ứng tuyển ngay
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Phân trang */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-8">
                  <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    Trước
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={`px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-[#ff5722] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  
                  <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    Tiếp
                  </button>
                </div>
              )}
              
              {/* Thông tin ứng tuyển */}
              <div className="mt-10 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-[#ff5722] font-bold text-lg mb-4">Cách thức ứng tuyển:</h3>
                <p className="mb-3">Các ứng viên quan tâm vui lòng gửi hồ sơ qua email hoặc nộp trực tiếp tại văn phòng công ty:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Email:</strong> tuyendung@delta-transport.com</li>
                  <li><strong>Địa chỉ:</strong> Tầng 6, Tòa nhà Ladeco, Số, 266 P. Đội Cấn, Ba Đình, Hà Nội</li>
                  <li><strong>Hotline:</strong> 1900 6750</li>
                </ul>
                <p className="mt-4 text-gray-600 italic">Hồ sơ bao gồm: CV chi tiết, đơn xin việc, các giấy tờ liên quan và ảnh 4x6 chụp không quá 3 tháng.</p>
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

export default Recruitment; 