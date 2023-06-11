import { dataToNewsItemList } from '../../../utils/createHtmlElements.js';

const EditorApprovalDashboard = (data) => {
  return `<div class="editor-dashboard-container">
        <h1 class="editor-headline">BÀI VIẾT CHỜ DUYỆT</h1>
        <div class="editor-news-list">
            ${dataToNewsItemList(data, 'editor').join('\n')}
        </div>
        <div id="popup"></div>
    </div>
`;
};

export default EditorApprovalDashboard;
