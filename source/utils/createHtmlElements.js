import NewsItem from '../../source/components/NewsItem/NewsItem.js';
import NavItem from '../../source/components/DashboardPage/Navbar/NavItem.js';

export const dataToNewsItemList = (data) => data.map((d) => NewsItem(d));

export const dataToNavItemList = (data) => data.map((d) => NavItem(d));

export function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}
