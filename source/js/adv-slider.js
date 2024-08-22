import Swiper from 'swiper';
import 'swiper/css';
import {Navigation} from 'swiper/modules';

new Swiper('.adv-swiper', {
  modules: [Navigation],
  loop: true,

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
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
  }
});

