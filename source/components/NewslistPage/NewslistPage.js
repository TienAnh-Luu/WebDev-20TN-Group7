import Highlight from '../../components/Highlight/Highlight.js';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import { handleSticky } from '../../utils/handleSticky.js';
import {
  addOnclickToCateHeadline,
  addOnclickToHeaderItems,
  handleNavigateToNewslistPage,
} from '../../utils/addOnclick.js';
import { CONTEXT } from '../../utils/constants.js';

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  handleSticky();
};

const navigator = Number(sessionStorage.getItem('navigator'));

const root = document.getElementById('root');
root.innerHTML = `
    <div class="news-list">
        ${Header}
        <div class="news-list-main" id="news-list-main">
            ${Highlight(navigator)}
        </div>
        ${Footer}
    </div>
`;

const initNewslistPage = () => {
  addOnclickToHeaderItems();
  addOnclickToCateHeadline();

  const headerItems = document.getElementsByClassName('header-item');
  for (let i = 0; i < headerItems.length; i++) {
    const itemId = headerItems[i].getAttribute('data-value');
    if (Number(itemId) === navigator) {
      headerItems[i].style.backgroundColor = 'rgba(255,255,255,0.25)';
      break;
    }

    if (navigator > CONTEXT.HOMEPAGE) {
      // this is the parent cate of navigator or it is navigator
      if (navigator - Number(itemId) > 0 && navigator - Number(itemId) < 3) {
        headerItems[i].style.backgroundColor = 'rgba(255,255,255,0.25)';
        break;
      }
    }
  }

  const cateHeadlineItems = document.getElementsByClassName('subcate-headline-text');
  for (let i = 0; i < cateHeadlineItems.length; i++) {
    if (Number(cateHeadlineItems[i].getAttribute('data-value')) === navigator) {
      cateHeadlineItems[i].style.color = '#c00009';
    }
  }

  handleNavigateToNewslistPage('news-tag', 17);
};

initNewslistPage();
