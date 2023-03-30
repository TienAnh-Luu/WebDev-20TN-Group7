import Header from '../../../source/components/Header/Header.js';
import Navbar from '../../../source/components/DashboardPage/Navbar/Navbar.js';
import { NAV_ITEM } from '../../../source/utils/constants.js';
import { handleSticky } from '../../../source/utils/handleSticky.js';

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  handleSticky();
};

const root = document.getElementById('root');
root.innerHTML = `
    <div class="dashboard-page">
        ${Header}
        <main class="main">
            ${Navbar(NAV_ITEM.writer)}

            <div class="main-content"></div>
        </main>
    </div>
`;
