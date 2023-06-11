import { loadHighlightDataOfType } from '../../utils/loadData.js';
import { dataToNewsItemList } from '../../utils/createHtmlElements.js';
import { CATEGORY, CONTEXT } from '../../utils/constants.js';
import { headlineOfType } from '../../utils/createHeadline.js';
import { HomepageHeadline, NewsListHeadline } from '../../components/Highlight/Headline/Headline.js';

const cateOfId = (id) => {
  let cateId = Number(id);
  while (cateId % 3 !== 2) {
    cateId--;
  }

  let cates = Object.keys(CATEGORY);
  for (let i = 0; i < cates.length; i++) {
    if (CATEGORY[cates[i]].id == cateId) {
      return CATEGORY[cates[i]];
    }
  }
  return '';
};

// In case Homepage, type != navigator
// else, type == navigator
const Highlight = (type, tag = '') => {
  const data = loadHighlightDataOfType(type);
  const navigator = Number(sessionStorage.getItem('navigator'));
  const newsItemList = dataToNewsItemList(data, navigator);

  return `
   <div class="main__highlight grid-container">
     ${navigator > CONTEXT.HOMEPAGE ? NewsListHeadline(cateOfId(type), tag) : HomepageHeadline(headlineOfType(type))}
     ${newsItemList.join('\n')}
     ${
       Number(sessionStorage.getItem('navigator')) === CONTEXT.HOMEPAGE
         ? `<a href='../../pages/NewslistPage.html' class="see-more-btn" id="see-more-${type}">Xem thêm</a>`
         : ''
     }
   </div>
    `;
};

export default Highlight;
