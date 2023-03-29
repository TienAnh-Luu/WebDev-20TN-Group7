export const handleSticky = () => {
  // Get the header
  const header = document.getElementById('sticky');

  // Get the offset position of the navbar
  const sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};
