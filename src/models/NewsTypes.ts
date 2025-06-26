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
    title: 'Đặt hàng Quảng Châu về kinh doanh có lợi ích gì?',
    image: 'https://bizweb.dktcdn.net/100/356/587/articles/adfd.jpg?v=1558853162507',
    date: '26/05/2019',
    author: 'Admin',
    excerpt: 'Việc đặt hàng Quảng Châu về kinh doanh mang lại nhiều lợi ích to lớn cho các doanh nghiệp.',
    slug: 'dat-hang-quang-chau-ve-kinh-doanh-co-loi-ich-gi',
    commentCount: 0,
    content: [
      {
        id: 'heading-1',
        type: 'heading',
        content: 'Lợi ích của việc đặt hàng Quảng Châu',
        metadata: { level: 2 }
      },
      {
        id: 'intro-text',
        type: 'text',
        content: 'Trong thời đại kinh tế toàn cầu hóa, việc tìm kiếm nguồn hàng chất lượng với giá cả cạnh tranh là mối quan tâm hàng đầu của các doanh nghiệp. Quảng Châu - trung tâm thương mại lớn của Trung Quốc, đã trở thành điểm đến lý tưởng cho việc nhập khẩu hàng hóa.',
        metadata: { style: 'normal' }
      },
      {
        id: 'benefits-list',
        type: 'list',
        content: 'Các lợi ích chính khi đặt hàng Quảng Châu',
        metadata: {
          listType: 'unordered',
          items: [
            'Giá cả cạnh tranh so với thị trường trong nước, tiết kiệm chi phí đáng kể',
            'Đa dạng mẫu mã và chất lượng sản phẩm phong phú',
            'Nguồn hàng ổn định, đáp ứng nhu cầu số lượng lớn',
            'Dịch vụ hỗ trợ chuyên nghiệp từ đặt hàng đến vận chuyển',
            'Cơ hội tiếp cận công nghệ và xu hướng mới nhất'
          ]
        }
      },
      {
        id: 'conclusion',
        type: 'text',
        content: 'Đặt hàng Quảng Châu không chỉ là lựa chọn thông minh cho các doanh nghiệp muốn tối ưu hóa chi phí mà còn là cơ hội để nâng cao chất lượng sản phẩm và mở rộng thị trường.',
        metadata: { style: 'italic' }
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
    excerpt: 'Hướng dẫn chi tiết cách thuê xe tải chở hàng của nhà xe Á Châu một cách nhanh chóng và hiệu quả.',
    slug: 'can-thue-xe-tai-cho-hang-cua-nha-xe-a-chau-phai-lam-the-nao',
    commentCount: 0,
    content: [
      {
        id: 'intro',
        type: 'text',
        content: 'Nhà xe Á Châu là một trong những đơn vị vận chuyển uy tín hàng đầu tại Việt Nam. Với đội xe đa dạng và dịch vụ chuyên nghiệp, việc thuê xe tải của Á Châu sẽ đảm bảo hàng hóa của bạn được vận chuyển an toàn và đúng hẹn.',
        metadata: { style: 'normal' }
      },
      {
        id: 'steps-heading',
        type: 'heading',
        content: 'Các bước thuê xe tải Á Châu',
        metadata: { level: 2 }
      },
      {
        id: 'steps-list',
        type: 'list',
        content: 'Quy trình thuê xe đơn giản',
        metadata: {
          listType: 'ordered',
          items: [
            'Liên hệ hotline hoặc truy cập website chính thức của Á Châu',
            'Cung cấp thông tin về hàng hóa và lộ trình vận chuyển',
            'Nhận báo giá và lựa chọn loại xe phù hợp',
            'Ký hợp đồng và thanh toán theo thỏa thuận',
            'Theo dõi hành trình vận chuyển qua hệ thống GPS'
          ]
        }
      },
      {
        id: 'note',
        type: 'text',
        content: 'Lưu ý: Nên đặt xe trước ít nhất 24h để đảm bảo có xe phù hợp với nhu cầu vận chuyển của bạn.',
        metadata: { style: 'italic' }
      }
    ],
    tags: ['vận chuyển', 'xe tải', 'á châu', 'logistics'],
    category: 'Vận chuyển'
  }
]; 