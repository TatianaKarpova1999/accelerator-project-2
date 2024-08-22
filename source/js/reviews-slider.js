import Swiper from 'swiper';
import 'swiper/css';
import {Navigation} from 'swiper/modules';

new Swiper('.reviews-swiper', {
  modules: [Navigation],
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      allowTouchMove: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },

    768: {
      allowTouchMove: true,
      slidesPerView: 1.2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },

    1440: {
      allowTouchMove: false,
      slidesPerView: 1.7,
      slidesPerGroup: 1,
      spaceBetween: 120,
    }
  }
});
