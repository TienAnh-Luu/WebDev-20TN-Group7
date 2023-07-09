'use strict';

const helper = {};

helper.createFooterForNewsItem = (context, data) => {
  const dateIcon = `<div class="news-footer-icon-container" id="date">
      <i class="fa-solid fa-clock news-footer-icon"></i>
      <div class="tooltip news-footer-icon-tooltip">${helper.formatDateTime(data.published_time)}</div>
  </div>`;

  const previewIcon = `<a
  href="/posts/${data.id}/preview"
  class="news-footer-icon-container news-preview-icon"
  id="preview"
>
  <i class="fa-solid fa-magnifying-glass-arrow-right news-footer-icon"></i>
  <div class="tooltip news-footer-icon-tooltip">Preview</div>
</a>`;

  const checkIcon = `<a
  href="/editors/check/${data.id}"
  class="news-footer-icon-container news-preview-icon"
  id="preview"
>
  <i class="fa-solid fa-magnifying-glass-arrow-right news-footer-icon"></i>
  <div class="tooltip news-footer-icon-tooltip">Preview</div>
</a>`;

  const feedbackIcon = `<div
  class="news-footer-icon-container news-feedback-icon"
  id="see-feedback"
  data-value="${data.feedback}"
>
  <i class="fa-solid fa-comments news-footer-icon"></i>
  <div class="tooltip news-footer-icon-tooltip">Feedback</div>
</div>`;

  const editIcon = `<a href="/writers/edit/${data.id}" class="news-footer-icon-container news-edit-icon" id="edit">
    <i class="fa-solid fa-pen-to-square news-footer-icon"></i>
    <div class="tooltip news-footer-icon-tooltip">Edit</div>
</a>`;

  const deleteIcon = `<div class="news-footer-icon-container news-delete-icon" id="delete" data-value="${data.id}">
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
          ${context === 'published' || context === 'approved' ? `${previewIcon}` : ''}
          ${context === 'waiting' ? `${previewIcon} ${editIcon} ${deleteIcon}` : ''}
          ${context === 'rejected' ? `${previewIcon} ${editIcon} ${deleteIcon} ${feedbackIcon}` : ''}
          ${context === 'editor-waiting' ? `${checkIcon}` : ''}
          ${context === 'editor-reject' ? `${feedbackIcon}` : ''}
      </div>`;
};

helper.createFooterForNewsItemAdminPost = (data) => {
  const checkIcon = `<a
  href="/admin/check/${data.id}"
  class="news-footer-icon-container news-preview-icon"
  id="preview"
>
  <i class="fa-solid fa-magnifying-glass-arrow-right news-footer-icon"></i>
  <div class="tooltip news-footer-icon-tooltip">Preview</div>
</a>`;

  const premiumIcon = `<div class="news-footer-icon-container news-premium-footer-icon" id="premium" data-value="${data.id}">
  <i class="fa-solid fa-gem news-footer-icon"></i>
  <div class="tooltip news-footer-icon-tooltip">Premium</div>
</div>`;

  const feedbackIcon = `<div
  class="news-footer-icon-container news-feedback-icon"
  id="see-feedback"
  data-value="${data.feedback}"
>
  <i class="fa-solid fa-comments news-footer-icon"></i>
  <div class="tooltip news-footer-icon-tooltip">Feedback</div>
</div>`;

  const deleteIcon = `<div class="news-footer-icon-container news-delete-icon" id="delete" data-value="${data.id}">
    <i class="fa-solid fa-trash-can news-footer-icon"></i>
    <div class="tooltip news-footer-icon-tooltip">Delete</div>
</div>`;

  return `<div class="news-footer">
  ${data.status === 'Publish' && data.is_premium === false ? `${checkIcon} ${premiumIcon} ${deleteIcon}` : ''}
  ${data.status === 'Publish' && data.is_premium === true ? `${checkIcon} ${deleteIcon}` : ''}
  ${data.status === 'Draft' ? `${checkIcon} ${deleteIcon}` : ''}
  ${data.status === 'Reject' ? `${checkIcon} ${feedbackIcon} ${deleteIcon}` : ''}
  ${data.status === 'Delete' ? `${checkIcon}` : ''}
</div>`;
};

helper.createFooterForNewsItemAdminTag = (data) => {
  const editIcon = `<div class="news-footer-icon-container news-edit-icon" id="edit" data-value="${data.id}">
<i class="fa-solid fa-pen-to-square news-footer-icon"></i>
<div class="tooltip news-footer-icon-tooltip">Edit</div>
</div>`;

  const deleteIcon = `<div class="news-footer-icon-container news-delete-icon" id="delete" data-value="${data.id}">
    <i class="fa-solid fa-trash-can news-footer-icon"></i>
    <div class="tooltip news-footer-icon-tooltip">Delete</div>
</div>`;

  return `<div class="news-footer">
  ${`${editIcon} ${deleteIcon}`}
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

helper.equalInt = (s1, s2) => {
  s1 = parseInt(s1, 10);
  console.log('break');
  console.log(s2);
  s2 = parseInt(s2, 10);
  console.log(s1);
  console.log(s2);
  return s1 === s2;
};

helper.isPremium = (time) => {
  return time >= new Date();
};

helper.isDate = (input) => {
  return input instanceof Date;
};

helper.formatDateTime = (dateTime) => {
  if (dateTime) {
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
  }
  return '';
};

helper.formatStatus = (data, status) => {
  const now = new Date();
  if (status === 'Draft') return 'Bản nháp';
  if (status === 'Reject') return 'Bị từ chối';
  if (status === 'Publish' && data.published_time > now) return 'Đã duyệt';
  if (status === 'Publish' && data.published_time <= now) return 'Đã xuất bản';
  if (status === 'Delete') return 'Bị xoá';
};

module.exports = helper;
