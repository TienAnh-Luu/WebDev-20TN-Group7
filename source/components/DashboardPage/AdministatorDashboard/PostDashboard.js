import { loadEditorPaperData } from '../../../utils/loadData.js';
import { postToAdminList } from '../../../utils/createHtmlElements.js';

const postArray = loadEditorPaperData();
const postStatus = [
  'Đã duyệt',
  'Đã xuất bản',
  'Chờ duyệt',
  'Chờ duyệt',
  'Bị từ chối',
  'Bản nháp',
  'Chờ duyệt',
  'Đã xuất bản',
  'Đã duyệt',
  'Đã duyệt',
];

const updatedPostArray = postArray.map((element, index) => {
  return { ...element, status: postStatus[index] || null };
});

const PostDashboard = `
        <div class="category-dashboard">
          <h3 class="admin-dashboard-headline">Quản lý bài viết</h3>
          <div class="admin-dashboard-container">
            <div class="admin-dashboard-headers">
              <h3 class="admin-dashboard-header">Bài viết</h3>
              <h3 class="admin-dashboard-header">Trạng thái</h3>
              <h3 class="admin-dashboard-header">Thao tác</h3>
            </div>
            ${postToAdminList(updatedPostArray).join('\n')}
          </div>
        </div>
      `;

export default PostDashboard;
