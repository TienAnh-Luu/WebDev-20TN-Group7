export const addOnclickToClassname = (classname, handleOnclick) => {
  const items = document.getElementsByClassName(classname);
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (e) => handleOnclick(e));
  }
};
