import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const Faq: React.FC = () => {
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
          { label: 'Hỏi đáp', active: true },
        ]}
      />
      
      {/* Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Hỏi đáp</h1>
            <div className="w-24 h-1 bg-[#ff5722]"></div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <div className="prose max-w-none">
              <p className="text-[#ff5722] font-bold text-lg">Giải đáp thắc mắc khi order hàng tại Delta Transport</p>
              
              <h3 className="text-[#ff5722] font-bold mt-8 mb-2">Cách tìm kiếm sản phẩm ra sao?</h3>
              <p>Do mua hàng trên web Trung Quốc nên các bạn thường rất khó để tìm hàng. Vì vậy, các bạn có thể sử dụng kỹ năng tìm kiếm sản phẩm bằng các từ khóa hoặc dùng google translate để phiên dịch từ tiếng Việt sang tiếng Trung (giản thể)</p>
              
              <h3 className="text-[#ff5722] font-bold mt-6 mb-2">Cách xem hàng như thế nào?</h3>
              <p>Truy cập trang web mua hàng và chọn đúng loại hàng cần tìm, bạn có thể lựa chọn theo shop hoặc theo sản phẩm mình quan tâm.</p>
              
              <div className="flex justify-center my-6">
                <img 
                  src="https://bizweb.dktcdn.net/thumb/large/100/356/587/files/dat-hang.png?v=1558928983916" 
                  alt="Hướng dẫn đặt hàng" 
                  className="max-w-full h-auto rounded shadow-sm"
                />
              </div>
              
              <h3 className="text-[#ff5722] font-bold mt-6 mb-2">Thế nào là shop uy tín?</h3>
              <p>Shop uy tín là shop được người tiêu dùng tín nhiệm được đánh giá trên 3 tiêu chí: độ tin cậy, thái độ phục vụ và tốc độ giao hàng.</p>
              <p>Độ uy tín của shop hàng sắp xếp theo thứ tự : trái tim</p>
              <p>Shop có độ tin cậy cao thì giao dịch càng có tỷ lệ thành công cao.</p>
              <p>Để xem đánh giá shop đấy có uy tín hay không bạn có thể tham khảo các comment (bình luận) của khách hàng khi mua hàng, tuy nhiên bạn cũng không nên tin hoàn toàn do bây giờ các shop cũng giở các chiêu trò Pr, quảng cáo nên có thể các bình luận đó là các bình luận ảo.</p>
              
              <h3 className="text-[#ff5722] font-bold mt-6 mb-2">Tại sao phí vận chuyển nhiều sp cùng shop lại thấp hơn khác shop?</h3>
              <p>Nếu bạn mua hàng với số lượng càng lớn thì shop sẽ tính theo giá bán sỉ nên phí vận chuyển một lần cho một shop sẽ thấp hơn khi bạn "nhặt" sản phẩm ở nhiều shop. Như vậy, tất yếu phí vận chuyển khác shop sẽ cao hơn cùng shop dù có số lượng sản phẩm bằng nhau.</p>
              
              <h3 className="text-[#ff5722] font-bold mt-6 mb-2">Tại sao tôi nên mua nhiều sản phẩm trong cùng một đơn hàng?</h3>
              <p>Để tiết kiệm hơn các chi phí vận chuyển, bạn càng mua số lượng lớn, chi phí càng giảm. Mời bạn tham khảo phí dịch vụ của chúng tôi tại đây</p>
              
              <h3 className="text-[#ff5722] font-bold mt-6 mb-2">Tại sao tôi cần đặt cọc 70% khi đặt hàng?</h3>
              <p>Đây là một trong những quy định trong giao dịch mua bán của các shop Trung Quốc.</p>
              
              <h3 className="text-[#ff5722] font-bold mt-6 mb-2">Phí nội địa Trung Quốc là phí gì?</h3>
              <p>Văn phòng của Delta Transport đặt tại nhiều quốc gia do vậy, nếu bạn mua sản phẩm ở các shop không thuộc văn phong của Delta sẽ phải thanh toán thêm phí nội địa mà shop đó yêu cầu.</p>
              
              <h3 className="text-[#ff5722] font-bold mt-6 mb-2">Tại sao có trường hợp hàng về nhanh về chậm?</h3>
              <p>Do khoảng cách giữa các shop với trụ sở công ty và do hoạt động dịch vụ của các shop bên Trung Quốc là khác nhau nên xảy ra trường hợp shop chuyển hàng nhanh, shop chuyển chậm.</p>
              <p>Khi hàng về chúng tôi sẽ chủ động báo cho bạn, nếu do chậm trễ bởi yếu tố khách quan chúng tôi cũng sẽ thông báo cho bạn.</p>
              
              <h3 className="text-[#ff5722] font-bold mt-6 mb-2">Tại sao tỷ giá chúng tôi lại cao hơn tỷ giá ngân hàng?</h3>
              <p>Tỷ giá tự do này được chúng tôi tính toán và cân bằng ở mức hợp lý nhất giữa lợi ích khách hàng và lợi ích hoạt động của chúng tôi.</p>
              
              <h3 className="text-[#ff5722] font-bold mt-6 mb-2">Hàng không về hoặc không đảm bảo chất lượng sẽ xử lý thế nào?</h3>
              <p>Chúng tôi sẽ tiến hành khiếu nại với shop để đảm bảo lợi ích cho khách hàng. Trường hợp hàng không về chúng tôi sẽ hoàn trả 100% số tiền mua sản phẩm đó cho bạn.</p>
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

export default Faq; 