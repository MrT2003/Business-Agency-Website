// SLIDER
const sliders = document.querySelector("[data-slider]");
const initSlider = function (currentSlider) {
  const sliderContainer = currentSlider.querySelector(
    "[data-slider-container]"
  );
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  //   Thiết lập vị trí hiện tại
  let currentSliderPos = 0;

  const moveSliderItem = function () {
    // chỗ nãy
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSliderPos].offsetLeft}px)`;
  };

  // Next Slide
  const slideNext = function () {
    // chỗ này
    const slideEnd = currentSliderPos >= sliderContainer.childElementCount - 1;
    if (slideEnd) {
      currentSliderPos = 0;
    } else {
      currentSliderPos++;
    }
    moveSliderItem();
  };
  sliderNextBtn.addEventListener("click", slideNext);

  // Previous Slide
  const slidePrev = function () {
    if (currentSliderPos <= 0) {
      currentSliderPos = sliderContainer.childElementCount - 1;
    } else {
      currentSliderPos--;
    }
    moveSliderItem();
  };
  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }
};
for (let i = 0, len = sliders.length; i < len; i++) {
  initSlider(sliders[i]);
}
