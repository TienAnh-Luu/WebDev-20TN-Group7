import { tagToAdminList } from '../../../utils/createHtmlElements.js';
import RoundButton from '../../RoundButton/RoundButton.js';

const tagArray = [
  'TikTok',
  'Chính phủ Anh',
  'Anh',
  'An ninh',
  'Chọn trường',
  'Học phí',
  'Đại học',
  'Tuyển sinh',
  'World Cup',
  'World Cup 2026',
  'Bóng đá',
];

const TagDashboard = `
        <div class="category-dashboard">
          <h3 class="admin-dashboard-headline">Quản lý nhãn</h3>
          <div class="admin-dashboard-container">
            <div class="admin-dashboard-headers">
              <h3 class="admin-dashboard-header">Nhãn</h3>
              <h3 class="admin-dashboard-header">Thao tác</h3>
            </div>
            ${tagToAdminList(tagArray).join('\n')}
          </div>
            
          ${RoundButton(
            'button',
            'strawberry-backgroundcolor admin-button',
            'add-category-button',
            '<i class="fa-solid fa-plus"></i> Thêm nhãn',
          )};
          
        </div>
      `;

export default TagDashboard;
