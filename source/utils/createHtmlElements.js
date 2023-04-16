import NewsItem from '../../source/components/NewsItem/NewsItem.js';
import NavItem from '../../source/components/DashboardPage/Navbar/NavItem.js';
import PaperItem from '../../source/components/DashboardPage/PaperDashboard/PaperItem.js';
import CommentAreaItem from '../../source/components/NewsDetailPage/CommentArea/CommentAreaItem/CommentAreaItem.js';
import SuggestionItem from '../../source/components/NewsDetailPage/Suggestion/SuggestionItem/SuggestionItem.js';

export const dataToNewsItemList = (data, context) => data.map((d) => NewsItem(d, context));

export const dataToNavItemList = (data) => data.map((d) => NavItem(d));

export const dataToPaperItemList = (data, context) => data.map((d) => PaperItem(d, context));

export const dataToCommentAreaItemList = (data) => data.map((d) => CommentAreaItem(d));

export const dataToSuggestionItemList = (data) => data.map((d) => SuggestionItem(d));

export const dataToDescriptionList = (data) =>
  data.map((d) => {
    if (d.type === 'text') {
      return `<p class="desc-text">${d.value}</p>`;
    } else if (d.type === 'image') {
      return `
    <div class="desc-image-container">
      <img class="desc-image" src=${d.value.source} alt="Illustration" />
      <p class="desc-image-caption">${d.value.caption}</p>
    </div>`;
    }

    return '';
  });

export const dataToTagList = (tags, cate) =>
  tags.map(
    (tag) => `<a href="#" class="detail-tag" data-cate=${cate}>${tag}</a>${tag === tags[tags.length - 1] ? '' : ','}`,
  );

export function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}
