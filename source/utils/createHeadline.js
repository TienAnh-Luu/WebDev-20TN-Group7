import { CONTEXT } from '../../source/utils/constants.js';

export const headlineOfType = (type) => {
  if (type === CONTEXT.MOST_VIEWED) {
    return 'XEM NHIỀU';
  } else if (type === CONTEXT.LATEST) {
    return 'MỚI NHẤT';
  } else if (type === CONTEXT.TOP10) {
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
