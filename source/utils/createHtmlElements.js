import NewsItem from '../components/NewsItem/NewsItem.js';
import NavItem from '../components/DashboardPage/Navbar/NavItem.js';
import PaperItem from '../components/DashboardPage/PaperDashboard/PaperItem.js';
import CommentAreaItem from '../components/NewsDetailPage/CommentArea/CommentAreaItem/CommentAreaItem.js';
import SuggestionItem from '../components/NewsDetailPage/Suggestion/SuggestionItem/SuggestionItem.js';

export const dataToNewsItemList = (data, context) => data.map((d) => NewsItem(d, context));

export const dataToNavItemList = (data) => data.map((d) => NavItem(d));

export const dataToPaperItemList = (data, context) => data.map((d) => PaperItem(d, context));

export const dataToCommentAreaItemList = (data) => data.map((d) => CommentAreaItem(d));

export const dataToSuggestionItemList = (data) => data.map((d) => SuggestionItem(d));

export const dataToDescriptionList = (data) =>
  data.map((d) => {
    if (d.type === 'text') {
      return `<p class="desc-text">${d.value}</p>`;
    } else if (d.type === 'image') {
      return `
    <div class="desc-image-container">
      <img class="desc-image" src=${d.value.source} alt="Illustration" />
      <p class="desc-image-caption">${d.value.caption}</p>
    </div>`;
    }

    return '';
  });

export const dataToTagList = (tags, cate) =>
  tags.map(
    (tag) => `<a href="#" class="detail-tag" data-cate=${cate}>${tag}</a>${tag === tags[tags.length - 1] ? '' : ','}`,
  );

export const categoryToAdminList = (categories) =>
  categories.map((category) => {
    return `
    <div class="admin-dashboard-item">
    <div class="admin-dashboard-item-context">${category.label}</div>
    <div class="admin-dashboard-item-context">${category.postCount}</div>
        <div class="admin-dashboard-item-action">
            <div class="news-footer-icon-container admin-edit-icon">
                <i class="fa-solid fa-pen-to-square news-footer-icon"></i>
                <div class="tooltip news-footer-icon-tooltip">Edit</div>
            </div>
    
            <div class="news-footer-icon-container admin-delete-icon">
                <i class="fa-solid fa-trash-can news-footer-icon"></i>
                <div class="tooltip news-footer-icon-tooltip">Delete</div>
            </div>
        </div>
    </div>
`;
  });

export const tagToAdminList = (tags) =>
  tags.map((tag) => {
    return `
    <div class="admin-dashboard-item">
        <div class="admin-dashboard-item-context">${tag.name}</div>
        <div class="admin-dashboard-item-context">${tag.postCount}</div>
        <div class="admin-dashboard-item-action">
            <div class="news-footer-icon-container admin-edit-icon">
                <i class="fa-solid fa-pen-to-square news-footer-icon"></i>
                <div class="tooltip news-footer-icon-tooltip">Edit</div>
            </div>
    
            <div class="news-footer-icon-container admin-delete-icon">
                <i class="fa-solid fa-trash-can news-footer-icon"></i>
                <div class="tooltip news-footer-icon-tooltip">Delete</div>
            </div>
        </div>
    </div>
`;
  });

export const postToAdminList = (posts) =>
  posts.map((post) => {
    return `
    <div class="admin-dashboard-item">
        <div class="admin-dashboard-item-context">
            <div class="news-thumbnail-container zoom-hover">
                <img class="news-thumbnail" src=${post.imgPath} alt="Thumbnail" />
            </div>
            <div class="news-info">
                <h3 class="news-title">${post.title}</h3>
                <p class="news-summary">
                    ${post.summary}
                </p>
            </div>
        </div>

        <div class="admin-dashboard-item-context">
            ${post.status}
        </div>

        <div class="admin-dashboard-item-action">
            <div class="news-footer-icon-container admin-preview-icon">
                <i class="fa-solid fa-magnifying-glass-arrow-right news-footer-icon"></i>
                <div class="tooltip news-footer-icon-tooltip">Preview</div>
            </div>
    
            <div class="news-footer-icon-container admin-feedback-icon">
                <i class="fa-solid fa-comments news-footer-icon"></i>
                <div class="tooltip news-footer-icon-tooltip">Feedback</div>
            </div>

            <div class="news-footer-icon-container admin-to-premium-icon">
                <i class="fa-solid fa-gem news-footer-icon"></i>
                <div class="tooltip news-footer-icon-tooltip">Premium</div>
            </div>

            ${
              post.status === 'Bản nháp' || post.status === 'Chờ duyệt'
                ? `
            <div class="news-footer-icon-container admin-approve-icon">
                <i class="fa-solid fa-check news-footer-icon"></i>
                <div class="tooltip news-footer-icon-tooltip">Approve</div>
            </div>

            <div class="news-footer-icon-container admin-reject-icon">
                <i class="fa-solid fa-xmark news-footer-icon"></i>
                <div class="tooltip news-footer-icon-tooltip">Reject</div>
            </div>`
                : ''
            }
        </div>
    </div>
`;
  });

export const userToAdminList = (users) =>
  users.map((user) => {
    return `
    <div class="admin-dashboard-item">
        <div class="admin-dashboard-item-context">${user.name}</div>
        <div class="admin-dashboard-item-context">${user.role}</div>
        <div class="admin-dashboard-item-action">
            ${
              user.role === 'Biên tập viên'
                ? `
                    <div class="news-footer-icon-container news-feedback-icon" id="change-category">
                        <i class="fa-solid fa-gear news-footer-icon"></i>
                        <div class="tooltip news-footer-icon-tooltip">Change Catetory</div>
                    </div>`
                : ''
            }

            ${
              user.role === 'Người dùng' || user.role === 'Độc giả'
                ? `
                    <div class="news-footer-icon-container news-feedback-icon" id="extend-premium">
                        <i class="fa-solid fa-gem news-footer-icon"></i>
                        <div class="tooltip news-footer-icon-tooltip">Extend Premium</div>
                    </div>`
                : ''
            }
        </div>
    </div>
`;
  });

export function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}
