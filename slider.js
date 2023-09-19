


const slider = $('.products').bxSlider({
  pager: false,
  controls: false
});

$('.product-slider__arow--prev').click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
})

$('.product-slider__arow--next').click(e => {
  e.preventDefault();
  slider.goToNextSlide();
})