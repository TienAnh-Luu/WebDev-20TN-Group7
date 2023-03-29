import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import GoTopBtn from './components/GoTopButton/GoTopButton.js';
import Features from './components/Features/Features.js';
import * as utilsHTML from './utils/htmlElements.js';
import Highlight from './components/Highlight.js';

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  utilsHTML.handleSticky();
};

// Function to load details inside header
// const loadHeader = () => {
//   const header = document.getElementById('header');
//   header.innerHTML = `
//     ${TopHeader}
//     ${MiddleHeader}
//   `;
// };

const loadMainContent = () => {
  const content = document.getElementById('content');
  content.insertBefore(utilsHTML.createElementFromHTML(Features), content.firstChild);
  content.appendChild(utilsHTML.createElementFromHTML(Highlight('XEM NHIỀU')));
  content.appendChild(utilsHTML.createElementFromHTML(Highlight('MỚI NHẤT')));
  content.appendChild(utilsHTML.createElementFromHTML(Highlight('TOP 10 CHUYÊN MỤC')));
};

// function to load details inside footer and go-top button
const loadFooter = () => {
  const footerSection = document.getElementById('footer');
  footerSection.innerHTML = `
    ${Footer}
  `;

  const root = document.getElementById('root');
  root.appendChild(utilsHTML.createElementFromHTML(GoTopBtn));
};

loadHeader();
loadMainContent();
loadFooter();

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
`;
