import Swiper from 'swiper';
import 'swiper/css';
import {Navigation} from 'swiper/modules';

new Swiper('.swiper-tours', {
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
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 18,
    },

    1440: {
      allowTouchMove: false,
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 30,
    }
  }
});
