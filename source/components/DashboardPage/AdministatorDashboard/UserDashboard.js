import { userToAdminList } from '../../../utils/createHtmlElements.js';
import RoundButton from '../../RoundButton/RoundButton.js';

const userArray = [
  { name: 'Doãn Phúc Tâm', role: 'Người dùng' },
  { name: 'Bùi Gia Hưng', role: 'Người dùng' },
  { name: 'Bùi Việt Tiến', role: 'Độc giả' },
  { name: 'Nguyễn Chí Thanh', role: 'Phóng viên' },
  { name: 'Đặng Việt Ngọc', role: 'Biên tập viên' },
  { name: 'Châu Hải Nam', role: 'Người dùng' },
  { name: 'Bành Duy Cương', role: 'Admin' },
  { name: 'Diệp Hòa Hợp', role: 'Phóng viên' },
  { name: 'Trang Minh Ðức', role: 'Biên tập viên' },
  { name: 'Đặng Tuấn Châu', role: 'Độc giả' },
];

const UserDashboard = `
        <div class="category-dashboard">
          <h3 class="admin-dashboard-headline">Quản lý bài viết</h3>
          <div class="admin-dashboard-container">
            <div class="admin-dashboard-headers">
              <h3 class="admin-dashboard-header">Người dùng</h3>
              <h3 class="admin-dashboard-header">Vai trò</h3>
              <h3 class="admin-dashboard-header">Thao tác</h3>
            </div>
            ${userToAdminList(userArray).join('\n')}
          </div>

          ${RoundButton(
            'button',
            'strawberry-backgroundcolor admin-button',
            'add-user-button',
            '<i class="fa-solid fa-plus"></i> Thêm người dùng',
          )};
        </div>
      `;

export default UserDashboard;
