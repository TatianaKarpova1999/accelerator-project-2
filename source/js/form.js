const form = document.querySelector('.form__content');
const formInput = form.querySelectorAll('.form__input');
const submitButton = document.querySelector('.form__button');

submitButton.addEventListener('click', () => {
  formInput.forEach ((input) => {
    if(!input.checkValidity()) {
      input.classList.add('form__input--error');
    } else {
      input.classList.remove('form__input--error');
    }
  });
});
