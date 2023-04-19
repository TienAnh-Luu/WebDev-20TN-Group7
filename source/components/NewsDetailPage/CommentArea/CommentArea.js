import { UnLinkedHeadline } from '../../../../source/components/Highlight/Headline/Headline.js';
import CommentAreaForm from '../../../../source/components/NewsDetailPage/CommentArea/CommentAreaForm/CommentAreaForm.js';
import { dataToCommentAreaItemList } from '../../../../source/utils/createHtmlElements.js';

const sampleData = [
  {
    avtPath: '../../../../source/public/images/block.jpg',
    name: 'Lân',
    isSubscriber: true,
    date: '1 ngày trước',
    text: 'Rất nhiều bạn cứ nhai đi nhai lại cái câu là "Tin chuẩn chưa anh?", muốn biết "Tin chuẩn chưa anh?" thì hãy so sánh, hãy đọc các nguồn tin khác, hãy đọc báo. Nếu đọc được một tin mà vẫn còn cảm thấy rằng là "À, chưa tin nổi" thì mình phải đi tìm kiếm các chỗ khác thay vì hỏi một câu cứ nhai đi nhai lại như một con bò là "Tin chuẩn chưa anh" rồi là vào cười haha xong rồi vào viết linh ta linh tinh ở trên đấy. Thì thay vì như thế các bạn hãy làm một việc này cho mình, hãy đi tìm xem, đọc trên các báo khác, hãy tìm đọc trên các fanpage khác, hãy biết tiếng Anh để hiểu các nguồn tin của nước ngoài thay vì cứ đi hỏi "Tin chuẩn chưa anh?", tất cả những ai vào hỏi: "Tin chuẩn chưa anh", mình đều một là xóa, hai là block hết. Mình không thích chuyện này, nếu không tin bất cứ một vấn đề gì, thậm chí nếu không tin mình, các bạn có thể bỏ follow mình, không theo dõi fanpage của mình nhưng đừng bao giờ hỏi một câu là "Tin chuẩn chưa anh?", không hay ho một chút nào cả, các bạn nhá! Một là block, hai là xóa, không có chuyện cứ nhai đi nhai lại cái một câu là "Tin chuẩn chưa anh?".',
  },
  {
    avtPath: '../../../../source/public/images/salamanca.jpg',
    name: 'Anh em cây khế',
    isSubscriber: false,
    date: '1 ngày trước',
    text: 'Bạn Chỉnh ơi, bạn đang comment một câu mà anh Ngọc không thích một chút nào nhé.',
  },
  {
    avtPath: '../../../../source/public/images/anh_ngoc.jpg',
    name: 'Bạn Chỉnh giấu tên',
    isSubscriber: true,
    date: '2 ngày trước',
    text: 'Tin chuẩn chưa anh?',
  },
];

const CommentArea = () => `
<div class="comments-container">
    ${UnLinkedHeadline('Bình luận')}
    ${CommentAreaForm}
    <div class="comments-list">
        ${dataToCommentAreaItemList(sampleData).join('\n')}
        <div class="comments-see-more-btn">Xem thêm</div>
    </div>
</div>`;

export default CommentArea;
