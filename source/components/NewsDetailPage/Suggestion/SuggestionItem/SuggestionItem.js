const SuggestionItem = (data) => {
  return `
      <div class="suggestions-item-container">
          <img class="suggestions-item-thumbnail" src=${data.imgPath} alt="Thumbnail" />
          <p class="suggestions-item-title">${data.title}</p>
          <div class="suggestions-item-footer">
              <a href="../../../../../source/pages/NewslistPage.html" class="suggestions-item-cate">${data.cate}</a>
              <div class="suggestions-item-date">${data.date}</div>
          </div>
      </div>`;
};

export default SuggestionItem;
