import Swiper from 'swiper';
import 'swiper/css';
import {Navigation} from 'swiper/modules';

new Swiper('.instructors-swiper', {
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
      initialSlide: 2,
    },

    768: {
      allowTouchMove: true,
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 21,
    },

    1440: {
      allowTouchMove: false,
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 20,
    }
  }
});
