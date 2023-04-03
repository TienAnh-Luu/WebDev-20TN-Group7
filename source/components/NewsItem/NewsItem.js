import NewsItemFooter from '../../../source/components/NewsItem/NewsItemFooter/NewsItemFooter.js';

const NewsItem = (data, context) => `
<a href=${data.url} class="news-item-container">
    <div class="news-thumbnail-container zoom-hover">
        <img class="news-thumbnail" src=${data.imgPath} alt="Thumbnail" />
    </div>
    <div class="news-info">
        <h3 class="news-title">${data.title}</h3>
        <p class="news-summary">
            ${data.summary}
        </p>
    </div>
    <div class="news-tag">${data.category}</div>
    ${NewsItemFooter(context, data.date)}
</a>
`;

export default NewsItem;
