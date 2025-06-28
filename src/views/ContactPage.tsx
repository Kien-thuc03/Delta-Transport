import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const ContactPage: React.FC = () => {
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
        { label: 'Liên hệ', active: true },
        ]}
    />
    
      {/* Content Section */}
    <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Liên hệ</h1>
                <div className="w-24 h-1 bg-[#ff5722]"></div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
            {/* Form liên hệ */}
            <div className="w-full md:w-1/2">
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm h-full">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Liên hệ với chúng tôi</h2>
                <p className="text-gray-600 mb-8">
                    Để liên hệ và nhận các thông tin khuyến mại sớm nhất, xin vui lòng điền đầy đủ thông tin của bạn vào form dưới đây. 
                    Chúng tôi sẽ liên lạc lại với bạn trong thời gian sớm nhất.
                </p>
                
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-1">
                        <input 
                            type="text" 
                            name="name"
                            required
                            placeholder="Họ và tên" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"
                        />
                    </div>
                    <div className="mb-1">
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        pattern="\d+"
                        placeholder="Số điện thoại" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-1">
                    <input 
                      type="email" 
                      name="email"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      placeholder="Email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <textarea 
                      name="message" 
                      placeholder="Nội dung"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-medium py-3 px-8 rounded-md transition-colors"
                  >
                    Gửi liên hệ
                  </button>
                </form>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-lg shadow-sm h-full flex flex-col">
                <div className="border-b border-gray-200 bg-gray-100 py-2 px-4">
                  <h3 className="text-gray-700 font-medium">Bản đồ</h3>
                </div>
                <div className="p-2 flex-grow">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904611732553!2d105.81388241542348!3d21.03650239288885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1946cc7e23%3A0x87ab3917166a0cd5!2zUGjhuqduIG3hu4FtIHF14bqjbiBsw70gYsOhbiBow6BuZyAtIFNhcG8gUE9T!5e0!3m2!1svi!2s!4v1555900531747!5m2!1svi!2s" 
                    className="w-full h-full min-h-[400px] border-0"
                    loading="lazy"
                    title="Google Maps"
                    allowFullScreen
                  ></iframe>
                </div>
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

export default ContactPage; 