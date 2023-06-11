import { UnLinkedHeadline } from '../../../components/Highlight/Headline/Headline.js';
import { dataToSuggestionItemList } from '../../../utils/createHtmlElements.js';

const sampleData = [
  {
    imgPath: '../../public/images/rice.png',
    title: 'Giá trị xuất khẩu gạo Việt tăng đột biến dù sản lượng giảm',
    cate: 'Kinh doanh',
    date: '13/04/2023',
  },
  {
    imgPath: '../../public/images/rice.png',
    title: 'Giá trị xuất khẩu gạo Việt tăng đột biến dù sản lượng giảm',
    cate: 'Kinh doanh',
    date: '13/04/2023',
  },
];

const Suggestion = () => `
<div class="suggestions-container">
    ${UnLinkedHeadline('Cùng chủ đề')}
    <div class="suggestions-list">
    <div class="chevron-icon-container-left">
        <i class="fa-solid fa-chevron-left suggestions-chevron-icon"></i>
    </div>
    <div class="suggestions-items">
       ${dataToSuggestionItemList(sampleData).join('\n')}
    </div>
    <div class="chevron-icon-container-right">
        <i class="fa-solid fa-chevron-right suggestions-chevron-icon"></i>
    </div>
    </div>
</div>
`;

export default Suggestion;
