import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import GoTopBtn from './components/GoTopButton/GoTopButton.js';
import Features from './components/Features/Features.js';
import Highlight from './components/Highlight/Highlight.js';
import { handleSticky } from './utils/handleSticky.js';
import { CONTEXT, HIGHLIGHT_TYPE } from './utils/constants.js';

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  handleSticky();
};

const root = document.getElementById('root');
root.innerHTML = `
  ${Header}
  <main class="main" id="content">
    ${Features}
    ${Highlight(HIGHLIGHT_TYPE.MOST_VIEWED)}
    ${Highlight(HIGHLIGHT_TYPE.LATEST)}
    ${Highlight(HIGHLIGHT_TYPE.TOP10)}
  </main>
  ${Footer}
  ${GoTopBtn}
`;
