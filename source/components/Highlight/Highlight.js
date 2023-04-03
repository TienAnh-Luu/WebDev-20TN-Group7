import { loadHighlightDataOfType } from '../../../source/utils/loadData.js';
import { dataToNewsItemList } from '../../../source/utils/createHtmlElements.js';
import { CONTEXT, HIGHLIGHT_TYPE } from '../../../source/utils/constants.js';

const headlineOfType = (type) => {
  if (type === HIGHLIGHT_TYPE.MOST_VIEWED) {
    return 'XEM NHIỀU';
  } else if (type === HIGHLIGHT_TYPE.LATEST) {
    return 'MỚI NHẤT';
  } else if (type === HIGHLIGHT_TYPE.TOP10) {
    return 'TOP 10 CHUYÊN MỤC';
  }
  return '';
};

const Highlight = (type) => {
  const { data, highlightURL } = loadHighlightDataOfType(type);
  const newsItemList = dataToNewsItemList(data, CONTEXT.HOMEPAGE);

  return `
   <div class="main__highlight grid-container">
     <div class="main__highlight-headline"><a href=${highlightURL} class="headline-text">${headlineOfType(
    type,
  )}</a></div>
     ${newsItemList.join('\n')}
     <a href=${highlightURL} class="see-more-btn">Xem thêm</a>
   </div>
    `;
};

export default Highlight;
