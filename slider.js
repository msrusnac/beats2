// const left = document.querySelector("#left");
// const right = document.querySelector("#right");
// const itemsList = document.querySelector("#items");

// const loop = (direction, e) => {
//   e.preventDefault();

//   if (direction === "right") {
//     itemsList.appendChild(itemsList.firstElementChild);
//   } else {
//     itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
//   }
// };

// right.addEventListener("click", (e) => {
//   loop("right", e);
// });

// left.addEventListener("click", (e) => {
//   loop("left", e);
// });


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