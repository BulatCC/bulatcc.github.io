export const headerScroll = () => {
  const headerElement = document.querySelector('.header');

  document.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
      headerElement.classList.add('header--shadow');
    }

    if (window.pageYOffset <= 0) {
      headerElement.classList.remove('header--shadow');
    }
  })
}