import { CONTEXT } from './constants.js';

// This is just a fixed data sample to show how to load data
// for the Highlight component. In fact, data should be loaded
// from database
const type_mostViewed_data = [
  {
    id: '0',
    imgPath: '../public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    category: 'Công nghệ',
    date: '13/04/2023',
    tags: ['TikTok', 'Chính phủ Anh', 'Anh', 'An ninh'],
  },
  {
    id: '1',
    imgPath: '../public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    category: 'Công nghệ',
    date: '13/04/2023',
    tags: ['TikTok', 'Chính phủ Anh', 'Anh', 'An ninh'],
  },
  {
    id: '2',
    imgPath: '../public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    category: 'Công nghệ',
    date: '13/04/2023',
    tags: ['TikTok', 'Chính phủ Anh', 'Anh', 'An ninh'],
  },
  {
    id: '3',
    imgPath: '../public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    category: 'Công nghệ',
    date: '13/04/2023',
    tags: ['TikTok', 'Chính phủ Anh', 'Anh', 'An ninh'],
  },
  {
    id: '4',
    imgPath: '../public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    category: 'Công nghệ',
    date: '13/04/2023',
    tags: ['TikTok', 'Chính phủ Anh', 'Anh', 'An ninh'],
  },
  {
    id: '5',
    imgPath: '../public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    category: 'Công nghệ',
    date: '13/04/2023',
    tags: ['TikTok', 'Chính phủ Anh', 'Anh', 'An ninh'],
  },
  {
    id: '6',
    imgPath: '../public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    category: 'Công nghệ',
    date: '13/04/2023',
    tags: ['TikTok', 'Chính phủ Anh', 'Anh', 'An ninh'],
  },
  {
    id: '7',
    imgPath: '../public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    category: 'Công nghệ',
    date: '13/04/2023',
    tags: ['TikTok', 'Chính phủ Anh', 'Anh', 'An ninh'],
  },
  {
    id: '8',
    imgPath: '../public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    category: 'Công nghệ',
    date: '13/04/2023',
    tags: ['TikTok', 'Chính phủ Anh', 'Anh', 'An ninh'],
  },
  {
    id: '9',
    imgPath: '../public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    category: 'Công nghệ',
    date: '13/04/2023',
    tags: ['TikTok', 'Chính phủ Anh', 'Anh', 'An ninh'],
  },
];

const type_latest_data = [
  {
    id: '0',
    imgPath: '../public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    category: 'Giáo dục',
    date: '13/04/2023',
    tags: ['Chọn trường', 'Học phí', 'Đại học', 'Tuyển sinh'],
  },
  {
    id: '1',
    imgPath: '../public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    category: 'Giáo dục',
    date: '13/04/2023',
    tags: ['Chọn trường', 'Học phí', 'Đại học', 'Tuyển sinh'],
  },
  {
    id: '2',
    imgPath: '../public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    category: 'Giáo dục',
    date: '13/04/2023',
    tags: ['Chọn trường', 'Học phí', 'Đại học', 'Tuyển sinh'],
  },
  {
    id: '3',
    imgPath: '../public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    category: 'Giáo dục',
    date: '13/04/2023',
    tags: ['Chọn trường', 'Học phí', 'Đại học', 'Tuyển sinh'],
  },
  {
    id: '4',
    imgPath: '../public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    category: 'Giáo dục',
    date: '13/04/2023',
    tags: ['Chọn trường', 'Học phí', 'Đại học', 'Tuyển sinh'],
  },
  {
    id: '5',
    imgPath: '../public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    category: 'Giáo dục',
    date: '13/04/2023',
    tags: ['Chọn trường', 'Học phí', 'Đại học', 'Tuyển sinh'],
  },
  {
    id: '6',
    imgPath: '../public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    category: 'Giáo dục',
    date: '13/04/2023',
    tags: ['Chọn trường', 'Học phí', 'Đại học', 'Tuyển sinh'],
  },
  {
    id: '7',
    imgPath: '../public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    category: 'Giáo dục',
    date: '13/04/2023',
    tags: ['Chọn trường', 'Học phí', 'Đại học', 'Tuyển sinh'],
  },
  {
    id: '8',
    imgPath: '../public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    category: 'Giáo dục',
    date: '13/04/2023',
    tags: ['Chọn trường', 'Học phí', 'Đại học', 'Tuyển sinh'],
  },
  {
    id: '9',
    imgPath: '../public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    category: 'Giáo dục',
    date: '13/04/2023',
    tags: ['Chọn trường', 'Học phí', 'Đại học', 'Tuyển sinh'],
  },
];

const type_top10_data = [
  {
    id: '0',
    imgPath: '../public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    category: 'Thể thao',
    date: '13/04/2023',
    tags: ['World Cup', 'World Cup 2026', 'Bóng đá'],
  },
  {
    id: '1',
    imgPath: '../public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    category: 'Thể thao',
    date: '13/04/2023',
    tags: ['World Cup', 'World Cup 2026', 'Bóng đá'],
  },
  {
    id: '2',
    imgPath: '../public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    category: 'Thể thao',
    date: '13/04/2023',
    tags: ['World Cup', 'World Cup 2026', 'Bóng đá'],
  },
  {
    id: '3',
    imgPath: '../public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    category: 'Thể thao',
    date: '13/04/2023',
    tags: ['World Cup', 'World Cup 2026', 'Bóng đá'],
  },
  {
    id: '4',
    imgPath: '../public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    category: 'Thể thao',
    date: '13/04/2023',
    tags: ['World Cup', 'World Cup 2026', 'Bóng đá'],
  },
  {
    id: '5',
    imgPath: '../public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    category: 'Thể thao',
    date: '13/04/2023',
    tags: ['World Cup', 'World Cup 2026', 'Bóng đá'],
  },
  {
    id: '6',
    imgPath: '../public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    category: 'Thể thao',
    date: '13/04/2023',
    tags: ['World Cup', 'World Cup 2026', 'Bóng đá'],
  },
  {
    id: '7',
    imgPath: '../public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    category: 'Thể thao',
    date: '13/04/2023',
    tags: ['World Cup', 'World Cup 2026', 'Bóng đá'],
  },
  {
    id: '8',
    imgPath: '../public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    category: 'Thể thao',
    date: '13/04/2023',
    tags: ['World Cup', 'World Cup 2026', 'Bóng đá'],
  },
  {
    id: '9',
    imgPath: '../public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    category: 'Thể thao',
    date: '13/04/2023',
    tags: ['World Cup', 'World Cup 2026', 'Bóng đá'],
  },
];

export const loadHighlightDataOfType = (type) => {
  if (type == CONTEXT.LATEST) {
    return type_latest_data;
  } else if (type == CONTEXT.MOST_VIEWED) {
    return type_mostViewed_data;
  } else if (type == CONTEXT.TOP10) {
    return type_top10_data;
  } else if (type > CONTEXT.HOMEPAGE) {
    return type_latest_data;
  }

  return [];
};

export const loadWriterPaperDataOfType = (type) => {
  if (type === CONTEXT.PUBLISHED) {
    return type_mostViewed_data;
  } else if (type === CONTEXT.APPROVED) {
    return type_mostViewed_data;
  } else if (type === CONTEXT.WAITING) {
    return type_mostViewed_data;
  } else if (type === CONTEXT.REJECTED) {
    return type_mostViewed_data;
  }

  return [];
};

export const loadEditorPaperData = () => {
  return type_mostViewed_data;
};
