import news1 from '../assets/new1.webp';

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

export const newsItems: News[] = [
  {
    id: 1,
    title: 'Lấy hàng quần áo quảng châu cho nữ đẹp giá sỉ tốt nhất cho chị em',
    image: news1,
    date: '26/05/2019',
    excerpt: 'alibaba1688.vn cung cấp dịch vụ lấy hàng Quảng Châu cho nữ, chất lượng, nhiều mẫu mã độc đáo, giá rẻ nhất, hợp thời trang.',
    slug: 'lay-hang-quan-ao-quang-chau-cho-nu-dep-gia-si-tot-nhat-cho-chi-em'
  },
  {
    id: 2,
    title: 'Đặt hàng quảng châu về kinh doanh có lợi ích gì?',
    image: 'https://bizweb.dktcdn.net/100/356/587/articles/adfd.jpg?v=1558853162507',
    date: '26/05/2019',
    excerpt: 'Việc đặt hàng Quảng Châu về kinh doanh mang lại nhiều lợi ích to lớn cho các doanh nghiệp.',
    slug: 'dat-hang-quang-chau-ve-kinh-doanh-co-loi-ich-gi'
  },
  {
    id: 3,
    title: 'Cần thuê xe tải chở hàng của nhà xe á châu phải làm thế nào?',
    image: 'https://bizweb.dktcdn.net/100/356/587/articles/14980721-1143826228988065-3528006525010847038-n.png?v=1558852740177',
    date: '26/05/2019',
    excerpt: 'Hướng dẫn chi tiết cách thuê xe tải chở hàng của nhà xe Á Châu một cách nhanh chóng và hiệu quả.',
    slug: 'can-thue-xe-tai-cho-hang-cua-nha-xe-a-chau-phai-lam-the-nao'
  },
  {
    id: 4,
    title: 'Ngành xách tay hàng hiệu - có mánh nhanh giàu',
    image: 'https://bizweb.dktcdn.net/100/356/587/articles/tim-hieu-ve-hinh-thuc-bao-hiem-hang-hoa-van-chuyen-noi-dia-anh1.jpg?v=1558852581893',
    date: '15/06/2019',
    excerpt: 'Phân tích những cơ hội và thách thức trong nghề xách tay hàng hiệu từ nước ngoài.',
    slug: 'nghe-xach-tay-hang-hieu-co-manh-nhanh-giau'
  },
  {
    id: 5,
    title: 'Không tin trạm cân, tài xế xe tải nằm chờ suốt đêm',
    image: 'https://bizweb.dktcdn.net/100/356/587/articles/doi-xe-van-chuyen-3.jpg?v=1558852494927',
    date: '10/07/2019',
    excerpt: 'Câu chuyện về những tài xế xe tải và những khó khăn trong công việc vận chuyển hàng hóa.',
    slug: 'khong-tin-tram-can-tai-xe-xe-tai-nam-cho-suot-dem'
  }
];

// Nội dung chi tiết các bài báo
export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: 'Lấy hàng quần áo quảng châu cho nữ đẹp giá sỉ tốt nhất cho chị em',
    image: news1,
    date: '26/05/2019',
    author: 'Đào Quý Thương',
    excerpt: 'alibaba1688.vn cung cấp dịch vụ lấy hàng Quảng Châu cho nữ, chất lượng, nhiều mẫu mã độc đáo, giá rẻ nhất, hợp thời trang.',
    slug: 'lay-hang-quan-ao-quang-chau-cho-nu-dep-gia-si-tot-nhat-cho-chi-em',
    commentCount: 1,
    content: [
      {
        id: 'intro',
        type: 'text',
        content: 'alibaba1688.vn cung cấp dịch vụ lấy hàng Quảng Châu cho nữ, chất lượng, nhiều mẫu mã độc đáo, giá rẻ nhất, hợp thời trang. Order hàng nhanh chóng, đáp ứng mọi yêu cầu của khách hàng.',
        metadata: { style: 'normal' }
      },
      {
        id: 'main-content',
        type: 'text',
        content: 'Phái đẹp luôn có nhu cầu làm đẹp và biết cách làm cho mình trở nên thật xinh xắn với những bộ trang phục độc đáo, ấn tượng. Thường rất ưa chuộng những mặt hàng quần áo Quảng Châu theo xu hướng hiện đại mới nhất. Tuy nhiên để tìm được nguồn hàng quần áo nữ độc đáo, mới nhất, giá rẻ tại Việt Nam không hề dễ. Do đó lựa chọn tốt nhất dành cho bạn chính là <strong>lấy hàng Quảng Châu giá sỉ</strong>',
        metadata: { style: 'normal' }
      },
      {
        id: 'image-1',
        type: 'image',
        content: 'https://bizweb.dktcdn.net/thumb/large/100/356/587/files/dong-phuc-cong-so-somi-dep-nhat1.png?v=1558853221528',
        metadata: {
          alt: 'Mẫu thời trang nữ từ Quảng Châu',
          caption: 'một số mẫu từ nguồn lấy hàng quảng châu cho các bạn lựa chọn',
          align: 'center'
        }
      },
      {
        id: 'service-info',
        type: 'text',
        content: 'Nếu như nguồn hàng trong nước chưa đáp ứng được yêu cầu kinh doanh của bạn thì tìm đến những dịch vụ order đặt mua hộ hàng quần áo Quảng Châu. alibaba1688.vn là đơn vị hàng đầu chuyên cung cấp các dịch vụ đặt hàng Trung Quốc bao gồm order hàng trên các trang web bán hàng online của trung quốc, mua hàng tại xưởng, tại chợ theo yêu cầu.',
        metadata: { style: 'normal' }
      },
      {
        id: 'ordering-process',
        type: 'text',
        content: 'Cách đặt hàng đơn giản, nhanh chóng tiện lợi. Chúng tôi còn cung cấp hệ thống đặt hàng Quảng Châu bằng tiếng Việt giúp bạn đặt mua hàng quần áo nữ dễ dàng trên các trang web Taobao, Tmall, 1688… thanh toán trực tiếp trên tài khoản của bạn.',
        metadata: { style: 'normal' }
      }
    ],
    comments: [
      {
        id: 'comment-1',
        author: 'qưf',
        avatar: 'https://www.gravatar.com/avatar/e269995d419352e3da66ed99d6e63149?s=55&d=identicon',
        date: '29/09/2020',
        content: 'dsdsf'
      }
    ],
    tags: ['thời trang', 'quảng châu', 'quần áo nữ', 'order hàng'],
    category: 'Thời trang'
  },
  {
    id: 2,
    title: 'Đặt hàng quảng châu về kinh doanh có lợi ích gì?',
    image: 'https://bizweb.dktcdn.net/100/356/587/articles/adfd.jpg?v=1558853162507',
    date: '26/05/2019',
    author: 'Admin',
    excerpt: 'Dịch vụ kinh doanh hàng hóa thời trang đang là một xu hướng khá hot hiện nay đem lại rất nhiều lợi nhuận cho chủ buôn.',
    slug: 'dat-hang-quang-chau-ve-kinh-doanh-co-loi-ich-gi',
    commentCount: 0,
    content: [
      {
        id: 'intro',
        type: 'text',
        content: 'Dịch vụ kinh doanh hàng hóa thời trang đang là một xu hướng khá hot hiện nay đem lại rất nhiều lợi nhuận cho chủ buôn. Hầu hết việc nhập hàng hóa thời trang chủ yếu là từ quảng châu. Dathang quangchau đã là xu hướng từ lâu của hầu hết các chủ buôn không chỉ của Việt Nam mà còn của hầu hết các nước trên thế giới. Vậy việc đặt hàng quảng châu có lợi ích gì?',
        metadata: { style: 'normal' }
      },
      {
        id: 'benefits-title',
        type: 'text',
        content: 'Những lợi ích khi <strong>đặt hàng quảng châu</strong>',
        metadata: { style: 'normal' }
      },
      {
        id: 'variety-heading',
        type: 'text',
        content: 'Hàng hóa đa dạng về mẫu mã nên người tiêu dùng dễ chọn lựa',
        metadata: { style: 'normal' }
      },
      {
        id: 'variety-detail',
        type: 'text',
        content: 'Hàng hóa tại quảng châu cũng khá đa dạng về mẫu mã chính vì thế mà mọi khách hàng hoàn toàn có thể lựa chọn hàng hóa phù hợp với nhu cầu buôn bán của mình.',
        metadata: { style: 'normal' }
      },
      {
        id: 'variety-examples',
        type: 'text',
        content: 'Khi nhập hàng Quảng Châu người mua rất dễ dàng có thể lựa chọn đồ phù hợp cho mình. Hàng hóa có đủ các kiểu như áo phông, váy, áp sơ mi,… Do hàng quảng châu rất bắt kịp xu hướng thời trang do đó mà các chủ buôn hoàn toàn có thể lựa chọn thoải mái các mặt hàng của mình.',
        metadata: { style: 'normal' }
      },
      {
        id: 'quality-info',
        type: 'text',
        content: 'Không chỉ đa dạng về mấu mã mà hàng quảng châu còn đảm bảo về chất lượng do sản xuất từ những công ty may mặc lớn và uy tín nên chất lượng khá đảm bảo. Hơn nữa hàng Quảng Châu còn khá linh động về thời tiết và về mùa. Nên khách hàng có thể tha hồ lựa chọn mua về để kinh doanh.',
        metadata: { style: 'normal' }
      },
      {
        id: 'price-heading',
        type: 'text',
        content: 'Giá nhập rẻ',
        metadata: { style: 'normal' }
      },
      {
        id: 'price-detail',
        type: 'text',
        content: 'Trung quốc là nơi nổi tiếng với các thương hiệu trên thế giới do đó mà trung quốc rất biết tận dụng những lợi thế của quốc gia để thu lợi nhuận.',
        metadata: { style: 'normal' }
      },
      {
        id: 'price-stability',
        type: 'text',
        content: 'Hàng quảng châu cũng không có sự giao động mạnh khi có sự biến đổi của thế giới vì thế đây chính là một trong những lợi thế cho các nhà kinh doanh quảng châu.',
        metadata: { style: 'normal' }
      },
      {
        id: 'shipping-info',
        type: 'text',
        content: 'không chỉ có giá nhập rẻ mà cách vận chuyển hàng hòa từ quảng châu về Việt Nam cũng khá thuận lợi, bằng nhiều con đường khác nhau, giá vận chuyển cũng không quá cao vì thế mà việc nhập hàng quảng châu về Việt Nam hết sức thuận lợi.',
        metadata: { style: 'normal' }
      },
      {
        id: 'ordering-methods-heading',
        type: 'text',
        content: 'Nhiều cách thức đặt hàng khác nhau',
        metadata: { style: 'normal' }
      },
      {
        id: 'ordering-advantage',
        type: 'text',
        content: 'Một ưu điểm nữa khiến cho mặt hàng quảng châu thu hút khách hàng mua đó là có nhiều cách thức đặt hàng khác nhau. Do đó bạn có thể dễ dàng mua bán hàng hóa bên quảng châu.',
        metadata: { style: 'normal' }
      },
      {
        id: 'past-vs-present',
        type: 'text',
        content: 'So với những năm trước việc đặt hàng trung quốc chủ yếu các lái buôn phải trực tiếp đánh hàng tại quảng châu điều này gây rất tốn kém cho việc đi lại và chi phí ăn ở.',
        metadata: { style: 'normal' }
      },
      {
        id: 'modern-ordering',
        type: 'text',
        content: 'Ngày nay với sự phát triển của công nghệ internet bạn chỉ cần ngồi ở nhà cũng dễ dàng có thể đặt hàng quảng châu rất tiện lợi cho các chỉ buôn.',
        metadata: { style: 'normal' }
      },
      {
        id: 'intermediary-services',
        type: 'text',
        content: 'Hơn nữa để vận chuyển hàng hóa từ quảng châu về việt nam bạn có thể lưa chọn những đơn vị trung gian, hàng hóa về tận tay mà bạn không cần phải vất vả đi đến nơi để vận chuyển hàng hóa về.',
        metadata: { style: 'normal' }
      }
    ],
    tags: ['kinh doanh', 'quảng châu', 'import', 'thương mại'],
    category: 'Kinh doanh'
  },
  {
    id: 3,
    title: 'Cần thuê xe tải chở hàng của nhà xe Á Châu phải làm thế nào?',
    image: 'https://bizweb.dktcdn.net/100/356/587/articles/14980721-1143826228988065-3528006525010847038-n.png?v=1558852740177',
    date: '26/05/2019',
    author: 'Admin',
    excerpt: 'Ngày nay nhu cầu vận chuyển hàng hoá đi Bắc Nam của các doanh nghiệp sản xuất trong nước ngày càng nhiều.',
    slug: 'can-thue-xe-tai-cho-hang-cua-nha-xe-a-chau-phai-lam-the-nao',
    commentCount: 0,
    content: [
      {
        id: 'intro',
        type: 'text',
        content: 'Ngày nay nhu cầu vận chuyển hàng hoá đi Bắc Nam của các doanh nghiệp sản xuất trong nước ngày càng nhiều. Để đáp ứng cho nhu cầu này rất nhiều các công ty vận tải được thành lập từ quy mô nhỏ, vừa đến lớn. Trong đó nhà xe Á Châu được rất nhiều Doanh nghiệp biết tới và có mong muốn thuê xe tải chở hàng. Mọi nhu cầu vận chuyển hàng đi Bắc Nam đều được nhà xe Á Châu nhận chở đúng hẹn đúng lịch trình.',
        metadata: { style: 'normal' }
      },
      {
        id: 'advantages-title',
        type: 'text',
        content: 'Những ưu thế vượt trội của nhà xe Á Châu chuyên vận chuyển hàng hoá Bắc Nam',
        metadata: { style: 'normal' }
      },
      {
        id: 'reputation',
        type: 'text',
        content: 'Nằm trong top 10 công ty dịch vụ vận chuyển hàng hoá Bắc Nam uy tín chuyên nghiệp, nhà xe Á Châu đã nhận được rất nhiều quan tâm và những phản hồi tích cực của quý khách hàng đã sử dụng dịch vụ vận chuyển của chúng tôi. Từ đó chúng tôi càng có thêm động lực để tiếp tục phát triển mà mở rộng dịch vụ vận chuyển của mình hơn nữa.',
        metadata: { style: 'normal' }
      },
      {
        id: 'capacity',
        type: 'text',
        content: 'Với lượng hàng hoá mỗi ngày nhiều, nên hàng ngày đều xếp xe xếp hàng vận chuyển đi Bắc Nam. Năng suất vận chuyển lớn đáp ứng được nhu cầu vận chuyển cao của các Doanh nghiệp sản xuất. Điều kiện kho bãi rộng rãi để trữ hàng xuất kho và nhập kho thuận lợi, đảm bảo hàng hoá không bị thất lạc hay hư hỏng do thời tiết.',
        metadata: { style: 'normal' }
      },
      {
        id: 'fleet-info',
        type: 'text',
        content: 'Đầu tư dàn xe tải đủ tải trọng từ 1,25 tấn cho tới xe cont đầu kéo 30 tấn, chúng tôi có những phương thức chuyên biệt phù hợp với kinh phí của từng đơn hàng mà các Doanh nghiệp muốn vận chuyển. Bên cạnh đó với những đơn hàng trên 3 tấn và trên 14 khối nhà xe Á Châu sẽ hỗ trợ giao hàng tận nơi miễn phí cho quý khách hàng.',
        metadata: { style: 'normal' }
      }
    ],
    tags: ['vận chuyển', 'xe tải', 'á châu', 'logistics', 'bắc nam'],
    category: 'Vận chuyển'
  }
]; 