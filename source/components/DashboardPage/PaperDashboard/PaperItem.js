import NewsItem from '../../../components/NewsItem/NewsItem.js';

const PaperItem = (data, context) => `
  <div class="state-item-container">
    <div class="state-item f2">${NewsItem(data, context)}</div>
    <div class="state-item-tags f1">${data.tags.map((tag) => `<p class="state-item-tag">${tag}</p>`).join('\n')}</div>
  </div>
`;

export default PaperItem;
