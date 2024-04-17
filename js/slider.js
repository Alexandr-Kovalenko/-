const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dot");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");
const sliderPositionInfo = document.querySelector(".carousel-position");

let activeSlideIndex = 0;

const getInitSliderValue = () => {
  slides[activeSlideIndex].classList.add("active");
  dots[activeSlideIndex].classList.add("active");
};

const setSliderPositionInfo = () => {
  sliderPositionInfo.innerHTML = `${activeSlideIndex + 1} / ${slides.length}`;
};

const handleChangeActiveSlide = (index) => {
  for (let slide of slides) {
    if (slide.classList.contains("active")) {
      slide.classList.remove("active");
    }
  }
  slides[index].classList.add("active");
  setSliderPositionInfo();
};

const handleChangeActiveDot = (index) => {
  for (let dot of dots) {
    if (dot.classList.contains("active")) {
      dot.classList.remove("active");
    }
  }
  dots[index].classList.add("active");
};

const handleNextSlide = () => {
  if (activeSlideIndex === slides.length - 1) {
    activeSlideIndex = 0;
  } else {
    activeSlideIndex++;
  }
  handleChangeActiveSlide(activeSlideIndex);
  handleChangeActiveDot(activeSlideIndex);
};

const handlePrevSlide = () => {
  if (activeSlideIndex === 0) {
    activeSlideIndex = slides.length - 1;
  } else {
    activeSlideIndex--;
  }
  handleChangeActiveSlide(activeSlideIndex);
  handleChangeActiveDot(activeSlideIndex);
};

getInitSliderValue();
setSliderPositionInfo();

nextBtn.addEventListener("click", handleNextSlide);
prevBtn.addEventListener("click", handlePrevSlide);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    activeSlideIndex = index;
    handleChangeActiveSlide(activeSlideIndex);
    handleChangeActiveDot(activeSlideIndex);
  });
});
