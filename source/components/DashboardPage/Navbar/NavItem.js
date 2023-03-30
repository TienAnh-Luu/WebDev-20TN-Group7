const NavItem = (item) => `
    <li class="nav-item-container" value=${item.value}>
        <i class="${item.icon} nav-item-icon"></i>
        <h3 class="nav-item-text">${item.text}</h3>
    </li>
`;

export default NavItem;
