import { CATEGORY } from '../../../utils/constants.js';
import { categoryToAdminList } from '../../../utils/createHtmlElements.js';
import RoundButton from '../../RoundButton/RoundButton.js';

const categoryArray = Object.values(CATEGORY).map((obj) => obj);
const postCount = [12, 3, 9, 1, 4, 6, 7, 15, 9, 3];

const updatedPostArray = categoryArray.map((element, index) => {
  return { ...element, postCount: postCount[index] || null };
});

const CategoryDashboard = `
        <div class="category-dashboard">
          <h3 class="admin-dashboard-headline">Quản lý chuyên mục</h3>
          <div class="admin-dashboard-container">
            <div class="admin-dashboard-headers">
              <h3 class="admin-dashboard-header">Chuyên mục</h3>
              <h3 class="admin-dashboard-header">Số bài viết</h3>
              <h3 class="admin-dashboard-header">Thao tác</h3>
            </div>
            ${categoryToAdminList(updatedPostArray).join('\n')}
          </div>
            
          ${RoundButton(
            'button',
            'strawberry-backgroundcolor admin-button',
            'add-category-button',
            '<i class="fa-solid fa-plus"></i> Thêm chuyên mục',
          )};
        </div>
      `;

export default CategoryDashboard;
