import Swiper from 'swiper';
import 'swiper/css';
import {Pagination} from 'swiper/modules';

const swiper = document.querySelector('.hero-swiper');
const slide = swiper.querySelectorAll('.swiper-slide');
const pagination = swiper.querySelector('.swiper-pagination');

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

function checkActiveSlide() {
  slide.forEach((e) => {
    const button = e.querySelector('.slide__button');
    if (e.classList[3] === 'swiper-slide-active') {
      button.removeAttribute('tabindex');
    } else {
      button.setAttribute('tabindex', -1);
    }
  });
}

checkActiveSlide();

pagination.addEventListener('click', checkActiveSlide);
