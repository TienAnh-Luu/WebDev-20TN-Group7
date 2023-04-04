import Header from '../../../source/components/Header/Header.js';
import Navbar from '../../../source/components/DashboardPage/Navbar/Navbar.js';
import AccountInfo from '../../../source/components/DashboardPage/Info/AccountInfo.js';
import WriterInfo from '../../../source/components/DashboardPage/Info/WriterInfo.js';
import PaperDashboard from '../../../source/components/DashboardPage/PaperDashboard/PaperDashboard.js';
import { CONTEXT, NAV_ITEM } from '../../../source/utils/constants.js';
import { handleSticky } from '../../../source/utils/handleSticky.js';
import { addOnclickToClassname } from '../../../source/utils/addOnclick.js';
import { loadWriterPaperDataOfType } from '../../../source/utils/loadData.js';

const account_info_data = {
  user_name: 'Trương Anh Ngọc',
  account_name: 'AnhNgokBunny',
  email: 'tan1976@gmail.com',
  phone_number: '0123456789',
  DOB: '19/01/1976',
};

const writer_info_data = {
  writer_pseudonym: 'Ký giả họ Trương',
  email: 'tan1976@gmail.com',
  phone_number: '0123456789',
  work_place: 'Milan, Lombardia, Italy',
  department: 'Thể thao',
  manager: 'Đinh Tiến Dũng',
};

// When the user scrolls the page, execute handleSticky
window.onscroll = function () {
  handleSticky();
};

// Function to show the init render
const initRender = () => {
  const navbar = document.getElementById('navbar');
  navbar.firstElementChild.style.backgroundColor = 'rgba(255,255,255,0.2)';

  const content = document.getElementById('main-content');
  content.innerHTML = `${AccountInfo(account_info_data)}`;
};

// Function handle onclick event of NavItem
const handleOnClick = (e) => {
  const target = e.target;

  // reset all background color
  const items = document.getElementsByClassName('nav-item-container');
  for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '';
  }

  switch (target.getAttribute('value')) {
    case 'account-info': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      const main = document.getElementById('main-content');
      main.innerHTML = AccountInfo(account_info_data);
      break;
    }
    case 'writer-info': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      const main = document.getElementById('main-content');
      main.innerHTML = WriterInfo(writer_info_data);
      break;
    }
    case 'writing': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      break;
    }
    case 'published': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      const main = document.getElementById('main-content');
      main.innerHTML = PaperDashboard(CONTEXT.PUBLISHED);
      break;
    }
    case 'approved': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      const main = document.getElementById('main-content');
      main.innerHTML = PaperDashboard(CONTEXT.APPROVED);
      break;
    }
    case 'waiting': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      const main = document.getElementById('main-content');
      main.innerHTML = PaperDashboard(CONTEXT.WAITING);
      break;
    }
    case 'rejected': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      const main = document.getElementById('main-content');
      main.innerHTML = PaperDashboard(CONTEXT.REJECTED);
      break;
    }
    case 'log-out': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      break;
    }
    case 'premium': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      break;
    }
  }
};

const data = loadWriterPaperDataOfType(CONTEXT.PUBLISHED);

const root = document.getElementById('root');
root.innerHTML = `
    <div class="dashboard-page">
        ${Header}
        <main class="main">
          ${Navbar(NAV_ITEM.writer)}
          <div class="main-content" id="main-content"></div>
        </main>
    </div>
`;

initRender();

addOnclickToClassname('nav-item-container', handleOnClick);
