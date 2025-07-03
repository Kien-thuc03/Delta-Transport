// import news1 from '../assets/new1.webp';
// import news2 from '../assets/new2.webp';
// import news3 from '../assets/new3.webp';
// import news4 from '../assets/new4.webp';
// // Sử dụng lại các ảnh có sẵn cho bài 5 và 6
// import news5 from '../assets/new5.webp';
// import news6 from '../assets/new6.webp';

export interface ContentBlock {
  id: string;
  type: 'text' | 'image' | 'heading' | 'list' | 'quote' | 'divider';
  content: string;
  metadata?: {
    level?: 1 | 2 | 3 | 4 | 5 | 6; // Cho heading
    alt?: string; // Cho image
    caption?: string; // Cho image
    style?: 'italic' | 'bold' | 'normal'; // Cho text
    listType?: 'ordered' | 'unordered'; // Cho list
    items?: string[]; // Cho list
    align?: 'left' | 'center' | 'right'; // Cho image
  };
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  image: string;
  date: string;
  author?: string;
  excerpt: string;
  slug: string;
  content: ContentBlock[];
  tags?: string[];
  category?: string;
  comments?: Comment[];
  commentCount?: number;
}

export interface News {
  id: number;
  title: string;
  image: string;
  date: string;
  excerpt?: string;
  slug?: string;
}

// export const newsItems: News[] = [
//   {
//     id: 1,
//     title: 'Lấy hàng quần áo quảng châu cho nữ đẹp giá sỉ tốt nhất cho chị em',
//     image: news1,
//     date: '26/05/2019',
//     excerpt: 'alibaba1688.vn cung cấp dịch vụ lấy hàng Quảng Châu cho nữ, chất lượng, nhiều mẫu mã độc đáo, giá rẻ nhất, hợp thời trang.',
//     slug: 'lay-hang-quan-ao-quang-chau-cho-nu-dep-gia-si-tot-nhat-cho-chi-em'
//   },
//   {
//     id: 2,
//     title: 'Đặt hàng quảng châu về kinh doanh có lợi ích gì?',
//     image: news2,
//     date: '26/05/2019',
//     excerpt: 'Việc đặt hàng Quảng Châu về kinh doanh mang lại nhiều lợi ích to lớn cho các doanh nghiệp.',
//     slug: 'dat-hang-quang-chau-ve-kinh-doanh-co-loi-ich-gi'
//   },
//   {
//     id: 3,
//     title: 'Cần thuê xe tải chở hàng của nhà xe á châu phải làm thế nào?',
//     image: news3,
//     date: '26/05/2019',
//     excerpt: 'Hướng dẫn chi tiết cách thuê xe tải chở hàng của nhà xe Á Châu một cách nhanh chóng và hiệu quả.',
//     slug: 'can-thue-xe-tai-cho-hang-cua-nha-xe-a-chau-phai-lam-the-nao'
//   },
//   {
//     id: 4,
//     title: 'Ngành xách tay hàng hiệu - có mánh nhanh giàu',
//     image: news4,
//     date: '15/06/2019',
//     excerpt: 'Phân tích những cơ hội và thách thức trong nghề xách tay hàng hiệu từ nước ngoài.',
//     slug: 'nghe-xach-tay-hang-hieu-co-manh-nhanh-giau'
//   },
//   {
//     id: 5,
//     title: 'Không tin trạm cân, tài xế xe tải nằm chờ suốt đêm',
//     image: news5,
//     date: '10/07/2019',
//     excerpt: 'Câu chuyện về những tài xế xe tải và những khó khăn trong công việc vận chuyển hàng hóa.',
//     slug: 'khong-tin-tram-can-tai-xe-xe-tai-nam-cho-suot-dem'
//   },
//   {
//     id: 6,
//     title: 'Trung Quốc chạy đua đưa hàng đến Mỹ trước giờ G',
//     image: news6,
//     date: '26/05/2019',
//     excerpt: 'Những con tàu chở hàng từ Trung Quốc đến Mỹ đều kín đặc trước thời hạn áp thuế mới.',
//     slug: 'trung-quoc-chay-dua-dua-hang-den-my-truoc-gio-g'
//   }
// ];

// Nội dung chi tiết các bài báo
// export const newsArticles: NewsArticle[] = [
//   {
//     id: 1,
//     title: 'Lấy hàng quần áo quảng châu cho nữ đẹp giá sỉ tốt nhất cho chị em',
//     image: news1,
//     date: '26/05/2019',
//     author: 'Đào Quý Thương',
//     excerpt: 'alibaba1688.vn cung cấp dịch vụ lấy hàng Quảng Châu cho nữ, chất lượng, nhiều mẫu mã độc đáo, giá rẻ nhất, hợp thời trang.',
//     slug: 'lay-hang-quan-ao-quang-chau-cho-nu-dep-gia-si-tot-nhat-cho-chi-em',
//     commentCount: 1,
//     content: [
//       {
//         id: 'intro',
//         type: 'text',
//         content: 'alibaba1688.vn cung cấp dịch vụ lấy hàng Quảng Châu cho nữ, chất lượng, nhiều mẫu mã độc đáo, giá rẻ nhất, hợp thời trang. Order hàng nhanh chóng, đáp ứng mọi yêu cầu của khách hàng.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'main-content',
//         type: 'text',
//         content: 'Phái đẹp luôn có nhu cầu làm đẹp và biết cách làm cho mình trở nên thật xinh xắn với những bộ trang phục độc đáo, ấn tượng. Thường rất ưa chuộng những mặt hàng quần áo Quảng Châu theo xu hướng hiện đại mới nhất. Tuy nhiên để tìm được nguồn hàng quần áo nữ độc đáo, mới nhất, giá rẻ tại Việt Nam không hề dễ. Do đó lựa chọn tốt nhất dành cho bạn chính là <strong>lấy hàng Quảng Châu giá sỉ</strong>',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'image-1',
//         type: 'image',
//         content: news1,
//         metadata: {
//           alt: 'Mẫu thời trang nữ từ Quảng Châu',
//           caption: 'một số mẫu từ nguồn lấy hàng quảng châu cho các bạn lựa chọn',
//           align: 'center'
//         }
//       },
//       {
//         id: 'service-info',
//         type: 'text',
//         content: 'Nếu như nguồn hàng trong nước chưa đáp ứng được yêu cầu kinh doanh của bạn thì tìm đến những dịch vụ order đặt mua hộ hàng quần áo Quảng Châu. alibaba1688.vn là đơn vị hàng đầu chuyên cung cấp các dịch vụ đặt hàng Trung Quốc bao gồm order hàng trên các trang web bán hàng online của trung quốc, mua hàng tại xưởng, tại chợ theo yêu cầu.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'ordering-process',
//         type: 'text',
//         content: 'Cách đặt hàng đơn giản, nhanh chóng tiện lợi. Chúng tôi còn cung cấp hệ thống đặt hàng Quảng Châu bằng tiếng Việt giúp bạn đặt mua hàng quần áo nữ dễ dàng trên các trang web Taobao, Tmall, 1688… thanh toán trực tiếp trên tài khoản của bạn.',
//         metadata: { style: 'normal' }
//       }
//     ],
//     comments: [
//       {
//         id: 'comment-1',
//         author: 'qưf',
//         avatar: 'https://www.gravatar.com/avatar/e269995d419352e3da66ed99d6e63149?s=55&d=identicon',
//         date: '29/09/2020',
//         content: 'dsdsf'
//       }
//     ],
//     tags: ['thời trang', 'quảng châu', 'quần áo nữ', 'order hàng'],
//     category: 'Thời trang'
//   },
//   {
//     id: 2,
//     title: 'Đặt hàng quảng châu về kinh doanh có lợi ích gì?',
//     image: news2,
//     date: '26/05/2019',
//     author: 'Admin',
//     excerpt: 'Dịch vụ kinh doanh hàng hóa thời trang đang là một xu hướng khá hot hiện nay đem lại rất nhiều lợi nhuận cho chủ buôn.',
//     slug: 'dat-hang-quang-chau-ve-kinh-doanh-co-loi-ich-gi',
//     commentCount: 0,
//     content: [
//       {
//         id: 'intro',
//         type: 'text',
//         content: 'Dịch vụ kinh doanh hàng hóa thời trang đang là một xu hướng khá hot hiện nay đem lại rất nhiều lợi nhuận cho chủ buôn. Hầu hết việc nhập hàng hóa thời trang chủ yếu là từ quảng châu. Dathang quangchau đã là xu hướng từ lâu của hầu hết các chủ buôn không chỉ của Việt Nam mà còn của hầu hết các nước trên thế giới. Vậy việc đặt hàng quảng châu có lợi ích gì?',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'benefits-title',
//         type: 'text',
//         content: 'Những lợi ích khi <strong>đặt hàng quảng châu</strong>',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'variety-heading',
//         type: 'text',
//         content: 'Hàng hóa đa dạng về mẫu mã nên người tiêu dùng dễ chọn lựa',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'variety-detail',
//         type: 'text',
//         content: 'Hàng hóa tại quảng châu cũng khá đa dạng về mẫu mã chính vì thế mà mọi khách hàng hoàn toàn có thể lựa chọn hàng hóa phù hợp với nhu cầu buôn bán của mình.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'variety-examples',
//         type: 'text',
//         content: 'Khi nhập hàng Quảng Châu người mua rất dễ dàng có thể lựa chọn đồ phù hợp cho mình. Hàng hóa có đủ các kiểu như áo phông, váy, áp sơ mi,… Do hàng quảng châu rất bắt kịp xu hướng thời trang do đó mà các chủ buôn hoàn toàn có thể lựa chọn thoải mái các mặt hàng của mình.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'quality-info',
//         type: 'text',
//         content: 'Không chỉ đa dạng về mấu mã mà hàng quảng châu còn đảm bảo về chất lượng do sản xuất từ những công ty may mặc lớn và uy tín nên chất lượng khá đảm bảo. Hơn nữa hàng Quảng Châu còn khá linh động về thời tiết và về mùa. Nên khách hàng có thể tha hồ lựa chọn mua về để kinh doanh.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'price-heading',
//         type: 'text',
//         content: 'Giá nhập rẻ',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'price-detail',
//         type: 'text',
//         content: 'Trung quốc là nơi nổi tiếng với các thương hiệu trên thế giới do đó mà trung quốc rất biết tận dụng những lợi thế của quốc gia để thu lợi nhuận.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'price-stability',
//         type: 'text',
//         content: 'Hàng quảng châu cũng không có sự giao động mạnh khi có sự biến đổi của thế giới vì thế đây chính là một trong những lợi thế cho các nhà kinh doanh quảng châu.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'shipping-info',
//         type: 'text',
//         content: 'không chỉ có giá nhập rẻ mà cách vận chuyển hàng hòa từ quảng châu về Việt Nam cũng khá thuận lợi, bằng nhiều con đường khác nhau, giá vận chuyển cũng không quá cao vì thế mà việc nhập hàng quảng châu về Việt Nam hết sức thuận lợi.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'ordering-methods-heading',
//         type: 'text',
//         content: 'Nhiều cách thức đặt hàng khác nhau',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'ordering-advantage',
//         type: 'text',
//         content: 'Một ưu điểm nữa khiến cho mặt hàng quảng châu thu hút khách hàng mua đó là có nhiều cách thức đặt hàng khác nhau. Do đó bạn có thể dễ dàng mua bán hàng hóa bên quảng châu.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'past-vs-present',
//         type: 'text',
//         content: 'So với những năm trước việc đặt hàng trung quốc chủ yếu các lái buôn phải trực tiếp đánh hàng tại quảng châu điều này gây rất tốn kém cho việc đi lại và chi phí ăn ở.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'modern-ordering',
//         type: 'text',
//         content: 'Ngày nay với sự phát triển của công nghệ internet bạn chỉ cần ngồi ở nhà cũng dễ dàng có thể đặt hàng quảng châu rất tiện lợi cho các chỉ buôn.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'intermediary-services',
//         type: 'text',
//         content: 'Hơn nữa để vận chuyển hàng hóa từ quảng châu về việt nam bạn có thể lưa chọn những đơn vị trung gian, hàng hóa về tận tay mà bạn không cần phải vất vả đi đến nơi để vận chuyển hàng hóa về.',
//         metadata: { style: 'normal' }
//       }
//     ],
//     tags: ['kinh doanh', 'quảng châu', 'import', 'thương mại'],
//     category: 'Kinh doanh'
//   },
//   {
//     id: 3,
//     title: 'Cần thuê xe tải chở hàng của nhà xe Á Châu phải làm thế nào?',
//     image: news3,
//     date: '26/05/2019',
//     author: 'Admin',
//     excerpt: 'Ngày nay nhu cầu vận chuyển hàng hoá đi Bắc Nam của các doanh nghiệp sản xuất trong nước ngày càng nhiều.',
//     slug: 'can-thue-xe-tai-cho-hang-cua-nha-xe-a-chau-phai-lam-the-nao',
//     commentCount: 0,
//     content: [
//       {
//         id: 'intro',
//         type: 'text',
//         content: 'Ngày nay nhu cầu vận chuyển hàng hoá đi Bắc Nam của các doanh nghiệp sản xuất trong nước ngày càng nhiều. Để đáp ứng cho nhu cầu này rất nhiều các công ty vận tải được thành lập từ quy mô nhỏ, vừa đến lớn. Trong đó nhà xe Á Châu được rất nhiều Doanh nghiệp biết tới và có mong muốn thuê xe tải chở hàng. Mọi nhu cầu vận chuyển hàng đi Bắc Nam đều được nhà xe Á Châu nhận chở đúng hẹn đúng lịch trình.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'advantages-title',
//         type: 'text',
//         content: 'Những ưu thế vượt trội của nhà xe Á Châu chuyên vận chuyển hàng hoá Bắc Nam',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'reputation',
//         type: 'text',
//         content: 'Nằm trong top 10 công ty dịch vụ vận chuyển hàng hoá Bắc Nam uy tín chuyên nghiệp, nhà xe Á Châu đã nhận được rất nhiều quan tâm và những phản hồi tích cực của quý khách hàng đã sử dụng dịch vụ vận chuyển của chúng tôi. Từ đó chúng tôi càng có thêm động lực để tiếp tục phát triển mà mở rộng dịch vụ vận chuyển của mình hơn nữa.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'capacity',
//         type: 'text',
//         content: 'Với lượng hàng hoá mỗi ngày nhiều, nên hàng ngày đều xếp xe xếp hàng vận chuyển đi Bắc Nam. Năng suất vận chuyển lớn đáp ứng được nhu cầu vận chuyển cao của các Doanh nghiệp sản xuất. Điều kiện kho bãi rộng rãi để trữ hàng xuất kho và nhập kho thuận lợi, đảm bảo hàng hoá không bị thất lạc hay hư hỏng do thời tiết.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'fleet-info',
//         type: 'text',
//         content: 'Đầu tư dàn xe tải đủ tải trọng từ 1,25 tấn cho tới xe cont đầu kéo 30 tấn, chúng tôi có những phương thức chuyên biệt phù hợp với kinh phí của từng đơn hàng mà các Doanh nghiệp muốn vận chuyển. Bên cạnh đó với những đơn hàng trên 3 tấn và trên 14 khối nhà xe Á Châu sẽ hỗ trợ giao hàng tận nơi miễn phí cho quý khách hàng.',
//         metadata: { style: 'normal' }
//       }
//     ],
//     tags: ['vận chuyển', 'xe tải', 'á châu', 'logistics', 'bắc nam'],
//     category: 'Vận chuyển'
//   },
//   {
//     id: 4,
//     title: 'Nghề xách tay hàng hiệu - Có mánh nhanh giàu',
//     image: news4,
//     date: '26/05/2019',
//     author: 'Admin',
//     excerpt: 'Dịch vụ vận chuyển hàng hóa từ nước ngoài về Việt Nam đang được coi là nghề đem lại thu nhập hấp dẫn.',
//     slug: 'nghe-xach-tay-hang-hieu-co-manh-nhanh-giau',
//     commentCount: 0,
//     content: [
//       {
//         id: 'sapo',
//         type: 'text',
//         content: 'Dịch vụ vận chuyển hàng hóa từ nước ngoài về Việt Nam đang được coi là nghề đem lại thu nhập hấp dẫn. Song thực tế đây lại là nghề ẩn chứa rủi ro nếu người làm không biết mánh.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'story-hien',
//         type: 'text',
//         content: 'Nguyễn Thu Hiền (Cầu Giấy, Hà Nội) thức cả đêm để phân loại chuyến hàng mới về. Gian phòng rộng hơn 20 m2 chật cứng các kiện hàng to nhỏ chủ yếu là sữa, mỹ phẩm, thực phẩm chức năng…',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'hien-income',
//         type: 'text',
//         content: 'Hiền cho biết, lần này trúng đợt giảm giá lớn của nhiều hãng, hàng lại về đúng lịch nên khách đặt mua nhiều. Công vận chuyển của Hiền và các đầu mối trong chuyến này có thể bằng một nửa thu nhập cả tháng.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'hien-monthly-income',
//         type: 'text',
//         content: 'Nghề xách tay, vận chuyển hàng từ nước ngoài về Việt Nam hơn một năm nay đem lại cho Hiền khoảng 15 triệu đồng mỗi tháng. Cô tiết lộ, vì chỉ là nghề tay trái, làm quy mô nhỏ nên thu nhập vừa phải. Nếu làm lớn, nhận xách các loại hàng phong phú hơn, tiền công có thể gấp nhiều lần hiện tại.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'mai-linh-confirm',
//         type: 'text',
//         content: 'Mai Linh (Đội Cấn, quận Ba Đình), bạn của Hiền xác nhận hơn chục triệu đồng mỗi tháng chỉ là khoản thu nhập rất "bèo" trong giới nhận order (vận chuyển hàng hóa ngoại nhập). Nếu đầu tư thời gian, công sức thì đây là nghề kiếm tiền hấp dẫn.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'mai-linh-products',
//         type: 'text',
//         content: 'Mai Linh hiện nhận vận chuyển chủ yếu là hàng hiệu thời trang như quần áo, giày dép, đồng hồ, mỹ phẩm, nước hoa… Đây được cho là các mặt hàng dễ vận chuyển, công cao.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'tips-tricks',
//         type: 'text',
//         content: 'Ngoài ra, theo Linh và một số nhà nhận đặt hàng thuê (nhà order) chia sẻ, có nhiều bí quyết giúp họ tăng thu nhập tốt từ dịch vụ này. "Ví dụ, tính riêng việc nhận đặt, nếu bạn chỉ nhận các đơn hàng lẻ của khách thì mãi mãi chỉ ngồi nhặt bạc lẻ mà thôi. Mánh đơn giản nhất để tăng thu là ngồi canh hàng hiệu giảm giá hoặc các mẫu hàng đang hot gợi ý cho khách" - cô giải thích.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'duc-ngoc-strategy',
//         type: 'text',
//         content: 'Để tăng lượng đặt hàng, Nguyễn Đức Ngọc (Nghĩa Tân, quận Cầu Giấy) ngày đêm canh các đợt giảm giá của nhiều hãng thời trang, mỹ phẩm, đồ gia dụng nổi tiếng. Sau đó, Đức chia sẻ đường link cho khách hàng cùng đặt mua.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'sharing-codes',
//         type: 'text',
//         content: 'Thậm chí, anh sẵn sàng chia sẻ với khách mã mua hàng ưu đãi của mình để khách cùng hưởng. Bằng cách này, số khách đặt hàng ở cùng một địa chỉ tăng mạnh.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'bulk-buying-benefits',
//         type: 'text',
//         content: 'Mua lượng hàng lớn tại một địa điểm giúp cả người mua hộ và khách mua chung hưởng nhiều ưu đãi về giá, phí vận chuyển… "Cứ mỗi sản phẩm tính công 10 USD/kg thì một chuyến đi mua hàng trực tiếp chỉ cần mua 20-30 đơn là lãi khá rồi" - Đức cho biết.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'peak-seasons',
//         type: 'text',
//         content: 'Chuyên vận chuyển hàng Mỹ - Việt, mùa kiếm tiền của nhóm Ngọc Đức rơi vào tháng 7 (tháng có ngày lễ quốc khánh Mỹ), tháng 10, 11 và 12 (dịp Black Friday và cuối năm). Đây là khoảng thời gian diễn ra nhiều đợt giảm giá lớn trên toàn nước Mỹ.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'reselling-opportunity',
//         type: 'text',
//         content: 'Ngoài việc mua và vận chuyển hộ, các nhà order còn tranh thủ dịp này xả vốn để nhập hàng giá rẻ về trong nước tiêu thụ ăn chênh lệch.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'duc-challenges',
//         type: 'text',
//         content: 'Tuy nhiên, Ngọc Đức thành thật để duy trì và có thu nhập tốt từ dịch vụ order, Đức đã trải qua không ít tai nạn nghề nghiệp. Nhiều lần, do thiếu kinh nghiệm, công vận chuyển cả đợt mấy trăm sản phẩm không đủ giúp anh bù khoản lỗ do mất hàng của khách.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'common-problems',
//         type: 'text',
//         content: 'Anh chia sẻ chuyện mất hàng, thiếu hàng xảy ra thường xuyên trong các đợt khuyến mại lớn. Lượng khách mua quá đông khiến nhân lực hãng quá tải, ảnh hưởng tới dịch vụ. Nhiều trường hợp, hàng chưa chuyển đi nhưng hãng vẫn báo chuyển rồi hoặc hàng thiếu, hàng giảm giá lỗi khá nhiều. Đương nhiên, khách hàng không thể chấp nhận việc này.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'duc-solutions',
//         type: 'text',
//         content: 'Trong những trường hợp như vậy, để giữ khách, Ngọc Đức thường phải liên hệ lại với hãng, chịu nhiều thủ tục rườm rà nhằm đổi trả hoặc lấy lại hàng cho khách.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'lessons-learned',
//         type: 'text',
//         content: 'Sau "tai nạn" này, Đức rút kinh nghiệm, thỏa thuận trước với khách hàng về nguyên tắc làm việc. Đồng thời, anh không quên gợi ý khách chọn mua của những hãng có dịch vụ hậu mãi chu đáo, an toàn.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'cam-tu-experience',
//         type: 'text',
//         content: 'Chung hoàn cảnh, Cẩm Tú (quận 2, TP HCM) trải lòng: "Làm order, nhiều khi tiền công chẳng đủ bù rủi ro mà vẫn bị khách rầy la, cực lắm".',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'packaging-issues',
//         type: 'text',
//         content: 'Nhớ lại thời gian đầu nhận xách tay hàng hiệu về Việt Nam, Tú kể để giảm phí cân nặng (khoảng 10 USD/kg), nhà order và khách thỏa thuận bỏ lại các loại vỏ hộp, giấy, xốp chèn và chỉ chuyển lõi hàng về Việt Nam. Tuy nhiên, các sản phẩm như túi xách, giầy dép do bỏ bao bì, thi thoảng bị bẩn, xước. Trong những trường hợp đó, thường khách không chịu và đòi trả lại hàng cho bên vận chuyển.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'customer-misunderstanding',
//         type: 'text',
//         content: '"Mình chỉ làm dịch vụ vận chuyển nhưng nhiều khách không hiểu chuyện còn bắt mình phải chịu trách nhiệm với những sản phẩm lỗi do nhà sản xuất. Lý luận của khách là, hàng hiệu thì không thể lỗi (?!)" - Tú cho hay.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'mai-linh-funny-story',
//         type: 'text',
//         content: 'Hơn một năm làm nghề, không ít lần Mai Linh dở khóc dở cười khi khách cương quyết trả lại bộ quần áo thương hiệu Nhật nhưng trên mác lại ghi địa chỉ sản xuất là "Made in Vietnam" hoặc "Made in China".',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'recent-incident',
//         type: 'text',
//         content: 'Gần đây nhất, một nữ khách hàng tìm tới tận nhà "bắt đền" Linh vì thỏi son tiền triệu order nhà cô mở ra bị gẫy mặc dù đã được bao bọc không thể kỹ hơn.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'conclusion',
//         type: 'text',
//         content: 'Nhu cầu mua hàng chính hãng từ nước ngoài của người Việt ngày càng gia tăng là cơ hội để nhiều người phát triển dịch vụ vận chuyển hàng hóa về thị trường nội địa. Tuy nhiên những câu chuyện thực tế trên cho thấy, đây không đơn thuần là việc mua hộ, xách về và thu tiền.',
//         metadata: { style: 'normal' }
//       }
//     ],
//     tags: ['xách tay', 'hàng hiệu', 'order hàng', 'kinh doanh', 'vận chuyển'],
//     category: 'Kinh doanh'
//   },
//   {
//     id: 5,
//     title: 'Không tin trạm cân, tài xế xe tải nằm chờ suốt đêm',
//     image: news5,
//     date: '26/05/2019',
//     author: 'Admin',
//     excerpt: 'Câu chuyện về những tài xế xe tải và những khó khăn trong công việc vận chuyển hàng hóa với vấn đề trạm cân tải trọng.',
//     slug: 'khong-tin-tram-can-tai-xe-xe-tai-nam-cho-suot-dem',
//     commentCount: 0,
//     content: [
//       {
//         id: 'incident-report',
//         type: 'text',
//         content: 'Sáng 18-1, đường dây nóng của Báo Người Lao Động đã nhận được phản ánh từ tài xế Võ Minh Thắng (SN 1975, ngụ TP Nha Trang, tỉnh Khánh Hòa) đề nghị báo chí xuống chứng kiến mới đồng ý cho xe lên cân tải trọng</strong> tại Trạm Kiểm tra tải trọng xe cơ giới số 53, đặt trên Quốc lộ 27</strong> (đoạn qua huyện Cư Kuin, tỉnh Đắk Lắk).',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'driver-complaint',
//         type: 'text',
//         content: 'Tại đây, tài xế Thắng phản ánh: Hiện nay có rất nhiều xe của công ty vận chuyển hàng hóa từ Đắk Lắk xuống Khánh Hòa và trung bình phải qua 2 trạm cân nên không tài xế nào dám chở quá tải.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'weight-discrepancy',
//         type: 'text',
//         content: 'Tuy nhiên, ngày 13-1, một xe tải của công ty chở 32,39 tấn gỗ có phiếu cân mua bán nhưng khi qua trạm này thì bỗng dưng lại tăng lên thành 33,39 tấn, vượt tải trọng quy định 1 tấn nên bị phạt hơn 8 triệu đồng và tạm giữ bằng lái xe 1 tháng.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'previous-incident',
//         type: 'text',
//         content: 'Trước đó, một chiếc xe khác của công ty cân tại trạm này cũng vượt tải trọng so với cân khi mua và bán hàng. "Tôi điều khiển xe đến trạm cân từ lúc 1 giờ ngày 18-1 nhưng không dám đưa xe lên cân mà chờ báo chí xuống chứng kiến để còn có cơ sở phản ánh cơ quan chức năng" – tài xế Thắng nói. Tuy nhiên, khi đưa xe lên cân thì trọng lượng thấp hơn trọng lượng tài xế khai báo.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'station-manager-response',
//         type: 'text',
//         content: 'Trao đổi với phóng viên, ông Nguyễn Đức Toàn, Trạm trưởng Trạm Kiểm tra tải trọng xe cơ giới số 53 cho biết: Thỉnh thoảng có tình trạng tài xế phản ứng và cho rằng cân sai nhưng chúng tôi khẳng định không có việc đó. Cân này do Bộ GT-VT cấp và được bảo trì theo quy định nên không có chuyện sai số. Trước đây cũng có tình trạng tài xế phản ứng trạm cân nhưng hôm đó cân điện tử bị hư và tiến hành cân xách tay nên không chính xác.',
//         metadata: { style: 'normal' }
//       }
//     ],
//     tags: ['vận chuyển', 'xe tải', 'trạm cân', 'tài xế', 'tải trọng'],
//     category: 'Vận chuyển'
//   },
//   {
//     id: 6,
//     title: 'Trung Quốc chạy đua đưa hàng đến Mỹ trước giờ G',
//     image: news6,
//     date: '26/05/2019',
//     author: 'Admin',
//     excerpt: 'Những con tàu chở hàng từ Trung Quốc đến Mỹ đều kín đặc trước thời hạn áp thuế mới.',
//     slug: 'trung-quoc-chay-dua-dua-hang-den-my-truoc-gio-g',
//     commentCount: 0,
//     content: [
//       {
//         id: 'shipping-rush',
//         type: 'text',
//         content: 'Cụ thể, những con <strong>tàu chở hàng từ Trung Quốc</strong> đến Mỹ của công ty Hyundai Merchant Marine Co. đều kín đặc, số thùng hàng được giao tại cảng California tăng vọt và tỉ lệ hàng hóa vận chuyển trên Thái Bình Dương đang ở mức cao nhất trong 4 năm qua.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'tariff-deadline',
//         type: 'text',
//         content: 'Các mức thuế có hiệu lực từ ngày 24-9 sẽ càng làm khoảng thời gian trước mùa nghỉ lễ của Trung Quốc thêm bận rộn khi các nhà sản xuất đẩy nhanh tiến độ công việc để các loại đồ chơi, xe đạp và bộ phận xe hơi có mặt ở Mỹ trước khi bị áp thuế.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'company-example',
//         type: 'text',
//         content: 'Tại tỉnh Giang Tô, công ty E.D. Opto Electrical Lighting Co. đã gửi đi lô hàng đèn xe hơi bằng đường biển đến TP Los Angeles hồi cuối tháng 8, sớm hơn kế hoạch trước đó. "Thời gian vận chuyển mất khoảng 25 ngày nên tôi hy vọng chúng tôi có thể đến kịp lúc" - quản lý xuất khẩu Melissa Shu nói.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'air-freight-option',
//         type: 'text',
//         content: 'Công ty này đang gấp rút hoàn thành một đơn hàng cho một khách hàng khác ở Mỹ, những người sẵn sàng trả thêm tiền để vận chuyển bằng đường hàng không nếu điều này có thể tránh được mức thuế mới.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'tariff-details',
//         type: 'text',
//         content: 'Bắt đầu từ ngày 24-9, mức thuế 10% sẽ được áp dụng cho số hàng nhập khẩu trị giá 200 tỉ USD từ Trung Quốc. Sau đó, các nhà nhập khẩu của Mỹ có thể bắt đầu dự trữ sản phẩm Trung Quốc trước khi mức thuế tăng lên thành 25% vào cuối năm.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'consumer-benefit',
//         type: 'text',
//         content: 'Trong khi các công ty đẩy nhanh các chuyến hàng từ Trung Quốc để kịp hạn chót, người tiêu dùng Mỹ lại được lợi khi tình hình tăng giá dự kiến đối với hàng gia dụng tại các nhà bán lẻ như Walmart Inc. và Target Corp. sẽ bị trì hoãn trong một thời gian ngắn.',
//         metadata: { style: 'normal' }
//       },
//       {
//         id: 'trump-threat',
//         type: 'text',
//         content: 'Tổng thống Donald Trump đã đe dọa sẽ áp thuế mới lên số hàng hóa trị giá 267 tỉ USD của Trung Quốc, bao gồm gần như tất cả các sản phẩm tiêu dùng khác như điện thoại di động, giày dép và quần áo. Động thái này có thể thúc đẩy các công ty của Mỹ dự trữ những loại hàng hóa trên. Liên đoàn Bán lẻ Quốc gia tại Mỹ cảnh báo các mức thuế sẽ dẫn đến tình trạng giá cả tăng cao và khan hiếm hàng hóa.',
//         metadata: { style: 'normal' }
//       }
//     ],
//     tags: ['trung quốc', 'mỹ', 'thuế quan', 'xuất khẩu', 'vận chuyển biển'],
//     category: 'Thương mại quốc tế'
//   }
// ];