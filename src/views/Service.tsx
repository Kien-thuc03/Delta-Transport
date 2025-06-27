import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const Service: React.FC = () => {
  // Đảm bảo trang luôn cuộn lên đầu khi load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-1">
      <Header />
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Dịch vụ', href: '/dich-vu' },
        ]}
      />
      
      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Dịch vụ</h1>
            <div className="w-24 h-1 bg-[#ff5722]"></div>
          </div>
          
          <div className="content-page prose max-w-none">
            <p className="mb-4">
              Cùng với sự phát triển của thương mại điện tử, việc đặt mua hàng qua mạng đã trở thành một xu thế mới. 
              Xu thế này được cả các nhà buôn, các cửa hàng bán lẻ và người tiêu dùng cá nhân hưởng ứng. 
              Đáp ứng xu thế này, Delta Transport cung cấp dịch vụ trung gian nhập hàng Trung Quốc từ các website thương mại điện tử hàng đầu Trung Quốc, bao gồm:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <p>Tìm kiếm và tư vấn nguồn hàng bán buôn uy tín, giá tận gốc ở Trung Quốc trên các website 1688.com, taobao.com, tmall.com</p>
              </li>
              <li>
                <p>Giao dịch với nhà cung cấp Trung Quốc (Đặt hộ hàng, thanh toán hộ đơn hàng, khiếu nại nếu có vấn đề xảy ra đối với hàng hóa)</p>
              </li>
              <li>
                <p>Đóng gói và vận chuyển hàng hóa từ Trung Quốc về Việt Nam</p>
              </li>
            </ul>
            
            <p className="mb-4">
              Delta Transport được thành lập để tạo ra một giải pháp toàn diện cho việc bán hàng thương mại điện tử bao gồm: 
              Nhập hàng - Bán hộ hàng - Xử lý đơn hàng - Vận chuyển - Thanh toán.
            </p>
            
            <p className="mb-4">
              Trong dịch vụ nhập hàng, Delta Transport luôn luôn cam kết:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <p>Cước phí vận chuyển Trung Quốc - Việt Nam luôn rẻ nhất (chỉ từ 20.000đ/Kg)</p>
              </li>
              <li>
                <p>Phí dịch vụ nhập hộ hàng luôn thấp nhất (1% giá trị hàng hóa)</p>
              </li>
              <li>
                <p>Thời gian vận chuyển hàng hóa nhanh nhất (4 - 6 ngày)</p>
              </li>
              <li>
                <p>Đặt hàng trong vòng 24 giờ kể từ khi nhận được đặt cọc</p>
              </li>
              <li>
                <p>Hoàn tiền 100% nếu xảy ra sự cố mất hàng, thiếu hàng (do lỗi của Delta Transport)</p>
              </li>
            </ul>
            
            <p className="mb-8">
              Với đội ngũ và dịch vụ chuyên nghiệp, Delta Transport tin rằng sẽ làm Quý khách hàng hài lòng trong việc tìm kiếm nguồn hàng, 
              nhập hàng nhằm tiết kiệm chi phí tối đa và kinh doanh hiệu quả.
            </p>
            
            <div className="flex justify-center mb-8">
              <img 
                src="https://bizweb.dktcdn.net/100/356/587/files/gioi-thieu-dat-hang-quang-chau-gia-re-1.png?v=1558929136923" 
                alt="Dịch vụ nhập hàng Trung Quốc" 
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
            
            <p>
              Delta Transport xin trân trọng cảm ơn Quý khách hàng đã tin tưởng lựa chọn dịch vụ của Delta Transport hiểu rằng, 
              sự tin cậy của Quý khách hàng là tài sản vô giá giúp Delta Transport xây dựng thương hiệu của mình. 
              Delta Transport sẽ không ngừng hoàn thiện, nâng cao chất lượng dịch vụ nhằm đáp lại sự tin tưởng, ủng hộ và hợp tác của Quý khách hàng.
            </p>
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

export default Service; 