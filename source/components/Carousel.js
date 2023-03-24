import CarouselItem from './CarouselItem.js';

const elementList = (data) =>
  data.map((d) => {
    const isActive = d.id === data[0].id;
    return CarouselItem(d, isActive);
  });

const Carousel = (data) => `
<div class="main__features-carousel">
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    ${elementList(data).join('\n')}
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
`;

export default Carousel;
