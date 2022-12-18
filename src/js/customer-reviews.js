const slides = document.querySelectorAll(".customer-reviews__item");
const navs = document.querySelectorAll(".customer-reviews__nav");
let currentSlide = 0;


function changeSlide(num) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    navs[i].classList.remove("active");
  }
  slides[num].classList.add("active");
  navs[num].classList.add("active");
}
for (let nav of navs) {
  nav.onclick = () =>  {
    currentSlide = +nav.dataset.slide;
    changeSlide(currentSlide);
  };
}