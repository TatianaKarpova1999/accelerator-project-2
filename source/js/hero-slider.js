import Swiper from 'swiper';
import 'swiper/css';
import {Pagination} from 'swiper/modules';

new Swiper('.hero-swiper', {
  modules: [Pagination],
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    320: {
      allowTouchMove: true,
    },

    768: {
      allowTouchMove: true,
    },

    1440: {
      pagination: {
        clickable: true,
      },
      allowTouchMove: false,
    }
  }
});
