import Highlight from '../../source/components/Highlight/Highlight.js';

export const addOnclickToClassname = (classname, func) => {
  const items = document.getElementsByClassName(classname);
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (e) => func(e));
  }
};

export const addOnclickToIds = (ids, handleOnclick) => {
  for (let i = 0; i < ids.length; i++) {
    ids[i].addEventListener('click', (e) => handleOnclick(e));
  }
};

export const addOnclickToHeaderItems = () => {
  const items = document.getElementsByClassName('header-item');
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (e) => {
      sessionStorage.setItem('navigator', e.target.dataset.value);
      // e.target.style.backgroundColor = 'rgba(255,255,255,0.25)';
    });
  }
};

export const addOnclickToCateHeadline = () => {
  const cateItem = document.getElementById('cate-headline');
  cateItem?.addEventListener('click', (e) => {
    sessionStorage.setItem('navigator', e.target.dataset.value);
  });

  const subCateItems = document.getElementsByClassName('subcate-headline-text');
  for (let i = 0; i < subCateItems.length; i++) {
    subCateItems[i].addEventListener('click', (e) => {
      sessionStorage.setItem('navigator', e.target.dataset.value);
    });
  }
};
