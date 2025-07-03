export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  isActive?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Trà Nguyễn',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    content: 'Mình bán hàng online nên rất hay đặt hàng qua đây, nói chung là chất lượng tốt, giá thành ổn định so với các bên khác, mà tốc độ thì nhanh thôi rồi.'
  },
  {
    id: '2',
    name: 'Thu Trang',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'Mình thường xuyên phải order hàng từ nước ngoài về, may mà từ khi biết ở đây có dịch vụ vận chuyển mà giá cả còn rẻ hơn là mình nhờ đặt ngoài.'
  },
  {
    id: '3',
    name: 'Minh Tuấn',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'Tôi là chủ doanh nghiệp nhỏ và thường xuyên nhập hàng. Dịch vụ vận chuyển ở đây rất đáng tin cậy và chuyên nghiệp. Hàng đến đúng hẹn và an toàn.'
  },
  {
    id: '4',
    name: 'Thanh Hằng',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    content: 'Đã sử dụng dịch vụ vận chuyển quốc tế nhiều lần và rất hài lòng. Nhân viên tư vấn nhiệt tình, chu đáo, giải đáp mọi thắc mắc và hỗ trợ tận tình.'
  },
  {
    id: '5',
    name: 'Quang Minh',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    content: 'Vận chuyển đúng hẹn, đóng gói cẩn thận, giá cả phải chăng. Đây là đơn vị vận chuyển tin cậy mà tôi sẽ tiếp tục sử dụng trong tương lai.'
  },
  {
    id: '6',
    name: 'Quang Nhựt',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    content: 'Vận chuyển đúng hẹn, đóng gói cẩn thận, giá cả phải chăng. Đây là đơn vị vận chuyển tin cậy mà tôi sẽ tiếp tục sử dụng trong tương lai.'
  },
  

]; 