export const overlay = document.querySelector('.overlay');

export const overlayShowHide = () => {
  const body = document.querySelector('body');

  if (overlay.classList.contains('overlay--show')) {
    overlay.classList.remove('overlay--show');
    body.classList.remove('noscroll');
  } else {
    overlay.classList.add('overlay--show');
    overlay.style.top = window.pageYOffset + `px`;
    body.classList.add('noscroll');
  }
}

export const render = (dataArr, container, template) => {
  dataArr.forEach((data) => {
    container.insertAdjacentHTML('beforeend', template(data));
  });
}

export const classChanger = (previous, current, className) => {
  previous.classList.remove(className);
  current.classList.add(className);
}