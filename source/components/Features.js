import Carousel from '../components/Carousel.js';
import { dataToNewsItemList } from '../utils/dataToElementList.js';

const news_data = [
  {
    id: '0',
    imgPath: './public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    tag: 'Thể thao',
  },
  {
    id: '1',
    imgPath: './public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    tag: 'Thể thao',
  },
  {
    id: '2',
    imgPath: './public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    tag: 'Thể thao',
  },
  {
    id: '3',
    imgPath: './public/images/news-oil.png',
    url: '#',
    title: 'Giá xăng dầu tăng, RON95 lên 23.810 đồng/lít',
    summary:
      'Cụ thể, giá xăng RON 95-III tăng 490 đồng/lít, lên mức 23.810 đồng/lít; xăng E5 RON92 tăng thêm 380 đồng/lít, lên mức 22.800 đồng/lít.',
    tag: 'Kinh doanh',
  },
  {
    id: '4',
    imgPath: './public/images/news-oil.png',
    url: '#',
    title: 'Giá xăng dầu tăng, RON95 lên 23.810 đồng/lít',
    summary:
      'Cụ thể, giá xăng RON 95-III tăng 490 đồng/lít, lên mức 23.810 đồng/lít; xăng E5 RON92 tăng thêm 380 đồng/lít, lên mức 22.800 đồng/lít.',
    tag: 'Kinh doanh',
  },
  {
    id: '5',
    imgPath: './public/images/news-oil.png',
    url: '#',
    title: 'Giá xăng dầu tăng, RON95 lên 23.810 đồng/lít',
    summary:
      'Cụ thể, giá xăng RON 95-III tăng 490 đồng/lít, lên mức 23.810 đồng/lít; xăng E5 RON92 tăng thêm 380 đồng/lít, lên mức 22.800 đồng/lít.',
    tag: 'Kinh doanh',
  },
];

const Features = `
<div class="main__features grid-container" id="features">
    ${Carousel(news_data.slice(0, 3))}
    ${dataToNewsItemList(news_data.slice(3)).join('\n')}
</div>
`;

export default Features;
