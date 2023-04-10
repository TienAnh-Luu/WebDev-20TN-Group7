export const HomepageHeadline = (text) =>
  `<div class="main__highlight-headline"><a href='' class="headline-text">${text}</a></div>`;

export const NewsListHeadline = (cate, tag = '') => {
  const subKeys = Object.keys(cate.subs);

  return `<div class="newslist-headline">
        <a href="../../../../source/pages/NewslistPage.html" class="cate-headline-text" id="cate-headline" data-value=${
          cate.id
        }>${cate.label}</a>
        ${
          tag !== '' // if render tag news
            ? `<a href="../../../../source/pages/NewslistPage.html" class="subcate-headline-text" data-value=${tag}>${tag}</a>`
            : `<a href="../../../../source/pages/NewslistPage.html" class="subcate-headline-text" data-value=${
                cate.subs[subKeys[0]].id
              }>${cate.subs[subKeys[0]].label}</a>
        <a href="../../../../source/pages/NewslistPage.html" class="subcate-headline-text" data-value=${
          cate.subs[subKeys[1]].id
        }>${cate.subs[subKeys[1]].label}</a>`
        }
        </div>
    `;
};
