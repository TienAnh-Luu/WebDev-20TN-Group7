import NewsItemFooter from '../../components/NewsItem/NewsItemFooter/NewsItemFooter.js';

const NewsItem = (data, context) => `
<a ${context === 'editor' ? '' : "href='../../pages/NewsDetailPage.html'"}" class="news-item-container ignore-click">
    <div class="news-thumbnail-container zoom-hover">
        <img class="news-thumbnail" src=${data.imgPath} alt="Thumbnail" />
    </div>
    <div class="news-info">
        <h3 class="news-title">${data.title}</h3>
        ${
          context === 'editor'
            ? ''
            : `<p class="news-summary">
            ${data.summary}
        </p>`
        }
    </div>
    <div class="news-tag">${data.category}</div>
    ${NewsItemFooter(context, data.date)}
</a>
`;

export default NewsItem;
