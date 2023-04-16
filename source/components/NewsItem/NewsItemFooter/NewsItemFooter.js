import { CONTEXT } from '../../../../source/utils/constants.js';

const previewIcon = `<div class="news-footer-icon-container news-preview-icon" id="preview">
    <i class="fa-solid fa-magnifying-glass-arrow-right news-footer-icon"></i>
    <div class="tooltip news-footer-icon-tooltip">Preview</div>
</div>`;

const feedbackIcon = `<div class="news-footer-icon-container news-feedback-icon" id="see-feedback">
    <i class="fa-solid fa-comments news-footer-icon"></i>
    <div class="tooltip news-footer-icon-tooltip">Feedback</div>
</div>`;

const editIcon = `<div class="news-footer-icon-container news-edit-icon" id="edit">
    <i class="fa-solid fa-pen-to-square news-footer-icon"></i>
    <div class="tooltip news-footer-icon-tooltip">Edit</div>
</div>`;

const deleteIcon = `<div class="news-footer-icon-container news-delete-icon" id="delete">
    <i class="fa-solid fa-trash-can news-footer-icon"></i>
    <div class="tooltip news-footer-icon-tooltip">Delete</div>
</div>`;

const approveIcon = `<div class="news-footer-icon-container news-approve-icon" id="approve">
    <i class="fa-solid fa-check news-footer-icon"></i>
    <div class="tooltip news-footer-icon-tooltip">Approve</div>
</div>`;

const rejectIcon = `<div class="news-footer-icon-container news-reject-icon" id="reject">
    <i class="fa-solid fa-xmark news-footer-icon"></i>
    <div class="tooltip news-footer-icon-tooltip">Reject</div>
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
        ${
          context === 'editor'
            ? `${previewIcon}
        ${approveIcon}
        ${rejectIcon}`
            : ''
        }
    </div>
`;

export default NewsItemFooter;
