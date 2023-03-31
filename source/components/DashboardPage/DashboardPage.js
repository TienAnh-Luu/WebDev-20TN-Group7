import Header from '../../../source/components/Header/Header.js';
import Navbar from '../../../source/components/DashboardPage/Navbar/Navbar.js';
import RoundButton from '../../../source/components/RoundButton/RoundButton.js';
import AccountInfo from '../../../source/components/DashboardPage/Info/AccountInfo.js';
import { NAV_ITEM } from '../../../source/utils/constants.js';
import { handleSticky } from '../../../source/utils/handleSticky.js';

// When the user scrolls the page, execute handleSticky
window.onscroll = function () {
  handleSticky();
};

const account_info_data = {
  user_name: 'Trương Anh Ngọc',
  account_name: 'AnhNgokBunny',
  email: 'tan1976@gmail.com',
  phone_number: '0123456789',
  DOB: '19/01/1976',
};

const root = document.getElementById('root');
root.innerHTML = `
    <div class="dashboard-page">
        ${Header}
        <main class="main">
            ${Navbar(NAV_ITEM.writer)}

            <div class="main-content">
                ${AccountInfo(account_info_data)}
            </div>
        </main>
    </div>
`;

const navbar = document.getElementById('navbar');
navbar.firstElementChild.style.backgroundColor = 'rgba(255,255,255,0.2)';
