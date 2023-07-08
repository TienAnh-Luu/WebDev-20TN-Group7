'use strict';

const helper = {};

helper.createFooterForNewsItem = (context, date) => {
  const dateIcon = `<div class="news-footer-icon-container" id="date">
    <i class="fa-solid fa-clock news-footer-icon"></i>
    <div class="tooltip news-footer-icon-tooltip">${helper.formatDateTime(date)}</div>
</div>`;

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

  return `<div class="news-footer">
          ${context === 'homepage' ? dateIcon : ``}
          ${context === 'published' || context === 'approved' ? `${previewIcon} ${feedbackIcon}` : ''}
          ${context === 'waiting' ? `${previewIcon} ${editIcon} ${deleteIcon}` : ''}
          ${context === 'rejected' ? `${previewIcon} ${editIcon} ${deleteIcon} ${feedbackIcon}` : ''}
          ${context === 'editor' ? `${previewIcon} ${approveIcon} ${rejectIcon}` : ''}
      </div>`;
};

helper.geHandlebars = (index, threshold) => {
  return index >= threshold;
};

helper.geHandlebars = (index, threshold) => {
  return index >= threshold;
};

helper.equalString = (s1, s2) => {
  return s1 === s2;
};

helper.isPremium = (time) => {
  return time >= new Date();
};

helper.isDate = (input) => {
  return input instanceof Date;
};

helper.formatDateTime = (dateTime) => {
  const vietnameseLocale = 'vi-VN';
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  return dateTime.toLocaleString(vietnameseLocale, options);
};

module.exports = helper;
