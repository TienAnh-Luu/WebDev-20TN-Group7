const WriterEditor = `
    <form id="articleForm" method="post" action="#">
        <div class="titleInput">
            <label for="title">Tiêu đề:</label>
            <input type="text" id="title" name="title" />
        </div>

        <div class="avatarInput">
            <label for="avatar">Ảnh đại diện:</label>
            <input type="text" id="avatar" name="avatar" />
        </div>

        <div class="summaryInput">
            <label for="summary">Tóm tắt:</label>
            <input type="text" id="summary" name="summary" />
        </div>

        <div class="mainEditor">
            <label for="editor">Nội dung:</label>
            <div id="editor" name="editor"></div>
        </div>

        <button type="button" id="previewNews">Xem trước</button>
        <button type="button" id="submitNews">Gửi bài</button>
    </form>
    <div id="testEditor"></div>
`;

export default WriterEditor;
