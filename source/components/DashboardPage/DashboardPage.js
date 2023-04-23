import Header from '../../../source/components/Header/Header.js';
import Navbar from '../../../source/components/DashboardPage/Navbar/Navbar.js';
import AccountInfo from '../../../source/components/DashboardPage/Info/AccountInfo.js';
import WriterInfo from '../../../source/components/DashboardPage/Info/WriterInfo.js';
import WriterEditor from '../../../source/components/WriterEditor/WriterEditor.js';
import PaperDashboard from '../../../source/components/DashboardPage/PaperDashboard/PaperDashboard.js';
import { CONTEXT, NAV_ITEM, POPUP_INPUT_DETAIL } from '../../../source/utils/constants.js';
import { handleSticky } from '../../../source/utils/handleSticky.js';
import { addOnclickToClassname } from '../../../source/utils/addOnclick.js';
import { openPopup } from '../../../source/utils/handlePopup.js';
import EditorInfo from '../../../source/components/DashboardPage/Info/EditorInfo.js';
import Premium from '../../../source/components/DashboardPage/Premium/Premium.js';
import EditorApprovalDashboard from './EditorApprovalDashboard/EditorApprovalDashboard.js';
import { loadEditorPaperData } from '../../utils/loadData.js';
import CategoryDashboard from './AdministatorDashboard/CategoryDashboard.js';
import TagDashboard from './AdministatorDashboard/TagDashboard.js';
import PostDashboard from './AdministatorDashboard/PostDashboard.js';
import UserDashboard from './AdministatorDashboard/UserDashboard.js';

const account_info_data = {
  user_name: 'Trương Anh Ngọc',
  account_name: 'user',
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

const editor_info_data = {
  user_name: 'Biên Văn Tập',
  account_name: 'editor',
  email: 'btv123@gmail.com',
  phone_number: '0123456789',
  DOB: '19/01/1976',
  work_place: 'Milan, Lombardia, Italy',
  department: 'Thể thao',
};

// When the user scrolls the page, execute handleSticky
window.onscroll = function () {
  handleSticky();
};

// Function to show the init render
const initRender = () => {
  const user_type = sessionStorage.getItem('user_type');

  const navbar = document.getElementById('navbar');
  navbar.firstElementChild.style.backgroundColor = 'rgba(255,255,255,0.2)';

  const content = document.getElementById('main-content');

  if (user_type === 'normal' || user_type === 'subscriber' || user_type === 'writer') {
    content.innerHTML = AccountInfo(account_info_data);
  } else if (user_type === 'editor') {
    content.innerHTML = EditorInfo(editor_info_data);
  } else if (user_type === 'admin') {
    content.innerHTML = CategoryDashboard;
  }

  const editBtn = document.getElementById('edit');
  editBtn?.addEventListener('click', () => openPopup('dashboard-main', 'account', POPUP_INPUT_DETAIL.ACCOUNT));

  const changePwdBtn = document.getElementById('change-password');
  changePwdBtn?.addEventListener('click', () => openPopup('dashboard-main', 'password', POPUP_INPUT_DETAIL.PASSWORD));
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

      const editBtn = document.getElementById('edit');
      editBtn?.addEventListener('click', () => openPopup('dashboard-main', 'account', POPUP_INPUT_DETAIL.ACCOUNT));

      const changePwdBtn = document.getElementById('change-password');
      changePwdBtn?.addEventListener('click', () =>
        openPopup('dashboard-main', 'password', POPUP_INPUT_DETAIL.PASSWORD),
      );

      break;
    }
    case 'writer-info': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      const main = document.getElementById('main-content');
      main.innerHTML = WriterInfo(writer_info_data);

      const editBtn = document.getElementById('edit');
      editBtn.addEventListener('click', () => openPopup('dashboard-main', 'writer', POPUP_INPUT_DETAIL.WRITER));

      break;
    }
    case 'writing': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      const main = document.getElementById('main-content');
      main.innerHTML = WriterEditor;

      CKEDITOR.replace('mainEditor');

      const submitBtn = document.querySelector('.submitButton');
      submitBtn.addEventListener('click', () => {
        let ckeditor = CKEDITOR.instances.mainEditor;
        let content = ckeditor.getData();
        console.log(content);

        document.querySelector('#testEditor').innerHTML = content;
      });

      const avatarBox = document.querySelector('#avatarBox');
      avatarBox.addEventListener('click', () => {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.style.display = 'none';
        document.body.appendChild(input);

        input.addEventListener('change', function (event) {
          var file = event.target.files[0];

          var reader = new FileReader();
          reader.onload = function (event) {
            var img = document.createElement('img');
            img.src = event.target.result;
            img.style.maxWidth = '100%';
            img.style.maxHeight = '100%';

            avatarBox.innerHTML = '';
            avatarBox.appendChild(img);
          };
          reader.readAsDataURL(file);

          document.body.removeChild(input);
        });

        input.click();
      });

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
      sessionStorage.setItem('user_type', ''); // become guest
      window.location.assign('../../../source/pages/LoginPage.html');
      break;
    }
    case 'premium': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      const main = document.getElementById('main-content');
      main.innerHTML = Premium(sessionStorage.getItem('user_type') === 'subscriber' ? 5500 : 0);
      break;
    }
    case 'editor-info': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      const main = document.getElementById('main-content');
      main.innerHTML = EditorInfo(editor_info_data);

      const editBtn = document.getElementById('edit');
      editBtn?.addEventListener('click', () => openPopup('dashboard-main', 'account', POPUP_INPUT_DETAIL.ACCOUNT));

      const changePwdBtn = document.getElementById('change-password');
      changePwdBtn?.addEventListener('click', () =>
        openPopup('dashboard-main', 'password', POPUP_INPUT_DETAIL.PASSWORD),
      );

      break;
    }
    case 'editor-waiting': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      const main = document.getElementById('main-content');
      main.innerHTML = EditorApprovalDashboard(loadEditorPaperData());

      const approveBtns = document.getElementsByClassName('news-approve-icon');
      for (let i = 0; i < approveBtns.length; i++) {
        approveBtns[i].addEventListener('click', (e) => {
          openPopup('dashboard-main', 'editor-approve');
        });
      }

      const rejectBtns = document.getElementsByClassName('news-reject-icon');
      for (let i = 0; i < rejectBtns.length; i++) {
        rejectBtns[i].addEventListener('click', (e) => {
          openPopup('dashboard-main', 'editor-reject');
        });
      }

      break;
    }
    case 'admin-category': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      const main = document.getElementById('main-content');
      main.innerHTML = CategoryDashboard;

      break;
    }
    case 'admin-tag': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      const main = document.getElementById('main-content');
      main.innerHTML = TagDashboard;

      break;
    }
    case 'admin-post': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      const main = document.getElementById('main-content');
      main.innerHTML = PostDashboard;

      break;
    }
    case 'admin-user': {
      target.style.backgroundColor = 'rgba(255,255,255,0.2)';
      const main = document.getElementById('main-content');
      main.innerHTML = UserDashboard;

      break;
    }
  }
};

const user_type = sessionStorage.getItem('user_type');
const nav_item_labels =
  user_type === 'writer'
    ? NAV_ITEM.writer
    : user_type === 'editor'
    ? NAV_ITEM.editor
    : user_type === 'admin'
    ? NAV_ITEM.admin
    : NAV_ITEM.user;

const root = document.getElementById('root');
root.innerHTML = `
    <div class="dashboard-page">
        ${Header}
        <main class="main" id="dashboard-main">
          ${Navbar(nav_item_labels)}
          <div class="main-content" id="main-content"></div>
        </main>
    </div>
`;

initRender();

addOnclickToClassname('nav-item-container', handleOnClick);
