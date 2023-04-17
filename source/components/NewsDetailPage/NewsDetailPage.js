import Header from '../../../source/components/Header/Header.js';
import Footer from '../../../source/components/Footer/Footer.js';
import NewsDetail from '../../../source/components/NewsDetailPage/NewsDetail/NewsDetail.js';
import { handleSticky } from '../../../source/utils/handleSticky.js';
import { handleNavigateToNewslistPage } from '../../utils/addOnclick.js';

const sampleData = {
  id: '',
  thumbnail: '../../../../source/public/images/messi.png',
  cate: 'Thể thao', // should be id
  date: '13/04/2023',
  title: 'World Cup 2026 sẽ đá 104 trận',
  writer: 'Trương Anh Ngọc', // should be id
  tags: ['Thể thao', 'Bóng đá', 'World Cup', 'World Cup 2026'],
  descriptions: [
    {
      type: 'text',
      value:
        'FIFA sắp phê duyệt thể thức mới cho World Cup 2026, tăng số trận từ 64 lên 104, thay vì 80 như kế hoạch ban đầu, và thi đấu trong 39 ngày.',
    },
    {
      type: 'text',
      value:
        'Theo The Athletic, quyết định này sẽ được phê duyệt tại cuộc họp của Hội đồng FIFA vào cuối ngày 14/3 tại thủ đô Kigali của Rwanda - nơi các quan chức đã có mặt để chuẩn bị cho đại hội thường niên diễn ra vào thứ Năm.',
    },
    {
      type: 'text',
      value:
        'Được tổ chức tại Canada, Mexico và Mỹ, World Cup 2026 là giải đấu lớn nhất với 48 đội, diễn ra lâu nhất, trong 39 ngày.',
    },
    {
      type: 'image',
      value: {
        source: '../../../../source/public/images/messi.png',
        caption:
          'Messi (áo choàng đen) và các tuyển thủ Argentina nâng cup trong lễ đăng quang World Cup 2022 - kỳ giải cuối cùng với 32 đội. Ảnh: Reuters',
      },
    },
    {
      type: 'text',
      value:
        'Theo kế hoạch ban đầu, giải đấu sẽ chia 16 bảng có ba đội, trong đó hai đội dẫn đầu sẽ đi tiếp. Phiên bản này sẽ có 80 trận, tăng 16 trận so với thể thức 64 trận mà FIFA áp dụng từ năm 1998. Nhưng theo The Athletic, thể thức này có nhược điểm là không còn sự hấp dẫn của lượt cuối diễn ra cùng giờ, khi bảng đấu chỉ còn ba so với bốn đội như các kỳ World Cup trước. Tại World Cup 2022, Hwang Hee-chan ghi bàn ở phút bù giờ đầu tiên, giúp Hàn Quốc thắng ngược Bồ Đào Nha 2-1 để vào vòng 1/8. Ở trận đấu cùng bảng kết thúc trước ít phút, Uruguay thắng Ghana 2-0, nhưng vẫn bị loại vì chỉ số phụ.',
    },
    {
      type: 'text',
      value:
        'Ngoài ra, việc bảng đấu có ba đội làm tăng khả năng hai đội đối đầu trực tiếp ở lượt cuối "thông đồng" với nhau để tạo ra kết quả có lợi cho họ. Điều này từng diễn ra tại World Cup 1982 ở Tây Ban Nha, khi Tây Đức thắng Áo 1-0 ở lượt cuối để cùng đi tiếp, và khiến Algeria bị loại.',
    },
    {
      type: 'text',
      value:
        'Vì thế, <b>FIFA quyết định chọn thể thức 12 bảng, mỗi bảng gồm bốn đội</b>. Hai đội đầu bảng cùng 8 đội đứng thứ ba có thành tích tốt nhất sẽ vào vòng 1/16. Như vậy, hai đội vào chung kết sẽ phải đá tám trận, thay vì bảy trận như hai đội vào chung kết World Cup 2022 là Argentina và Pháp. Tổng số trận của cả giải sẽ là 104 trận.',
    },
    {
      type: 'text',
      value:
        'Dù FIFA chưa công bố ngày khai mạc, tổng số ngày tổ chức World Cup 2026 sẽ là 56, gồm 16 ngày trước khi khởi tranh và 39 ngày thi đấu, giống các kỳ World Cup vào năm 2010, 2014 và 2018. Theo Sky Sports, chung kết World Cup 2026 dự kiến diễn ra tại Mỹ vào ngày 19/7/2026.',
    },
    {
      type: 'text',
      value:
        'Sự thay đổi thể thức này kéo theo việc sắp xếp lại việc tổ chức các trận đấu giữa các nước chủ nhà. Trước đó, theo thể thức ban đầu, Mỹ đăng cai 60 trận, còn Canada và Mexico mỗi nước đăng cai 10 trận.',
    },
    {
      type: 'text',
      value:
        'Theo Sky Sports, việc tăng số trận giúp FIFA theo đuổi mục tiêu đoạt doanh thu 11 tỷ USD (hơn 9 tỷ bảng), đồng thời giải quyết các vấn đề về thể thức thi đấu cho giải đấu do ba nước đồng đăng cai.',
    },
    {
      type: 'text',
      value:
        'Đầu năm 2017, FIFA thông qua quyết định nâng suất dự World Cup 2026 từ 32 lên 48 đội. Quyết định này giúp tất cả liên đoàn thành viên của FIFA hưởng lợi khi có thêm suất tham dự World Cup. Cụ thể, châu Âu vẫn có nhiều suất nhất, khi tăng từ 13 lên 16 đội. Châu Phi tăng bốn suất để nâng lên thành chín, hai khu vực Bắc, Trung Mỹ và Caribe và Nam Mỹ cùng có sáu suất. Châu Đại dương sẽ có một suất chính thức thay vì dự play-off như hiện nay, còn châu Á có thêm bốn để thành tám suất chính thức.',
    },
    {
      type: 'text',
      value:
        'World Cup 2026 cũng là vòng chung kết bóng đá thế giới đầu tiên được đăng cai bởi ba nước. Trước đó, vào năm 2002, Nhật Bản và Hàn Quốc là liên minh hai nước đầu tiên tổ chức giải đấu lớn nhất hành tinh. Mexico, nhờ đó, thành quốc gia đầu tiên ba lần đăng cai World Cup, sau năm 1970 và 1986. Mỹ có lần thứ hai đăng cai World Cup sau năm 1994, còn World Cup 2026 là lần đầu tiên Canada có vinh dự này.',
    },
  ],
};

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  handleSticky();
};

const root = document.getElementById('root');
root.innerHTML = `
    <div class="news-detail-page">
        ${Header}
        <div class="news-detail-main mb340">
            ${NewsDetail(sampleData)}
        </div>
        ${Footer}
    </div>
`;

const detailCate = document.getElementById('detail-cate');
detailCate.addEventListener('click', () => {
  sessionStorage('navigator', 29);
});

handleNavigateToNewslistPage('suggestions-item-cate', 20);
