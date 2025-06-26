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
      <div className="bg-white">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Giới thiệu</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-800 leading-relaxed mb-5">
              <strong>
                Delta Transport – Công ty chuyển phát nhanh quốc tế hay Công ty vận chuyển hàng hóa đi nước ngoài. 
                SC Express là công ty dịch vụ liên kết với các hãng vận chuyển hàng đầu quốc tế DHL, UPS, FEDEX, TNT,… 
                đi đến hơn 220 quốc gia trên thế giới. Công ty chúng tôi chuyên về giao nhận kho vận hàng hóa Quốc Tế 
                bằng đường hàng không hàng đàu Việt Nam. Nhận chuyển phát nhanh hàng hóa, bưu phẩm, bưu kiện, chứng từ,… 
                với cước phí cạnh tranh nhất.
              </strong>
            </p>

            <em className="text-gray-800 leading-relaxed mb-5">
              chúng tôi luôn lấy chữ "TÍN" lên hàng đầu, đem đến cho khách hàng sự hài lòng và tin tưởng tuyệt đối 
              về dịch vụ của chúng tôi. Nhận gửi hàng hóa từ Việt Nam đi Mỹ, Canada, Úc, Taiwan, New Zealand, Trung Quốc, 
              Singapore, Malaysia,… và các quốc gia khác trên thế giới. Với đội ngũ nhân viên phục vụ nhiệt tình, chịu khó, 
              nhiều kinh nghiệm, được đào tạo bài bản sẽ giải quyết mọi thắc mắc và yêu cầu của khách hàng.
            </em>

            <p className="text-gray-800 leading-relaxed mb-5">Dịch vụ vận chuyển các loại hàng khó đi đến các quốc gia trên thế giới?</p>

            <p className="text-gray-800 leading-relaxed mb-5">Xử lý hàng hóa theo đúng tiêu chuẩn quy định của hãng bay và yêu cầu đầu vào của các nước nhập.</p>

            <p className="text-gray-800 font-bold mb-4">Đăng ký FDA bắt buộc hoàn toàn miễn phí.</p>

            <p className="text-gray-800 mb-2">
              <em><strong>" FDA là gì?"</strong></em> - Đây là câu hỏi mà hầu như bất cứ ai muốn vận chuyển hàng đi Mỹ hay chuyển hàng đi các nước khác
              đều luôn muốn tìm hiểu về nó. FDA là Cục quản lý Thực phẩm và Dược phẩm Hoa Kỳ (Food and Drug Administration)
              đây là cơ quan quản lý thực phẩm và dược phẩm của Hoa Kỳ, thuộc Bộ Y tế và Dịch vụ Nhân sinh Hoa Kỳ.
              Nhằm bảo vệ và thúc đẩy sức khỏe cộng đồng thông qua các qui định và giám định an toàn thực phẩm.
            </p>

            <p className="text-gray-800 font-bold mb-4">Đăng ký MSDS bắt buộc hoàn toàn miễn phí.</p>

            <p className="text-gray-800 mb-5">
              <em><strong>"MSDS là gì?"</strong></em> – MSDS là Bảng chỉ dẫn an toàn hóa chất (tiếng Anh viết tắt MSDS từ Material Safety Data Sheet)
              là một dạng văn bản chứa các dữ liệu liên quan đến các thuộc tính của một hóa chất cụ thể nào đó. 
              Nó được đưa ra để cho những người cần phải tiếp xúc hay làm việc với hóa chất đó, không kể là dài hạn 
              hay ngắn hạn các trình tự để làm việc với nó một cách an toàn hay các xử lý cần thiết khi bị ảnh hưởng của nó.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
