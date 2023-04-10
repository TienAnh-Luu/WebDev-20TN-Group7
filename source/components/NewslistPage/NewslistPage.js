import Highlight from '../../../source/components/Highlight/Highlight.js';
import Header from '../../../source/components/Header/Header.js';
import Footer from '../../../source/components/Footer/Footer.js';
import { handleSticky } from '../../../source/utils/handleSticky.js';
import { addOnclickToCateHeadline, addOnclickToHeaderItems } from '../../../source/utils/addOnclick.js';

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  handleSticky();
};

const navigator = Number(sessionStorage.getItem('navigator'));

const root = document.getElementById('root');
root.innerHTML = `
    <div class="newslist-page">
        ${Header}
        <div class="newslist-main" id="newslist-main">
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
    // this is the parent cate of navigator or it is navigator
    if (navigator - Number(itemId) >= 0 && navigator - Number(itemId) < 3) {
      headerItems[i].style.backgroundColor = 'rgba(255,255,255,0.25)';
    }
  }

  const cateHeadlineItems = document.getElementsByClassName('subcate-headline-text');
  for (let i = 0; i < cateHeadlineItems.length; i++) {
    if (Number(cateHeadlineItems[i].getAttribute('data-value')) === navigator) {
      cateHeadlineItems[i].style.color = '#c00009';
    }
  }
};

initNewslistPage();
