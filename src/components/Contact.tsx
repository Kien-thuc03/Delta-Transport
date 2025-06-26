import contactIcon from "../assets/icon-telemarketer.webp";
import mailIcon from "../assets/icon_mail.webp";

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-200 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 md:gap-8">
        {/* Tổng đài hỗ trợ */}
        <div className="bg-white p-6 rounded flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="w-16 mb-3 md:mb-0">
            <img src={contactIcon} alt="Contact Icon" className="w-full" />
          </div>
          <div>
            <p className="text-gray-700 mb-1">Tổng đài hỗ trợ (8h00 - 22h00)</p>
            <h3 className="text-2xl font-bold text-gray-900">1900 6750</h3>
            <p className="text-gray-700">Email: deltawebltd@gmail.com</p>
          </div>
        </div>

        {/* Nhận tin ưu đãi */}
        <div className="bg-white p-6 rounded">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-16 mb-3 md:mb-0">
              <img src={mailIcon} alt="Mail Icon" className="w-full" />
            </div>
            <div className="flex flex-col gap-4 w-full text-center md:text-left">
              <h3 className="text-xl font-medium text-gray-900">
                Nhận tin ưu đãi mới nhất !
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Nhập email"
                  className="flex-1 border border-gray-300 px-4 py-3 focus:outline-none"
                />
                <button className="bg-[#ff5722] text-white px-5 py-3 font-medium">
                  ĐĂNG KÝ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
