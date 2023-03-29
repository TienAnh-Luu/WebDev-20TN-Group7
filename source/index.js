import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import GoTopBtn from './components/GoTopButton/GoTopButton.js';
import Features from './components/Features/Features.js';
import Highlight from './components/Highlight/Highlight.js';
import { handleSticky } from './utils/handleSticky.js';

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  handleSticky();
};

const root = document.getElementById('root');
root.innerHTML = `
  ${Header}
  <main class="main" id="content">
    ${Features}
    ${Highlight('XEM NHIỀU')}
    ${Highlight('MỚI NHẤT')}
    ${Highlight('TOP 10 CHUYÊN MỤC')}
  </main>
  ${Footer}
  ${GoTopBtn}
`;
