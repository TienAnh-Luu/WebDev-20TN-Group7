import Carousel from './Carousel/Carousel.js';
import { dataToNewsItemList } from '../../utils/createHtmlElements.js';
import { CONTEXT } from '../../utils/constants.js';

const news_data = [
  {
    id: '0',
    imgPath: './public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    category: 'Thể thao',
    date: '13/04/2023',
    tags: [],
  },
  {
    id: '1',
    imgPath: './public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    category: 'Thể thao',
    date: '13/04/2023',
    tags: [],
  },
  {
    id: '2',
    imgPath: './public/images/messi.png',
    url: '#',
    title: 'World Cup 2026 sẽ đá 104 trận',
    summary:
      'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    category: 'Thể thao',
    date: '13/04/2023',
    tags: [],
  },
  {
    id: '3',
    imgPath: './public/images/news-oil.png',
    url: '#',
    title: 'Giá xăng dầu tăng, RON95 lên 23.810 đồng/lít',
    summary:
      'Cụ thể, giá xăng RON 95-III tăng 490 đồng/lít, lên mức 23.810 đồng/lít; xăng E5 RON92 tăng thêm 380 đồng/lít, lên mức 22.800 đồng/lít.',
    category: 'Kinh doanh',
    date: '13/04/2023',
    tags: [],
  },
  {
    id: '4',
    imgPath: './public/images/news-oil.png',
    url: '#',
    title: 'Giá xăng dầu tăng, RON95 lên 23.810 đồng/lít',
    summary:
      'Cụ thể, giá xăng RON 95-III tăng 490 đồng/lít, lên mức 23.810 đồng/lít; xăng E5 RON92 tăng thêm 380 đồng/lít, lên mức 22.800 đồng/lít.',
    category: 'Kinh doanh',
    date: '13/04/2023',
    tags: [],
  },
  {
    id: '5',
    imgPath: './public/images/news-oil.png',
    url: '#',
    title: 'Giá xăng dầu tăng, RON95 lên 23.810 đồng/lít',
    summary:
      'Cụ thể, giá xăng RON 95-III tăng 490 đồng/lít, lên mức 23.810 đồng/lít; xăng E5 RON92 tăng thêm 380 đồng/lít, lên mức 22.800 đồng/lít.',
    category: 'Kinh doanh',
    date: '13/04/2023',
    tags: [],
  },
];

const Features = `
<div class="main__features grid-container" id="features">
    ${Carousel(news_data.slice(0, 3))}
    ${dataToNewsItemList(news_data.slice(3), CONTEXT.HOMEPAGE).join('\n')}
</div>
`;

export default Features;
