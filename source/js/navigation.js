const navigation = document.querySelector('.header__nav');
const navButton = document.querySelector('.header__toggle');
const menu = document.querySelector('.header__list');


navButton.addEventListener('click', interactiveMenu);
menu.addEventListener('click', () => {
  navigation.classList.remove('header__nav--open');
  navigation.classList.add('header__nav--close');
  navButton.classList.remove('header__toggle--open');
  navButton.classList.add('header__toggle--close');
  document.body.style.overflow = '';
});

function interactiveMenu () {
  if (navigation.className === 'header__nav header__nav--close') {
    navigation.classList.remove('header__nav--close');
    navigation.classList.add('header__nav--open');
    navButton.classList.remove('header__toggle--close');
    navButton.classList.add('header__toggle--open');
    document.body.style.overflow = 'hidden';
  } else {
    navigation.classList.remove('header__nav--open');
    navigation.classList.add('header__nav--close');
    navButton.classList.remove('header__toggle--open');
    navButton.classList.add('header__toggle--close');
    document.body.style.overflow = '';
  }
}
