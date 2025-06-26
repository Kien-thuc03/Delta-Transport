import React from 'react';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const About: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giới thiệu', active: true }
  ];

  return (
    <Layout>
      <div className="bg-gray-50">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm">
            {/* Page Title */}
            <div className="border-b border-gray-200 px-6 py-6">
              <h1 className="text-3xl font-bold text-gray-900">
                <a href="#" className="hover:text-[#ff5722] transition-colors">Giới thiệu</a>
              </h1>
            </div>

            {/* Content */}
            <div className="px-6 py-8">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  <strong>
                    Delta Transport – Công ty chuyển phát nhanh quốc tế hay Công ty vận chuyển hàng hóa đi nước ngoài. 
                    SC Express là công ty dịch vụ liên kết với các hãng vận chuyển hàng đầu quốc tế DHL, UPS, FEDEX, TNT,… 
                    đi đến hơn 220 quốc gia trên thế giới. Công ty chúng tôi chuyên về giao nhận kho vận hàng hóa Quốc Tế 
                    bằng đường hàng không hàng đàu Việt Nam. Nhận chuyển phát nhanh hàng hóa, bưu phẩm, bưu kiện, chứng từ,… 
                    với cước phí cạnh tranh nhất.
                  </strong>
                </p>

                <p className="text-gray-700 italic leading-relaxed mb-6">
                  chúng tôi luôn lấy chữ <strong>'TÍN'</strong> lên hàng đầu, đem đến cho khách hàng sự hài lòng và tin tưởng tuyệt đối 
                  về dịch vụ của chúng tôi. Nhận gửi hàng hóa từ Việt Nam đi Mỹ, Canada, Úc, Taiwan, New Zealand, Trung Quốc, 
                  Singapore, Malaysia,… và các quốc gia khác trên thế giới. Với đội ngũ nhân viên phục vụ nhiệt tình, chịu khó, 
                  nhiều kinh nghiệm, được đào tạo bài bản sẽ giải quyết mọi thắc mắc và yêu cầu của khách hàng.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Dịch vụ vận chuyển các loại hàng khó đi đến các quốc gia trên thế giới?
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Xử lý hàng hóa theo đúng tiêu chuẩn quy định của hãng bay và yêu cầu đầu vào của các nước nhập.
                </p>

                {/* FDA Section */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <p className="text-gray-900 font-bold text-lg mb-4">
                    Đăng ký FDA bắt buộc hoàn toàn miễn phí.
                  </p>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      <em><strong>"FDA là gì?"</strong></em>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Đây là câu hỏi mà hầu như bất cứ ai muốn vận chuyển hàng đi Mỹ hay chuyển hàng đi các nước khác 
                      đều luôn muốn tìm hiểu về nó. FDA là Cục quản lý Thực phẩm và Dược phẩm Hoa Kỳ (Food and Drug Administration) 
                      đây là cơ quan quản lý thực phẩm và dược phẩm của Hoa Kỳ, thuộc Bộ Y tế và Dịch vụ Nhân sinh Hoa Kỳ. 
                      Nhằm bảo vệ và thúc đẩy sức khỏe cộng đồng thông qua các qui định và giám định an toàn thực phẩm.
                    </p>
                  </div>
                </div>

                {/* MSDS Section */}
                <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                  <p className="text-gray-900 font-bold text-lg mb-4">
                    Đăng ký MSDS bắt buộc hoàn toàn miễn phí.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      <em><strong>"MSDS là gì?"</strong></em>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      MSDS là Bảng chỉ dẫn an toàn hóa chất (tiếng Anh viết tắt MSDS từ Material Safety Data Sheet) 
                      là một dạng văn bản chứa các dữ liệu liên quan đến các thuộc tính của một hóa chất cụ thể nào đó. 
                      Nó được đưa ra để cho những người cần phải tiếp xúc hay làm việc với hóa chất đó, không kể là dài hạn 
                      hay ngắn hạn các trình tự để làm việc với nó một cách an toàn hay các xử lý cần thiết khi bị ảnh hưởng của nó.
                    </p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-[#ff5722] to-[#e64a19] text-white rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">Cần hỗ trợ tư vấn?</h3>
                  <p className="mb-4">Liên hệ với chúng tôi để được tư vấn miễn phí về dịch vụ vận chuyển</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="tel:19006750" 
                      className="bg-white text-[#ff5722] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Gọi ngay: 1900 6750
                    </a>
                    <a 
                      href="/lien-he" 
                      className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#ff5722] transition-colors"
                    >
                      Liên hệ trực tuyến
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
