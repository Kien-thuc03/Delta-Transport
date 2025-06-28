export interface Job {
    id: number;
    title: string;
    location: string;
    type: string;
    deadline: string;
    description: string;
    requirements: string[];
    benefits: string[];
  }

export const jobListings: Job[] = [
    {
      id: 1,
      title: 'Nhân viên giao nhận',
      location: 'Hà Nội',
      type: 'Toàn thời gian',
      deadline: '30/12/2023',
      description: 'Chúng tôi đang tìm kiếm nhân viên giao nhận có kinh nghiệm để hỗ trợ dịch vụ vận chuyển hàng hóa từ Trung Quốc về Việt Nam.',
      requirements: [
        'Nam, tuổi từ 22 - 35',
        'Có kinh nghiệm trong lĩnh vực giao nhận, vận chuyển',
        'Có bằng lái xe máy, ưu tiên có bằng lái B2',
        'Chịu được áp lực công việc cao',
        'Làm việc theo ca, sẵn sàng làm thêm giờ khi cần thiết'
      ],
      benefits: [
        'Lương cơ bản: 8 - 10 triệu + thưởng',
        'Phụ cấp ăn trưa, xăng xe',
        'Bảo hiểm đầy đủ theo quy định',
        'Môi trường làm việc trẻ trung, năng động'
      ]
    },
    {
      id: 2,
      title: 'Nhân viên CSKH',
      location: 'Hồ Chí Minh',
      type: 'Toàn thời gian',
      deadline: '15/12/2023',
      description: 'Tìm kiếm nhân viên chăm sóc khách hàng chuyên nghiệp, hỗ trợ khách hàng trong quá trình đặt hàng và giải quyết các vấn đề phát sinh.',
      requirements: [
        'Nam/Nữ, tuổi từ 22 - 30',
        'Tốt nghiệp Cao đẳng trở lên',
        'Có kỹ năng giao tiếp tốt, giọng nói dễ nghe',
        'Thành thạo vi tính văn phòng',
        'Ưu tiên có kinh nghiệm CSKH, telesales'
      ],
      benefits: [
        'Lương cơ bản: 7 - 9 triệu + thưởng theo KPI',
        'Được đào tạo chuyên sâu về kỹ năng CSKH',
        'Cơ hội thăng tiến rõ ràng',
        'Chế độ phúc lợi đầy đủ theo quy định'
      ]
    },
    {
      id: 3,
      title: 'Nhân viên kho vận',
      location: 'Hà Nội',
      type: 'Toàn thời gian',
      deadline: '25/12/2023',
      description: 'Tuyển nhân viên kho vận có kinh nghiệm quản lý hàng hóa, đóng gói và chuẩn bị đơn hàng cho khách hàng.',
      requirements: [
        'Nam, tuổi từ 20 - 35',
        'Sức khỏe tốt, chịu được áp lực công việc',
        'Có kinh nghiệm làm việc trong môi trường kho bãi',
        'Cẩn thận, trung thực, có tinh thần trách nhiệm cao',
        'Có khả năng làm việc độc lập và theo nhóm'
      ],
      benefits: [
        'Lương cơ bản: 7 - 8.5 triệu',
        'Phụ cấp ca đêm (nếu có)',
        'Bảo hiểm đầy đủ theo quy định',
        'Thưởng theo hiệu quả công việc'
      ]
    }
  ];