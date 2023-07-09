import Logo from '../Logo/Logo.js';

const headerTopItems = [
  {
    title: 'MỚI NHẤT',
    url: '#',
  },
  {
    title: 'XEM NHIỀU',
    url: '#',
  },
  {
    title: 'PREMIUM',
    url: '#',
  },
];

const user_type = sessionStorage.getItem('user_type');
const isGuest = !user_type || user_type === '';

const TopHeader = `
    <div class="header__top">
        <div class="header__top-left header-item">
        ${Logo('dark-red-backgroundcolor', 'white-color', 'black-color')}
        <div class="tooltip logo-tooltip">Home Page</div>
        </div>
        <div class="header__top-middle">
          <nav class="header__top-navbar">
              <a href="../../pages/NewslistPage.html" class="header__top-navItem header-item" data-value="0">${
                headerTopItems[0].title
              }</a>
              <a href="../../pages/NewslistPage.html" class="header__top-navItem header-item" data-value="1">${
                headerTopItems[1].title
              }</a>
              <a href="../../pages/NewslistPage.html" class="header__top-navItem header-item" data-value="-1">${
                headerTopItems[2].title
              }</a>
          </nav>
        </div>
        <div class="header__top-right">
          <div class="header__top-searchContainer">
              <input type="text" name="search" class="search-input" id="search-input" placeholder="Tìm kiếm..." />
              <i class="fa-solid fa-magnifying-glass header__top-searchIcon"></i>
          </div>
          <div class="header__top-userIconContainer">
              <a class="header__top-userIcon" href=${
                isGuest ? '../../pages/LoginPage.html' : '../pages/DashboardPage.html'
              }><i class="fa-solid fa-user"></i></a>
              <div class="tooltip userIcon-tooltip">User</div>
          </div>
        </div>
    </div>
`;

export default TopHeader;
