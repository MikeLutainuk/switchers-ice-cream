// const gallerySlides = document.querySelectorAll(".gallery__item");
// let currentGallerySlide = 0;
// let galleryInterval;

// function gallary() {
//   galleryInterval = setInterval(function () {
//     currentGallerySlide = currentGallerySlide < gallerySlides.length - 1 ? ++currentGallerySlide : 0;
//     changeGallerySlide(currentGallerySlide);
//   }, 2000);
// }
// gallary();

// function changeGallerySlide(num) {
//   for (let i = 0; i < gallerySlides.length; i++) {
//     gallerySlides[i].classList.remove("active");
//   }
//   gallerySlides[num].classList.add("active");
// }
const swiper = new Swiper('.swiper-gallery', {
    effect: 'fade',
    // loop: true,
    // loopedSlides: 8,
    autoplay: {
      delay: 1000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    }
  });