import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

document.querySelector('.nojs').classList.remove('nojs');

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {
    initModals();
  });
});

const openModal = (triggerSelector, modalDataSelector) => {
  const trigger = document.querySelector(triggerSelector);
  const modal = document.querySelector(modalDataSelector);
  if (!trigger || !modal) {
    return;
  }
  trigger.addEventListener('click', (elem) => {
    elem.preventDefault();
    modal.classList.add('modal--active');
  });
};


openModal('.header__button', '.modal');

const closeModal = () => {
  const modals = document.querySelectorAll('.modal');
  if (!modals) {
    return;
  }
  modals.forEach((elem) => {
    elem.addEventListener('click', (el) => {
      if (
        el.target.closest('.modal__close')) {
        el.target.closest('.modal--active');
      }
    });
  });
};

closeModal();


// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
