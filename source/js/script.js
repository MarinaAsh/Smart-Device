let BODY_ELEMENT = document.querySelector('body');
let CALLBACK_BUTTON_ELEMENT = document.querySelector('.header__button');
let POPUP_ELEMENT = document.querySelector('.modal');
let X_CLOSE_ELEMENT = POPUP_ELEMENT.querySelector('.modal__close');
let USER_NAME_ELEMENT = POPUP_ELEMENT.querySelector('[name=name]');
let KEY_CODE_ESC = 27;
let KEY_CODE_ENTER = 13;

function openPopup() {
  POPUP_ELEMENT.classList.add('modal--show');
  USER_NAME_ELEMENT.focus();
  BODY_ELEMENT.classList.add('noscroll');
}

function closePopup() {
  if (POPUP_ELEMENT.classList.contains('modal--show')) {
    POPUP_ELEMENT.classList.remove('modal--show');
    BODY_ELEMENT.classList.remove('noscroll');
  }
}

CALLBACK_BUTTON_ELEMENT.addEventListener('click', function (evt) {
  evt.preventDefault();
  openPopup();
});

X_CLOSE_ELEMENT.addEventListener('click', function () {
  closePopup();
});

X_CLOSE_ELEMENT.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_CODE_ENTER) {
    closePopup();
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_CODE_ESC) {
    closePopup();
  }
});

POPUP_ELEMENT.addEventListener('click', function () {
  closePopup();
});

function onToggle(event) {
  if (event.target.open) {
    document.querySelectorAll('.footer__nav > details[open] ').forEach((el) => {
      // Исключаем из перебора елемент который мы только что открыли
      if (el === event.target) {
        return;
      }

      // Закрываем все остальные елементы <details>
      el.open = false;
    });
  }
}

// Вешаем наблюдатель на все елементы <details> внутри акордиона
document.querySelectorAll('.footer__nav > details').forEach((el) => el.addEventListener('toggle', onToggle));
