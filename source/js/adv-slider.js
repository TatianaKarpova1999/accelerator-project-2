import Swiper from 'swiper';
import 'swiper/css';
import {Navigation} from 'swiper/modules';

new Swiper('.adv-swiper', {
  modules: [Navigation],
  loop: true,
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      allowTouchMove: false,
    },

    768: {
      allowTouchMove: false,
    },

    1440: {
      allowTouchMove: false,
      slidesPerView: 5,
      slidesPerGroup: 2,
      spaceBetween: 30,
      centeredSlides: true,
      initialSlide: 6,
    },
  }
});

