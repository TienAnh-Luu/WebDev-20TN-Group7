import { loadHighlightDataOfType } from '../../../source/utils/loadData.js';
import { dataToNewsItemList } from '../../../source/utils/createHtmlElements.js';
import { CONTEXT } from '../../../source/utils/constants.js';
import { headlineOfType } from '../../../source/utils/createHeadline.js';

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
