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

const categoryElements = (data) =>
  data.map(
    (c) => `
    <a href=${c.url} class="header__category-container">
      <div class="header__category">${c.title}</div>
      <div class="header__category-tooltip tooltip">${c.title}</div>
    </a>
`,
  );

const MiddleHeader = `
    <div class="header__middle" id="sticky-header">
        <a href="#" class="header__category-container">
          <i class="fa-solid fa-house header__category"></i>
          <div class="header__category-tooltip tooltip">Home Page</div>
        </a>
        ${categoryElements(category_data).join('\n')}
    </div>
`;

export default MiddleHeader;
