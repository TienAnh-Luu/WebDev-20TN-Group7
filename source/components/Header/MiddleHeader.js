import { CATEGORY } from '../../utils/constants.js';

const category_data = [
  {
    title: 'Thời sự',
    url: '#',
  },
  {
    title: 'Xã hội',
    url: '#',
  },
  {
    title: 'Quốc tế',
    url: '#',
  },
  {
    title: 'Giáo dục',
    url: '#',
  },
  {
    title: 'Kinh doanh',
    url: '#',
  },
  {
    title: 'Sức khỏe',
    url: '#',
  },
  {
    title: 'Văn hóa',
    url: '#',
  },
  {
    title: 'Thể thao',
    url: '#',
  },
  {
    title: 'Công nghệ',
    url: '#',
  },
  {
    title: 'Du lịch',
    url: '#',
  },
];

const categoryElements = (data) => {
  let res = [];
  for (let key in data) {
    res.push(`
    <a href="../../pages/NewslistPage.html" class="header__category-container header-item" data-value=${data[key].id}>
      ${data[key].label}
      <div class="header__category-tooltip tooltip">${data[key].label}</div>
    </a>
`);
  }
  return res;
};

const MiddleHeader = `
    <div class="header__middle" id="sticky-header">
        <a href="../../index.html" class="header__home-container header-item" data-value="home">
            <i class="fa-solid fa-house header__category"></i>
            <div class="header__category-tooltip tooltip">Home Page</div>
        </a>
        ${categoryElements(CATEGORY).join('\n')}
    </div>
`;

export default MiddleHeader;
