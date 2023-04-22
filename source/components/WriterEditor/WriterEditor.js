import RoundButton from '../../../../../source/components/RoundButton/RoundButton.js';

const WriterEditor = `
    <div class="writer-editor">
        <div class="titleInput">
            <label class="input-label" for="title">Tiêu đề:</label>
            <textarea rows="2" id="title" name="title" style="width: 100%"></textarea>
        </div>

        <div class="grid-container">
            <div class="avatarInput">
                <div>Ảnh đại diện:</div>
                <div id="avatarBox" class="image-box">
                    <i class="fa-solid fa-plus fa-5x" style="color: #000000"></i>
                </div>
            </div>

            <div class="categoryInput">
                <label for="category">Chuyên mục:</label>
                <input type="text" id="category" name="category" />
            </div>
            
            <div class="tagInput">
                <label for="tag">Nhãn:</label>
                <input type="text" id="tag" name="tag" />
            </div>

            ${RoundButton(
              'button',
              'strawberry-backgroundcolor writer-editor-button previewButton',
              'previewButton',
              'Xem trước',
            )}

            ${RoundButton(
              'button',
              'strawberry-backgroundcolor writer-editor-button submitButton',
              'submitButton',
              'Gửi bài',
            )}
        </div>

        <div class="summaryInput">
            <label for="summary">Tóm tắt:</label>
            <textarea rows="4" id="summary" name="summary" style="width: 100%"></textarea>
        </div>

        <div class="main-editor">
            <label class="input-label" for="mainEditor">Nội dung:</label>
            <div id="mainEditor" name="mainEditor"></div>
        </div>
    </div>
    <div id="testEditor"></div>
`;

export default WriterEditor;
