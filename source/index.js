import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import GoTopBtn from './components/GoTopButton/GoTopButton.js';
import Features from './components/Features/Features.js';
import Highlight from './components/Highlight/Highlight.js';
import { handleSticky } from './utils/handleSticky.js';
import { CONTEXT } from './utils/constants.js';
import { addOnclickToClassname, addOnclickToHeaderItems, handleNavigateToNewslistPage } from './utils/addOnclick.js';

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  handleSticky();
};

const root = document.getElementById('root');
root.innerHTML = `
  ${Header}
  <main class="main" id="content">
    ${Features}
    ${Highlight(CONTEXT.MOST_VIEWED)}
    ${Highlight(CONTEXT.LATEST)}
    ${Highlight(CONTEXT.TOP10)}
  </main>
  ${Footer}
  ${GoTopBtn}
`;

const handleSeeMoreOnClick = (e) => {
  const id = e.target.id;
  const type = Number(id.slice(9));
  sessionStorage.setItem('navigator', type);
};

const initHomepage = () => {
  sessionStorage.setItem('navigator', CONTEXT.HOMEPAGE);

  addOnclickToHeaderItems();

  // Add onclick to see more buttons
  addOnclickToClassname('see-more-btn', handleSeeMoreOnClick);

  handleNavigateToNewslistPage('news-tag', 17);
};

initHomepage();
