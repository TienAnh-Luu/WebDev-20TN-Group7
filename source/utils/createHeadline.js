import { HIGHLIGHT_TYPE, CONTEXT } from '../../source/utils/constants.js';

export const headlineOfType = (type) => {
  if (type === HIGHLIGHT_TYPE.MOST_VIEWED) {
    return 'XEM NHIỀU';
  } else if (type === HIGHLIGHT_TYPE.LATEST) {
    return 'MỚI NHẤT';
  } else if (type === HIGHLIGHT_TYPE.TOP10) {
    return 'TOP 10 CHUYÊN MỤC';
  } else if (type === CONTEXT.PUBLISHED) {
    return 'BÀI VIẾT ĐÃ XUẤT BẢN';
  } else if (type === CONTEXT.APPROVED) {
    return 'BÀI VIẾT ĐÃ ĐƯỢC DUYỆT';
  } else if (type === CONTEXT.WAITING) {
    return 'BÀI VIẾT CHỜ DUYỆT';
  } else if (type === CONTEXT.REJECTED) {
    return 'BÀI VIẾT BỊ TỪ CHỐI';
  }
  return '';
};
