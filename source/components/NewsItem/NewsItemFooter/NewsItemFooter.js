import { CONTEXT } from '../../../../source/utils/constants.js';

const previewIcon = `<div class="news-footer-icon-container" id="preview">
    <i class="fa-solid fa-magnifying-glass-arrow-right news-footer-icon"></i>
    <div class="tooltip news-footer-icon-tooltip">Preview</div>
</div>`;

const feedbackIcon = `<div class="news-footer-icon-container" id="see-feedback">
    <i class="fa-solid fa-comments news-footer-icon"></i>
    <div class="tooltip news-footer-icon-tooltip">Feedback</div>
</div>`;

const editIcon = `<div class="news-footer-icon-container" id="edit">
    <i class="fa-solid fa-pen-to-square news-footer-icon"></i>
    <div class="tooltip news-footer-icon-tooltip">Edit</div>
</div>`;

const deleteIcon = `<div class="news-footer-icon-container" id="delete">
    <i class="fa-solid fa-trash-can news-footer-icon"></i>
    <div class="tooltip news-footer-icon-tooltip">Delete</div>
</div>`;

// context: homepage => only render date icon in footer
// context: published and approved section in DashboardPage => render preview and feedback icon
// context: waiting section in DashboardPage => render preview, edit and delete icon
// context: rejected section in DashboardPage => render preview, edit, delete and feedback icon
const NewsItemFooter = (context, date = '') => `
    <div class="news-footer">
        ${
          context >= CONTEXT.HOMEPAGE || context <= CONTEXT.TOP10 // in homepage or in category or in
            ? `<div class="news-footer-icon-container" id="date">
                <i class="fa-solid fa-clock news-footer-icon"></i>
                <div class="tooltip news-footer-icon-tooltip">${date ? date : ''}</div>
            </div>`
            : ``
        }
        ${
          context === CONTEXT.PUBLISHED ||
          context === CONTEXT.APPROVED ||
          context === CONTEXT.WAITING ||
          context === CONTEXT.REJECTED
            ? previewIcon
            : ''
        }
        ${
          context === CONTEXT.PUBLISHED || context === CONTEXT.REJECTED || context === CONTEXT.APPROVED
            ? feedbackIcon
            : ''
        }
        ${
          context === CONTEXT.WAITING || context === CONTEXT.REJECTED
            ? `${editIcon}
            ${deleteIcon}`
            : ''
        }
    </div>
`;

export default NewsItemFooter;
