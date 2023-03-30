import { dataToNavItemList } from '../../../../source/utils/createHtmlElements.js';

const Navbar = (data) => `
    <ul class="navbar">
        ${dataToNavItemList(data).join('\n')}
    </ul>
`;

export default Navbar;
