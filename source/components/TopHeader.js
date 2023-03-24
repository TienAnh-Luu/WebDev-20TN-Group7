import Logo from './Logo.js';

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

const TopHeader = `
    <div class="header__top">
        <div class="header__top-left">
        ${Logo('dark-red-backgroundcolor', 'white-color', 'black-color')}
        <div class="tooltip logo-tooltip">Home Page</div>
        </div>
        <div class="header__top-middle">
        <nav class="header__top-navbar">
            <a href=${headerTopItems[0].url} class="header__top-navItem">${headerTopItems[0].title}</a>
            <a href=${headerTopItems[1].url} class="header__top-navItem">${headerTopItems[1].title}</a>
            <a href==${headerTopItems[2].url} class="header__top-navItem">${headerTopItems[2].title}</a>
        </nav>
        </div>
        <div class="header__top-right">
        <div class="header__top-searchContainer">
            <input type="text" name="search" class="search-input" id="search-input" placeholder="Tìm kiếm..." />
            <i class="fa-solid fa-magnifying-glass header__top-searchIcon"></i>
        </div>
        <div class="header__top-userIconContainer">
            <i class="fa-solid fa-user header__top-userIcon"></i>
            <div class="tooltip userIcon-tooltip">User</div>
        </div>
        </div>
    </div>
`;

export default TopHeader;
