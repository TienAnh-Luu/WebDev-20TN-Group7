import { tagToAdminList } from '../../../utils/createHtmlElements.js';
import RoundButton from '../../RoundButton/RoundButton.js';

const tagArray = [
  { name: 'TikTok', postCount: 2 },
  { name: 'Chính phủ Anh', postCount: 6 },
  { name: 'Anh', postCount: 1 },
  { name: 'An ninh', postCount: 10 },
  { name: 'Chọn trường', postCount: 3 },
  { name: 'Học phí', postCount: 7 },
  { name: 'Đại học', postCount: 4 },
  { name: 'Tuyển sinh', postCount: 14 },
  { name: 'World Cup', postCount: 20 },
  { name: 'World Cup 2026', postCount: 17 },
  { name: 'Bóng đá', postCount: 14 },
];

const TagDashboard = `
        <div class="category-dashboard">
          <h3 class="admin-dashboard-headline">Quản lý nhãn</h3>
          <div class="admin-dashboard-container">
            <div class="admin-dashboard-headers">
              <h3 class="admin-dashboard-header">Nhãn</h3>
              <h3 class="admin-dashboard-header">Số bài viết</h3>
              <h3 class="admin-dashboard-header">Thao tác</h3>
            </div>
            ${tagToAdminList(tagArray).join('\n')}
          </div>
            
          ${RoundButton(
            'button',
            'strawberry-backgroundcolor admin-button',
            'add-tag-button',
            '<i class="fa-solid fa-plus"></i> Thêm nhãn',
          )};
        </div>
      `;

export default TagDashboard;
