
  var mySwiper = new Swiper('.swiper-container', {
    // Other Swiper options...
    loop: true,
    mousewheel: {
      enabled: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      reachEnd: function () {
        // When the last slide is reached, disable mousewheel and scroll to a new section
        mySwiper.mousewheel.disable();
      },
    },
  });


const phaseSlide = new Swiper('.phaseSlide', {

  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});
