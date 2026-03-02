// Provider data configuration
const PROVIDERS = {
  'longvan-system': {
    id: 'longvan-system',
    name: 'Longvan System',
    subtitle: 'IT Helpdesk Chuyên Nghiệp',
    description: [
      '<strong>Longvan System</strong> là đơn vị hàng đầu cung cấp dịch vụ IT Helpdesk và hỗ trợ kỹ thuật chuyên nghiệp tại Việt Nam. Với đội ngũ kỹ thuật viên giàu kinh nghiệm và trang thiết bị hiện đại, chúng tôi cam kết mang đến giải pháp công nghệ tối ưu cho cá nhân và doanh nghiệp.',
      'Chúng tôi chuyên về sửa chữa máy tính, laptop, cài đặt phần mềm, bảo trì hệ thống mạng, tư vấn giải pháp IT, và hỗ trợ từ xa 24/7. Mọi vấn đề công nghệ của bạn đều có thể được giải quyết nhanh chóng và hiệu quả.'
    ],
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=200&fit=crop',
    cover: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=400&fit=crop',
    coverGradient: 'from-slate-900/90 via-slate-700/40 to-transparent',
    coverOpacity: '0.30',
    rating: 4.9,
    reviewCount: 580,
    bookings: '3.2k+',
    branches: [
      {
        id: 'branch-1',
        name: 'Chi nhánh Quận 1',
        address: '123 Lê Lợi, Q.1, TP.HCM',
        phone: '028 3822 1234',
        timeSlots: [
          { time: '08:00', slots: 5 },
          { time: '09:00', slots: 3 },
          { time: '10:00', slots: 4 },
          { time: '11:00', slots: 2 },
          { time: '13:00', slots: 6 },
          { time: '14:00', slots: 5 },
          { time: '15:00', slots: 3 },
          { time: '16:00', slots: 4 },
          { time: '17:00', slots: 2 }
        ]
      },
      {
        id: 'branch-2',
        name: 'Chi nhánh Quận 3',
        address: '456 Võ Văn Tần, Q.3, TP.HCM',
        phone: '028 3930 5678',
        timeSlots: [
          { time: '08:00', slots: 4 },
          { time: '09:00', slots: 5 },
          { time: '10:00', slots: 3 },
          { time: '11:00', slots: 4 },
          { time: '13:00', slots: 5 },
          { time: '14:00', slots: 6 },
          { time: '15:00', slots: 4 },
          { time: '16:00', slots: 3 },
          { time: '17:00', slots: 5 }
        ]
      },
      {
        id: 'branch-3',
        name: 'Chi nhánh Thủ Đức',
        address: '789 Võ Văn Ngân, TP. Thủ Đức, TP.HCM',
        phone: '028 3897 9012',
        timeSlots: [
          { time: '08:00', slots: 6 },
          { time: '09:00', slots: 4 },
          { time: '10:00', slots: 5 },
          { time: '11:00', slots: 3 },
          { time: '13:00', slots: 4 },
          { time: '14:00', slots: 5 },
          { time: '15:00', slots: 6 },
          { time: '16:00', slots: 4 },
          { time: '17:00', slots: 3 }
        ]
      }
    ],
    stats: [
      { icon: 'thumb_up', color: 'blue', label: 'Hài lòng', value: '98%' },
      { icon: 'schedule', color: 'green', label: 'Hỗ trợ', value: '24/7' },
      { icon: 'speed', color: 'orange', label: 'Phản hồi', value: '<2h' },
      { icon: 'workspace_premium', color: 'purple', label: 'Năm KN', value: '5+' }
    ],
    contact: {
      address: '123 Lê Lợi, Q.1, TP.HCM',
      phone: '1900 1234',
      hours: '8:00 - 22:00 hàng ngày'
    },
    certificates: [
      { name: 'Chứng nhận ISO 9001:2015', org: 'Tổ chức Tiêu chuẩn Quốc tế', year: '2022' },
      { name: 'Giấy phép kinh doanh dịch vụ IT', org: 'Sở Thông tin & Truyền thông TP.HCM', year: '2019' },
      { name: 'Chứng chỉ CompTIA A+', org: 'CompTIA', year: '2020' }
    ],
    reviews: [
      { name: 'Nguyễn Văn A', rating: 5, date: '2 ngày trước', comment: 'Dịch vụ rất tốt, kỹ thuật viên nhiệt tình và chuyên nghiệp. Máy tính được sửa nhanh chóng.', avatar: 'https://i.pravatar.cc/150?img=12' },
      { name: 'Trần Thị B', rating: 5, date: '1 tuần trước', comment: 'Hỗ trợ từ xa rất tiện lợi, giải quyết vấn đề nhanh gọn. Giá cả hợp lý.', avatar: 'https://i.pravatar.cc/150?img=45' },
      { name: 'Lê Minh C', rating: 4, date: '2 tuần trước', comment: 'Tư vấn nhiệt tình, giải thích dễ hiểu. Sẽ quay lại lần sau.', avatar: 'https://i.pravatar.cc/150?img=33' }
    ],
    serviceTitle: 'Dịch vụ của chúng tôi',
    serviceIcon: 'build',
    categories: [
      { id: 'all', label: 'Tất cả' },
      { id: 'repair', label: 'Sửa chữa' },
      { id: 'software', label: 'Phần mềm' },
      { id: 'network', label: 'Mạng' },
      { id: 'support', label: 'Hỗ trợ' }
    ],
    services: [
      { 
        id: 'sua-chua-may-tinh',
        name: 'Sửa chữa máy tính', 
        desc: 'PC, Laptop, iMac', 
        price: '150.000đ', 
        icon: 'computer', 
        color: 'blue', 
        category: 'repair',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop',
        fullDescription: 'Dịch vụ sửa chữa máy tính chuyên nghiệp với đội ngũ kỹ thuật viên giàu kinh nghiệm. Chúng tôi xử lý mọi vấn đề từ phần cứng đến phần mềm, đảm bảo máy tính của bạn hoạt động trơn tru.',
        features: ['Kiểm tra miễn phí', 'Bảo hành 30 ngày', 'Hỗ trợ tận nơi', 'Linh kiện chính hãng'],
        duration: '1-2 giờ',
        warranty: '30 ngày'
      },
      { 
        id: 'nang-cap-phan-cung',
        name: 'Nâng cấp phần cứng', 
        desc: 'RAM, SSD, VGA', 
        price: '200.000đ', 
        icon: 'memory', 
        color: 'red', 
        category: 'repair',
        image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&h=500&fit=crop',
        fullDescription: 'Nâng cấp phần cứng để tăng hiệu suất máy tính. Tư vấn miễn phí về cấu hình phù hợp với nhu cầu sử dụng của bạn.',
        features: ['Tư vấn miễn phí', 'Linh kiện chính hãng', 'Bảo hành 12 tháng', 'Lắp đặt tận nơi'],
        duration: '30-60 phút',
        warranty: '12 tháng'
      },
      { 
        id: 've-sinh-may-tinh',
        name: 'Vệ sinh máy tính', 
        desc: 'Làm sạch, thay keo tản nhiệt', 
        price: '100.000đ', 
        icon: 'cleaning_services', 
        color: 'yellow', 
        category: 'repair',
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=500&fit=crop',
        fullDescription: 'Vệ sinh máy tính định kỳ giúp tăng tuổi thọ và hiệu suất. Làm sạch bụi bẩn, thay keo tản nhiệt mới.',
        features: ['Vệ sinh toàn bộ', 'Thay keo tản nhiệt', 'Kiểm tra quạt', 'Tư vấn bảo quản'],
        duration: '45 phút',
        warranty: '7 ngày'
      },
      { 
        id: 'cai-dat-phan-mem',
        name: 'Cài đặt phần mềm', 
        desc: 'Windows, Office, Adobe', 
        price: '100.000đ', 
        icon: 'download', 
        color: 'green', 
        category: 'software',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
        fullDescription: 'Cài đặt hệ điều hành và phần mềm chính hãng. Hướng dẫn sử dụng cơ bản sau khi cài đặt.',
        features: ['Phần mềm bản quyền', 'Cài driver đầy đủ', 'Hướng dẫn sử dụng', 'Hỗ trợ từ xa'],
        duration: '1-2 giờ',
        warranty: '15 ngày'
      },
      { 
        id: 'diet-virus-malware',
        name: 'Diệt virus & Malware', 
        desc: 'Quét, xóa, bảo vệ', 
        price: '120.000đ', 
        icon: 'security', 
        color: 'indigo', 
        category: 'software',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
        fullDescription: 'Quét và loại bỏ virus, malware, spyware. Cài đặt phần mềm bảo vệ để phòng ngừa.',
        features: ['Quét toàn bộ hệ thống', 'Xóa virus/malware', 'Cài antivirus', 'Tư vấn bảo mật'],
        duration: '1-3 giờ',
        warranty: '30 ngày'
      },
      { 
        id: 'sao-luu-du-lieu',
        name: 'Sao lưu dữ liệu', 
        desc: 'Backup, Recovery', 
        price: '150.000đ', 
        icon: 'backup', 
        color: 'pink', 
        category: 'software',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop',
        fullDescription: 'Sao lưu dữ liệu quan trọng an toàn. Khôi phục dữ liệu khi cần thiết.',
        features: ['Backup toàn bộ', 'Mã hóa dữ liệu', 'Cloud backup', 'Khôi phục nhanh'],
        duration: '2-4 giờ',
        warranty: 'Không áp dụng'
      },
      { 
        id: 'bao-tri-he-thong-mang',
        name: 'Bảo trì hệ thống mạng', 
        desc: 'Router, Switch, Cabling', 
        price: '300.000đ', 
        icon: 'router', 
        color: 'purple', 
        category: 'network',
        image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&h=500&fit=crop',
        fullDescription: 'Bảo trì và tối ưu hệ thống mạng doanh nghiệp. Đảm bảo kết nối ổn định và bảo mật.',
        features: ['Kiểm tra toàn bộ', 'Tối ưu tốc độ', 'Bảo mật mạng', 'Báo cáo chi tiết'],
        duration: '2-4 giờ',
        warranty: '60 ngày'
      },
      { 
        id: 'cai-dat-wifi',
        name: 'Cài đặt WiFi', 
        desc: 'Mesh, Access Point', 
        price: '200.000đ', 
        icon: 'wifi', 
        color: 'cyan', 
        category: 'network',
        image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&h=500&fit=crop',
        fullDescription: 'Lắp đặt và cấu hình hệ thống WiFi. Phủ sóng toàn bộ không gian.',
        features: ['Khảo sát miễn phí', 'Lắp đặt chuyên nghiệp', 'Tối ưu tín hiệu', 'Bảo mật WPA3'],
        duration: '1-2 giờ',
        warranty: '90 ngày'
      },
      { 
        id: 'lap-dat-mang-lan',
        name: 'Lắp đặt mạng LAN', 
        desc: 'Văn phòng, gia đình', 
        price: '250.000đ', 
        icon: 'cable', 
        color: 'teal', 
        category: 'network',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
        fullDescription: 'Lắp đặt hệ thống mạng LAN cho văn phòng và gia đình. Đi dây ngầm chuyên nghiệp.',
        features: ['Thiết kế hệ thống', 'Đi dây ngầm', 'Test tốc độ', 'Bảo hành 6 tháng'],
        duration: '3-6 giờ',
        warranty: '6 tháng'
      },
      { 
        id: 'ho-tro-tu-xa',
        name: 'Hỗ trợ từ xa', 
        desc: 'Remote Desktop, TeamViewer', 
        price: '80.000đ', 
        icon: 'desktop_windows', 
        color: 'lime', 
        category: 'support',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
        fullDescription: 'Hỗ trợ kỹ thuật từ xa nhanh chóng. Giải quyết vấn đề mà không cần đến tận nơi.',
        features: ['Hỗ trợ 24/7', 'Kết nối an toàn', 'Giải quyết nhanh', 'Giá cả hợp lý'],
        duration: '15-30 phút',
        warranty: '7 ngày'
      },
      { 
        id: 'dao-tao-it-co-ban',
        name: 'Đào tạo IT cơ bản', 
        desc: 'Sử dụng máy tính, Office', 
        price: '300.000đ', 
        icon: 'school', 
        color: 'amber', 
        category: 'support',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
        fullDescription: 'Đào tạo kỹ năng IT cơ bản cho người mới bắt đầu. Học thực hành, dễ hiểu.',
        features: ['Giáo trình chi tiết', 'Thực hành nhiều', 'Tài liệu miễn phí', 'Hỗ trợ sau khóa'],
        duration: '2 giờ/buổi',
        warranty: 'Không áp dụng'
      },
      { 
        id: 'tu-van-giai-phap-it',
        name: 'Tư vấn giải pháp IT', 
        desc: 'Cho doanh nghiệp', 
        price: '500.000đ', 
        icon: 'lightbulb', 
        color: 'rose', 
        category: 'support',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
        fullDescription: 'Tư vấn giải pháp công nghệ cho doanh nghiệp. Tối ưu chi phí và hiệu quả.',
        features: ['Khảo sát miễn phí', 'Báo giá chi tiết', 'Giải pháp tối ưu', 'Hỗ trợ triển khai'],
        duration: '1-2 giờ',
        warranty: 'Không áp dụng'
      }
    ]
  },
  
  'bubbly-baby-spa': {
    id: 'bubbly-baby-spa',
    name: 'Bubbly Baby Spa',
    subtitle: 'Spa & Massage Cao Cấp Cho Bé',
    description: [
      '<strong>Bubbly Baby Spa</strong> là trung tâm spa cao cấp dành riêng cho bé từ 0-36 tháng tuổi. Chúng tôi cung cấp các dịch vụ massage, bơi thủy liệu, chăm sóc da và thư giãn cho bé trong môi trường an toàn, vệ sinh và chuyên nghiệp.',
      'Đội ngũ chuyên viên được đào tạo bài bản về chăm sóc trẻ sơ sinh và trẻ nhỏ, sử dụng sản phẩm organic an toàn cho làn da nhạy cảm của bé.'
    ],
    logo: 'bubbly-baby-spa-logo.jpg',
    cover: 'bubbly-baby-spa-cover.jpg',
    coverGradient: 'from-pink-100 via-blue-50 to-purple-100',
    coverOpacity: '0.40',
    rating: 4.9,
    reviewCount: 450,
    bookings: '2.3k+',
    branches: [
      {
        id: 'branch-1',
        name: 'Chi nhánh Quận 3',
        address: '456 Lê Văn Sỹ, Q.3, TP.HCM',
        phone: '028 3930 7777',
        timeSlots: [
          { time: '08:00', slots: 3 },
          { time: '09:00', slots: 4 },
          { time: '10:00', slots: 5 },
          { time: '11:00', slots: 3 },
          { time: '13:00', slots: 4 },
          { time: '14:00', slots: 5 },
          { time: '15:00', slots: 4 },
          { time: '16:00', slots: 3 },
          { time: '17:00', slots: 2 }
        ]
      },
      {
        id: 'branch-2',
        name: 'Chi nhánh Quận 7',
        address: '234 Nguyễn Văn Linh, Q.7, TP.HCM',
        phone: '028 3775 8888',
        timeSlots: [
          { time: '08:00', slots: 4 },
          { time: '09:00', slots: 5 },
          { time: '10:00', slots: 4 },
          { time: '11:00', slots: 3 },
          { time: '13:00', slots: 5 },
          { time: '14:00', slots: 4 },
          { time: '15:00', slots: 3 },
          { time: '16:00', slots: 4 },
          { time: '17:00', slots: 3 }
        ]
      }
    ],
    stats: [
      { icon: 'child_care', color: 'pink', label: 'Bé yêu', value: '5000+' },
      { icon: 'verified_user', color: 'blue', label: 'An toàn', value: '100%' },
      { icon: 'spa', color: 'purple', label: 'Dịch vụ', value: '8' },
      { icon: 'workspace_premium', color: 'green', label: 'Năm KN', value: '3+' }
    ],
    contact: {
      address: '456 Lê Văn Sỹ, Q.3, TP.HCM',
      phone: '1900 7777',
      hours: '8:00 - 20:00 hàng ngày'
    },
    certificates: [
      { name: 'Chứng nhận An toàn Vệ sinh Thực phẩm', org: 'Sở Y tế TP.HCM', year: '2023' },
      { name: 'Chứng chỉ Chăm sóc Trẻ sơ sinh', org: 'Bộ Y tế', year: '2021' },
      { name: 'Giấy phép Kinh doanh Spa', org: 'UBND Quận 3', year: '2021' }
    ],
    reviews: [
      { name: 'Phạm Thu D', rating: 5, date: '3 ngày trước', comment: 'Bé rất thích bơi ở đây, nhân viên chăm sóc tận tình. Không gian sạch sẽ, an toàn.', avatar: 'https://i.pravatar.cc/150?img=23' },
      { name: 'Hoàng Minh E', rating: 5, date: '1 tuần trước', comment: 'Dịch vụ massage cho bé rất chuyên nghiệp. Bé ngủ ngon hơn sau khi massage.', avatar: 'https://i.pravatar.cc/150?img=51' },
      { name: 'Võ Thị F', rating: 5, date: '2 tuần trước', comment: 'Sản phẩm organic an toàn cho da bé. Giá cả hợp lý, sẽ đưa bé đến thường xuyên.', avatar: 'https://i.pravatar.cc/150?img=38' }
    ],
    serviceTitle: 'Dịch vụ',
    serviceIcon: 'spa',
    services: [
      { 
        id: 'boi-thuy-lieu',
        name: 'Bơi thủy liệu', 
        desc: 'Bơi với phao cổ an toàn', 
        price: '150.000đ', 
        category: 'all',
        image: 'bubbly-baby-spa-cover.jpg',
        icon: 'pool',
        color: 'blue',
        fullDescription: 'Dịch vụ bơi thủy liệu cho bé từ 0-36 tháng với phao cổ chuyên dụng an toàn. Giúp bé phát triển thể chất, tăng cường sức đề kháng.',
        features: ['Phao cổ chuyên dụng', 'Nước ấm 37°C', 'Giám sát 1-1', 'Thời gian linh hoạt'],
        duration: '20-30 phút',
        warranty: 'Không áp dụng'
      },
      { 
        id: 'massage-toan-than',
        name: 'Massage toàn thân', 
        desc: 'Kích thích phát triển', 
        price: '200.000đ', 
        category: 'all',
        image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=500&fit=crop',
        icon: 'spa',
        color: 'pink',
        fullDescription: 'Massage toàn thân cho bé giúp kích thích phát triển vận động, tăng cường tuần hoàn máu, giúp bé ngủ ngon hơn.',
        features: ['Kỹ thuật chuyên nghiệp', 'Dầu massage organic', 'Chuyên viên có chứng chỉ', 'Môi trường ấm áp'],
        duration: '30 phút',
        warranty: 'Không áp dụng'
      },
      { 
        id: 'cham-soc-da',
        name: 'Chăm sóc da', 
        desc: 'Sản phẩm organic', 
        price: '180.000đ', 
        category: 'all',
        image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=500&fit=crop',
        icon: 'face',
        color: 'purple',
        fullDescription: 'Chăm sóc da cho bé với sản phẩm organic an toàn, không chứa hóa chất độc hại. Phù hợp cho làn da nhạy cảm.',
        features: ['Sản phẩm organic 100%', 'Không paraben', 'Kiểm tra da miễn phí', 'Tư vấn chăm sóc'],
        duration: '20 phút',
        warranty: 'Không áp dụng'
      },
      { 
        id: 'goi-combo',
        name: 'Gói combo', 
        desc: 'Bơi + Massage + Chăm sóc', 
        price: '450.000đ', 
        category: 'all',
        image: 'bubbly-baby-spa-cover.jpg',
        icon: 'card_giftcard',
        color: 'green',
        fullDescription: 'Gói combo trọn gói bao gồm bơi thủy liệu, massage toàn thân và chăm sóc da. Tiết kiệm 15% so với đặt lẻ.',
        features: ['Tiết kiệm 15%', 'Trọn gói 3 dịch vụ', 'Ưu tiên đặt lịch', 'Tặng ảnh kỷ niệm'],
        duration: '70-80 phút',
        warranty: 'Không áp dụng'
      }
    ]
  },
  
  'xuong-ve-sang-tao': {
    id: 'xuong-ve-sang-tao',
    name: 'Xưởng Vẽ Sáng Tạo',
    subtitle: 'Workshop Nghệ Thuật & Hội Họa',
    description: [
      '<strong>Xưởng Vẽ Sáng Tạo</strong> là không gian nghệ thuật dành cho mọi lứa tuổi, từ trẻ em đến người lớn. Chúng tôi cung cấp các khóa học vẽ tranh sơn dầu, màu nước, chì than, và các workshop 1 ngày cho người mới bắt đầu.',
      'Với đội ngũ giáo viên là các họa sĩ chuyên nghiệp, chúng tôi cam kết mang đến trải nghiệm học tập thú vị, khơi dậy niềm đam mê và phát triển kỹ năng nghệ thuật cho học viên.'
    ],
    logo: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=200&h=200&fit=crop',
    cover: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=400&fit=crop',
    coverGradient: 'from-violet-900/90 via-purple-700/40 to-transparent',
    coverOpacity: '0.30',
    rating: 4.8,
    reviewCount: 280,
    bookings: '1.5k+',
    branches: [
      {
        id: 'branch-1',
        name: 'Chi nhánh Quận 3',
        address: '234 Pasteur, Q.3, TP.HCM',
        phone: '028 3939 9999',
        timeSlots: [
          { time: '09:00', slots: 8 },
          { time: '10:00', slots: 6 },
          { time: '11:00', slots: 5 },
          { time: '13:00', slots: 7 },
          { time: '14:00', slots: 8 },
          { time: '15:00', slots: 6 },
          { time: '16:00', slots: 5 },
          { time: '17:00', slots: 4 },
          { time: '18:00', slots: 6 }
        ]
      }
    ],
    stats: [
      { icon: 'palette', color: 'purple', label: 'Học viên', value: '2000+' },
      { icon: 'verified_user', color: 'blue', label: 'Hài lòng', value: '96%' },
      { icon: 'brush', color: 'pink', label: 'Khóa học', value: '12' },
      { icon: 'workspace_premium', color: 'green', label: 'Năm KN', value: '7+' }
    ],
    contact: {
      address: '234 Pasteur, Q.3, TP.HCM',
      phone: '028 3939 9999',
      hours: '9:00 - 21:00 (T2-CN)'
    },
    certificates: [
      { name: 'Chứng nhận Giáo viên Mỹ thuật', org: 'Bộ Giáo dục & Đào tạo', year: '2017' },
      { name: 'Giấy phép Kinh doanh Đào tạo', org: 'Sở Giáo dục TP.HCM', year: '2017' },
      { name: 'Chứng chỉ Họa sĩ chuyên nghiệp', org: 'Hội Mỹ thuật Việt Nam', year: '2015' }
    ],
    reviews: [
      { name: 'Đỗ Văn G', rating: 5, date: '5 ngày trước', comment: 'Giáo viên dạy rất tận tâm, giải thích dễ hiểu. Con tôi rất thích học vẽ ở đây.', avatar: 'https://i.pravatar.cc/150?img=68' },
      { name: 'Bùi Thị H', rating: 5, date: '1 tuần trước', comment: 'Không gian sáng tạo, thoải mái. Học phí hợp lý, chất lượng tốt.', avatar: 'https://i.pravatar.cc/150?img=47' },
      { name: 'Ngô Minh I', rating: 4, date: '3 tuần trước', comment: 'Workshop 1 ngày rất thú vị, phù hợp cho người mới bắt đầu như tôi.', avatar: 'https://i.pravatar.cc/150?img=59' }
    ],
    serviceTitle: 'Khóa học & Workshop',
    serviceIcon: 'palette',
    services: [
      { 
        id: 've-tranh-son-dau',
        name: 'Vẽ tranh sơn dầu', 
        desc: 'Khóa 8 buổi, cơ bản đến nâng cao', 
        price: '2.500.000đ', 
        category: 'all',
        image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=500&fit=crop',
        icon: 'palette',
        color: 'purple',
        fullDescription: 'Khóa học vẽ tranh sơn dầu từ cơ bản đến nâng cao. Học viên sẽ được hướng dẫn kỹ thuật pha màu, cách cầm붓, và hoàn thành tác phẩm riêng.',
        features: ['8 buổi học', 'Giáo viên 1-1', 'Dụng cụ miễn phí', 'Chứng nhận hoàn thành'],
        duration: '2 giờ/buổi',
        warranty: 'Không áp dụng'
      },
      { 
        id: 've-mau-nuoc',
        name: 'Vẽ màu nước', 
        desc: 'Khóa 6 buổi, phong cảnh & chân dung', 
        price: '1.800.000đ', 
        category: 'all',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=500&fit=crop',
        icon: 'water_drop',
        color: 'blue',
        fullDescription: 'Khóa học vẽ màu nước với kỹ thuật pha màu, tạo độ ướt, và vẽ phong cảnh, chân dung. Phù hợp cho người mới bắt đầu.',
        features: ['6 buổi học', 'Kỹ thuật cơ bản', 'Tài liệu đầy đủ', 'Thực hành nhiều'],
        duration: '2 giờ/buổi',
        warranty: 'Không áp dụng'
      },
      { 
        id: 've-chi-than',
        name: 'Vẽ chì than', 
        desc: 'Khóa 4 buổi, kỹ thuật cơ bản', 
        price: '1.200.000đ', 
        category: 'all',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=500&fit=crop',
        icon: 'edit',
        color: 'gray',
        fullDescription: 'Khóa học vẽ chì than cơ bản, học cách tạo bóng, ánh sáng và kỹ thuật phác thảo. Nền tảng cho mọi loại hình vẽ.',
        features: ['4 buổi học', 'Kỹ thuật nền tảng', 'Dụng cụ cơ bản', 'Bài tập về nhà'],
        duration: '2 giờ/buổi',
        warranty: 'Không áp dụng'
      },
      { 
        id: 'workshop-1-ngay',
        name: 'Workshop 1 ngày', 
        desc: 'Trải nghiệm vẽ tranh, mọi lứa tuổi', 
        price: '250.000đ', 
        category: 'all',
        image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=500&fit=crop',
        icon: 'brush',
        color: 'orange',
        fullDescription: 'Workshop 1 ngày trải nghiệm vẽ tranh cho mọi lứa tuổi. Không cần kinh nghiệm, phù hợp cho người mới bắt đầu.',
        features: ['Không cần kinh nghiệm', 'Dụng cụ đầy đủ', 'Mang tác phẩm về', 'Không khí vui vẻ'],
        duration: '3 giờ',
        warranty: 'Không áp dụng'
      }
    ]
  },
  
  'bs-ha-ngoc-manh': {
    id: 'bs-ha-ngoc-manh',
    name: 'BS. Hà Ngọc Mạnh',
    subtitle: 'Phòng Khám Đa Khoa - Bác Sĩ Nội Khoa',
    description: [
      '<strong>Bác sĩ Hà Ngọc Mạnh</strong> là bác sĩ nội khoa với hơn 15 năm kinh nghiệm trong lĩnh vực khám và điều trị bệnh. Tốt nghiệp Đại học Y Hà Nội, Bác sĩ Mạnh chuyên về các bệnh lý tim mạch, tiểu đường, và bệnh mãn tính.',
      'Phòng khám được trang bị đầy đủ thiết bị y tế hiện đại, đội ngũ y tá chuyên nghiệp, cam kết mang đến dịch vụ chăm sóc sức khỏe tận tâm và chất lượng cao cho bệnh nhân.'
    ],
    logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&h=200&fit=crop',
    cover: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=400&fit=crop',
    coverGradient: 'from-emerald-600/90 via-teal-500/40 to-transparent',
    coverOpacity: '0.20',
    rating: 4.8,
    reviewCount: 320,
    bookings: '1.8k+',
    stats: [
      { icon: 'medical_services', color: 'emerald', label: 'Năm KN', value: '15+' },
      { icon: 'verified_user', color: 'blue', label: 'Hài lòng', value: '98%' },
      { icon: 'cardiology', color: 'cyan', label: 'Chuyên khoa', value: '10' },
      { icon: 'schedule', color: 'orange', label: 'Tư vấn', value: '24/7' }
    ],
    contact: {
      address: '789 Nguyễn Trãi, Q.1, TP.HCM',
      phone: '028 3838 8888',
      hours: '7:30 - 19:00 (T2-T7)<br/>8:00 - 12:00 (CN)'
    },
    certificates: [
      { name: 'Bằng Bác sĩ Đa khoa', org: 'Đại học Y Hà Nội', year: '2008' },
      { name: 'Chứng chỉ Hành nghề Khám chữa bệnh', org: 'Bộ Y tế', year: '2009' },
      { name: 'Chứng chỉ Chuyên khoa I Nội', org: 'Đại học Y Dược TP.HCM', year: '2015' },
      { name: 'Giấy phép Hoạt động Phòng khám', org: 'Sở Y tế TP.HCM', year: '2020' }
    ],
    reviews: [
      { name: 'Phan Văn J', rating: 5, date: '1 ngày trước', comment: 'Bác sĩ khám rất kỹ, tư vấn chi tiết. Phòng khám sạch sẽ, hiện đại.', avatar: 'https://i.pravatar.cc/150?img=14' },
      { name: 'Lý Thị K', rating: 5, date: '4 ngày trước', comment: 'Điều trị tiểu đường hiệu quả, bác sĩ theo dõi sát sao. Rất hài lòng.', avatar: 'https://i.pravatar.cc/150?img=29' },
      { name: 'Trương Minh L', rating: 5, date: '1 tuần trước', comment: 'Khám tim mạch chuyên sâu, bác sĩ giải thích rõ ràng, dễ hiểu.', avatar: 'https://i.pravatar.cc/150?img=52' }
    ],
    serviceTitle: 'Dịch vụ khám chữa bệnh',
    serviceIcon: 'medical_services',
    services: [
      { name: 'Khám nội tổng quát', desc: 'Khám sức khỏe định kỳ', price: '200.000đ', category: 'all' },
      { name: 'Tim mạch', desc: 'Khám & điều trị tim mạch', price: '300.000đ', category: 'all' },
      { name: 'Tiểu đường', desc: 'Tư vấn & theo dõi đường huyết', price: '250.000đ', category: 'all' },
      { name: 'Huyết áp cao', desc: 'Điều trị tăng huyết áp', price: '250.000đ', category: 'all' },
      { name: 'Xét nghiệm', desc: 'Xét nghiệm máu, nước tiểu', price: '150.000đ', category: 'all' },
      { name: 'Tư vấn dinh dưỡng', desc: 'Chế độ ăn cho bệnh mãn tính', price: '180.000đ', category: 'all' }
    ]
  }
};

// Make PROVIDERS available globally
if (typeof window !== 'undefined') {
  window.PROVIDERS = PROVIDERS;
}
