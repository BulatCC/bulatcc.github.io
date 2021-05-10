import {overlayShowHide, overlay} from './utils.js';

export const navToggle = () => {
  const navOpenButton = document.querySelector(`.nav__button`);
  const navCloseButton = document.querySelector(`.nav-list__button`);
  const navList = document.querySelector(`.nav-list`);

  const classChanger = () => {
    if (navList.classList.contains(`nav-list--active`)) {
      navList.classList.remove(`opacity-1`);
      overlayShowHide();
      setTimeout(() => {
        navList.classList.remove(`nav-list--active`);
      }, 200);
    } else {
      navList.classList.add(`nav-list--active`);
      overlayShowHide();
      setTimeout(() => {
        navList.classList.add(`opacity-1`);
      }, 10);
    }
  }

  navOpenButton.addEventListener(`click`, () => {
    classChanger();
  });

  navCloseButton.addEventListener(`click`, () => {
    classChanger();
  });

  navList.addEventListener(`click`, (evt) => {
    if (evt.target.tagName === `A` || evt.target.tagName === `Li`) {
      classChanger();
    }
  });

  overlay.addEventListener(`click`, () => {
    classChanger();
  });
}
