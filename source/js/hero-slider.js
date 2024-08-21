import Swiper from 'swiper';
import 'swiper/css';
import {Pagination} from 'swiper/modules';

new Swiper('.hero-swiper', {
  modules: [Pagination],
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      allowTouchMove: true,
      pagination: false,
    },

    768: {
      allowTouchMove: true,
      pagination: false,
    },

    1440: {
      allowTouchMove: false,
    }
  }
});
