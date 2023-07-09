import RoundButton from '../../../../components/RoundButton/RoundButton.js';

const CommentAreaForm = `
<div class="comments-input-form">
    <div class="comments-input-top-section">
        <input type="text" class="comments-input-name" id="comments-input-name" placeholder="Họ tên" />
        ${RoundButton('button', 'strawberry-backgroundcolor', 'comments-btn', 'Đăng')}
    </div>
    <textarea id="comments-input" class="comments-input" placeholder="Bình luận..."></textarea>
</div>
`;

export default CommentAreaForm;
