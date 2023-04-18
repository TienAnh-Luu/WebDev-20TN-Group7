const editorApproveForm = `
<div class="approve-form-container">
    <div class="cate-options-container">
        <label class="cate-options-label" for="cate-options">Chuyên mục:</label>
        <select name="cate-options" id="cate-options" class="cate-options">
            <option class="cate-option" value="8">Thời sự</option>
            <option class="cate-option" value="11">Xã hội</option>
            <option class="cate-option" value="14">Pháp luật</option>
            <option class="cate-option" value="17">Giáo dục</option>
            <option class="cate-option" value="20">Kinh doanh</option>
            <option class="cate-option" value="23">Sức khỏe</option>
            <option class="cate-option" value="26">Văn hóa</option>
            <option class="cate-option" value="29">Thể thao</option>
            <option class="cate-option" value="32">Công nghệ</option>
            <option class="cate-option" value="35">Du lịch</option>
        </select>
    </div>
    <div class="date-container">
        <label class="date-label" for="date-input">Ngày xuất bản:</label>
        <input class="date-input" type="date" name="date-input" id="date-input" />
    </div>
    <div class="tags-container">
        <label class="tags-label" for="tags-input">Gán nhãn:</label>
        <input class="tags-input" type=""text name="tags-input" id="tags-input" />
        <button type="button" id="tags-btn" class="tags-btn">
            <i class="fa-solid fa-plus tags-btn-icon"></i>
            <span class="tags-btn-text">Thêm</span>
        </button>
    </div>
    <ul class="tags-list" id="tags-list">
        Nhãn đã thêm:
        <li class="tags-item">Bóng đá <i class="fa-solid fa-trash-can tags-item-delete-icon"></i></li>
        <li class="tags-item">World cup <i class="fa-solid fa-trash-can tags-item-delete-icon"></i></li>
        <li class="tags-item">World cup 2026 <i class="fa-solid fa-trash-can tags-item-delete-icon"></i></li>
    </ul>
</div>`;

const editorRejectForm = `
<div class="reason-input-container">
    <label class="reason-label" for="reason-input">Lý do từ chối:</label>
    <textarea id="reason-input" class="reason-input" name="reason-input" rows="5" cols="50"></textarea>
</div>`;

const PopupForm = (modalId, data = []) => `
<div class="modal" id="${modalId}-modal">
    <div class="modal-content">
        <div class="modal-form-container">
            <a class="modal-close-btn" id="popup-${modalId}-close">&times;</a>
            <form class="modal-form" action="/">
                <h2 class="modal-title">${
                  modalId === 'password'
                    ? 'Đổi mật khẩu'
                    : modalId === 'account' || modalId === 'writer'
                    ? 'Chỉnh sửa thông tin'
                    : modalId === 'editor-approve'
                    ? 'Hiệu chỉnh bài viết'
                    : modalId === 'editor-reject'
                    ? 'Từ chối bài viết'
                    : ''
                }</h2>
                ${
                  modalId === 'editor-approve'
                    ? `${editorApproveForm}`
                    : modalId === 'editor-reject'
                    ? `${editorRejectForm}`
                    : `
                    <div>
                        ${data
                          .map(
                            (d) =>
                              `<input class="modal-form-input" type="text" name=${d.id} id=${d.id} placeholder=${d.label} />`,
                          )
                          .join('\n')}
                    </div>`
                }

                <button class="modal-form-submit-btn" type="submit" href="/">Submit</button>
            </form>
        </div>
    </div>
</div>
`;

export default PopupForm;
