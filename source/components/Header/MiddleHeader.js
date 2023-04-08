import { CATEGORY } from '../../../source/utils/constants.js';
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
    <a href="#" class="header__category-container">
      <div class="header__category">${data[key].label}</div>
      <div class="header__category-tooltip tooltip">${data[key].label}</div>
    </a>
`);
  }
  return res;
};

const MiddleHeader = `
    <div class="header__middle" id="sticky-header">
        <a href="#" class="header__category-container">
          <i class="fa-solid fa-house header__category"></i>
          <div class="header__category-tooltip tooltip">Home Page</div>
        </a>
        ${categoryElements(CATEGORY).join('\n')}
    </div>
`;

export default MiddleHeader;
