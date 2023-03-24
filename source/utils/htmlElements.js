export function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}

export const handleSticky = () => {
  // Get the header
  const header = document.getElementById('sticky-header');

  // Get the offset position of the navbar
  const sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky-header');
  } else {
    header.classList.remove('sticky-header');
  }
};
