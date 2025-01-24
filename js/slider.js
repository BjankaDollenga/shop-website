document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".slider-nav.prev");
  const nextButton = document.querySelector(".slider-nav.next");

  let currentIndex = 0;
  let slidesPerView = 1;

  const updateSlidesPerView = () => {
    if (window.innerWidth >= 1024) {
      slidesPerView = 3;
    } else if (window.innerWidth >= 640) {
      slidesPerView = 2;
    } else {
      slidesPerView = 1;
    }
  };

  const updateSlider = () => {
    const slideWidth = slides[0].offsetWidth + 32;
    const newPosition = -currentIndex * slideWidth;
    sliderWrapper.style.transform = `translateX(${newPosition}px)`;

    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex >= slides.length - slidesPerView;
  };

  const handleResize = () => {
    updateSlidesPerView();
    updateSlider();
  };

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - slidesPerView) {
      currentIndex++;
      updateSlider();
    }
  });

  updateSlidesPerView();
  updateSlider();
  window.addEventListener("resize", handleResize);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevButton.click();
    } else if (e.key === "ArrowRight") {
      nextButton.click();
    }
  });
});