import { HIGHLIGHT_TYPE } from './constants.js';

// This is just a fixed data sample to show how to load data
// for the Highlight component. In fact, data should be loaded
// from database
const type_mostViewed_data = [
  {
    id: '0',
    imgPath: './public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    tag: 'Công nghệ',
    date: '13/04/2023',
  },
  {
    id: '1',
    imgPath: './public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    tag: 'Công nghệ',
    date: '13/04/2023',
  },
  {
    id: '2',
    imgPath: './public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    tag: 'Công nghệ',
    date: '13/04/2023',
  },
  {
    id: '3',
    imgPath: './public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    tag: 'Công nghệ',
    date: '13/04/2023',
  },
  {
    id: '4',
    imgPath: './public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    tag: 'Công nghệ',
    date: '13/04/2023',
  },
  {
    id: '5',
    imgPath: './public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    tag: 'Công nghệ',
    date: '13/04/2023',
  },
  {
    id: '6',
    imgPath: './public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    tag: 'Công nghệ',
    date: '13/04/2023',
  },
  {
    id: '7',
    imgPath: './public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    tag: 'Công nghệ',
    date: '13/04/2023',
  },
  {
    id: '8',
    imgPath: './public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    tag: 'Công nghệ',
    date: '13/04/2023',
  },
  {
    id: '9',
    imgPath: './public/images/prime-minister.png',
    url: '#',
    title: 'Đến lượt Anh muốn cấm TikTok',
    summary:
      'Bộ trưởng An ninh Anh Tom Tugendhat ngày 14-3 cho biết đã giao Trung tâm an ninh mạng quốc gia nước này xem xét việc có nên cấm TikTok trên các thiết bị thuộc sở hữu cơ quan nhà nước và Chính phủ Anh hay không.',
    tag: 'Công nghệ',
    date: '13/04/2023',
  },
];

const type_latest_data = [
  {
    id: '0',
    imgPath: './public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    tag: 'Giáo dục',
    date: '13/04/2023',
  },
  {
    id: '1',
    imgPath: './public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    tag: 'Giáo dục',
    date: '13/04/2023',
  },
  {
    id: '2',
    imgPath: './public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    tag: 'Giáo dục',
    date: '13/04/2023',
  },
  {
    id: '3',
    imgPath: './public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    tag: 'Giáo dục',
    date: '13/04/2023',
  },
  {
    id: '4',
    imgPath: './public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    tag: 'Giáo dục',
    date: '13/04/2023',
  },
  {
    id: '5',
    imgPath: './public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    tag: 'Giáo dục',
    date: '13/04/2023',
  },
  {
    id: '6',
    imgPath: './public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    tag: 'Giáo dục',
    date: '13/04/2023',
  },
  {
    id: '7',
    imgPath: './public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    tag: 'Giáo dục',
    date: '13/04/2023',
  },
  {
    id: '8',
    imgPath: './public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    tag: 'Giáo dục',
    date: '13/04/2023',
  },
  {
    id: '9',
    imgPath: './public/images/teaching.png',
    url: '#',
    title: 'Chọn trường như thế nào thời bão giá leo thang?',
    summary:
      'Đắn đo chọn trường vì học phí cũng là mối quan tâm của nhiều thí sinh, phụ huynh trong mùa tuyển sinh đại học bên cạnh lựa chọn ngành học theo sở thích nghề nghiệp.',
    tag: 'Giáo dục',
    date: '13/04/2023',
  },
];

const type_top10_data = [
  {
    id: '0',
    imgPath: './public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    tag: 'Thể thao',
    date: '13/04/2023',
  },
  {
    id: '1',
    imgPath: './public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    tag: 'Thể thao',
    date: '13/04/2023',
  },
  {
    id: '2',
    imgPath: './public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    tag: 'Thể thao',
    date: '13/04/2023',
  },
  {
    id: '3',
    imgPath: './public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    tag: 'Thể thao',
    date: '13/04/2023',
  },
  {
    id: '4',
    imgPath: './public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    tag: 'Thể thao',
    date: '13/04/2023',
  },
  {
    id: '5',
    imgPath: './public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    tag: 'Thể thao',
    date: '13/04/2023',
  },
  {
    id: '6',
    imgPath: './public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    tag: 'Thể thao',
    date: '13/04/2023',
  },
  {
    id: '7',
    imgPath: './public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    tag: 'Thể thao',
    date: '13/04/2023',
  },
  {
    id: '8',
    imgPath: './public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    tag: 'Thể thao',
    date: '13/04/2023',
  },
  {
    id: '9',
    imgPath: './public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    tag: 'Thể thao',
    date: '13/04/2023',
  },
];

export const loadHighlightDataOfType = (type) => {
  if (type == HIGHLIGHT_TYPE.LATEST) {
    return { data: type_latest_data, highlightURL: '#' };
  } else if (type == HIGHLIGHT_TYPE.MOST_VIEWED) {
    return { data: type_mostViewed_data, highlightURL: '#' };
  } else if (type == HIGHLIGHT_TYPE.TOP10) {
    return { data: type_top10_data, highlightURL: '#' };
  }

  return { data: [], highlightURL: '' };
};
