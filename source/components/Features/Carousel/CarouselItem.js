// Data type:
/**
 * {
      id: '',    
      imgPath: '',
      url: '',
      title: '',
      summary: '',
      tag: '',
    }
 */

const CarouselItem = (data, isActive) => `
<a href=${data.url} class="carousel-item ${isActive ? 'active' : ''}">
    <div class="custom-carousel-item">
        <div class="carousel-thumbnail-container zoom-hover">
            <img class="carousel-thumbnail" src=${data.imgPath} alt="Carousel thumbnail" />
        </div>
        <div class="carousel-info">
            <h5 class="carousel-title">${data.title}</h5>
            <p class="carousel-summary">
            ${data.summary}
            </p>
        </div>
        <div class="news-tag">${data.category}</div>
    </div>
</a>
`;

export default CarouselItem;
