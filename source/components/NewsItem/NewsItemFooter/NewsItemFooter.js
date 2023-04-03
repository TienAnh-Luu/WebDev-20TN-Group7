// context=0: homepage => only render date icon in footer
// context=1: published and approved section in DashboardPage => render preview and feedback icon
// context=2: waiting section in DashboardPage => render preview, edit and delete icon
// context=3: rejected section in DashboardPage => render preview, edit, delete and feedback icon
const NewsItemFooter = (context, date = '') => `
    <div class="news-footer">
        ${
          context === 0
            ? `<div class="news-footer-icon-container" id="date">
                <i class="fa-solid fa-clock news-footer-icon"></i>
                <div class="tooltip news-footer-icon-tooltip">${date ? date : ''}</div>
            </div>`
            : `<div class="news-footer-icon-container" id="preview">
                <i class="fa-solid fa-magnifying-glass-arrow-right news-footer-icon"></i>
                <div class="tooltip news-footer-icon-tooltip">Preview</div>
            </div>`
        }
        ${
          context === 1 || context === 3
            ? `<div class="news-footer-icon-container" id="see-feedback">
                <i class="fa-solid fa-comments news-footer-icon"></i>
                <div class="tooltip news-footer-icon-tooltip">Feedback</div>
            </div>`
            : ''
        }
        ${
          context === 2 || context === 3
            ? `<div class="news-footer-icon-container" id="edit">
                <i class="fa-solid fa-pen-to-square news-footer-icon"></i>
                <div class="tooltip news-footer-icon-tooltip">Edit</div>
            </div>
            <div class="news-footer-icon-container" id="delete">
                <i class="fa-solid fa-trash-can news-footer-icon"></i>
                <div class="tooltip news-footer-icon-tooltip">Delete</div>
            </div>`
            : ''
        }
    </div>
`;

export default NewsItemFooter;
