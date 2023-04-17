const CommentAreaItem = (data) => `
<div class="comments-item">
    <img src=${data.avtPath} alt="avatar" class="comments-item-img" />
    <div class="comments-item-right-section">
        <div class="comments-item-name-container">
            <div class="comments-item-name">${data.name}</div>
            ${data.isSubscriber ? `<i class="fa-solid fa-gem comments-item-premium-icon"></i>` : ''}
        </div>
        <p class="comments-item-timestamp">${data.date}</p>
        <p class="comments-item-text">${data.text}</p>
    </div>
</div>
`;

export default CommentAreaItem;
