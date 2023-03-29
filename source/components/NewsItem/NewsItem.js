const NewsItem = (data) => `
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
    <div class="news-tag">${data.tag}</div>
</a>
`;

export default NewsItem;