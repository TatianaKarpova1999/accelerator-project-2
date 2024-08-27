import Swiper from 'swiper';
import 'swiper/css';
import {Navigation} from 'swiper/modules';

new Swiper('.swiper-gallery', {
  modules: [Navigation],
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      allowTouchMove: true,
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 4,
    },

    768: {
      allowTouchMove: true,
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 4,
    },

    1440: {
      allowTouchMove: false,
      slidesPerView: 5,
      spaceBetween: 5,
    },
  }
});


