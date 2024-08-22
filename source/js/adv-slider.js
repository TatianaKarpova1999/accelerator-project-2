import Swiper from 'swiper';
import 'swiper/css';
import {Navigation} from 'swiper/modules';

let swiper;

function resizeScrenn() {
  if (window.innerWidth >= 1440) {
    swiper = new Swiper('.adv-swiper', {
      modules: [Navigation],
      loop: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      allowTouchMove: false,
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 30,
    });
  }
  if (window.innerWidth < 1440) {
    swiper.destroy();
  }
}

resizeScrenn();

window.addEventListener('resize', () => {
  resizeScrenn();
});

