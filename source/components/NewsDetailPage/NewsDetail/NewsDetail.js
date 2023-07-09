import CommentArea from '../../../components/NewsDetailPage/CommentArea/CommentArea.js';
import Suggestion from '../../../components/NewsDetailPage/Suggestion/Suggestion.js';
import { dataToDescriptionList, dataToTagList } from '../../../utils/createHtmlElements.js';

const NewsDetail = (data) => `
    <div class="news-detail-container">
        <div class="detail-thumbnail-container">
            <img class="detail-thumbnail" src=${data.thumbnail} alt="Detail thumbnail" />
        </div>
        <div class="detail-cate-and-date">
            <a href="../../../pages/NewslistPage.html" id="detail-cate" class="detail-cate">${data.cate}</a>
            <div class="detail-date">${data.date}</div>
        </div>
        <h1 class="detail-title">${data.title}</h1>
        <div class="detail-descriptions">
            ${dataToDescriptionList(data.descriptions).join('\n')}
        </div>
        <div class="detail-writer">Trương Anh Ngọc</div>
        <div class="detail-tags-container">
            <i class="fa-solid fa-tags detail-tags-icon"></i>
            <div class="detail-tags">
                ${dataToTagList(data.tags, data.cate).join('\n')}
            </div>
        </div>
        ${CommentArea()}
        ${Suggestion()}
    </div>
`;

export default NewsDetail;
