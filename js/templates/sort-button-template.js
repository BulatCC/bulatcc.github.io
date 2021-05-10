export const sortButtonTemplate = (text, isActive) => {
  return `<li class="button-list__item">
    <button class="button button--oval ${isActive ? `button--active` : ``}" data-filter="${text}">${text}</button>
  </li>`;
};

