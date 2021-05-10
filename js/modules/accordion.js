export const accordeonInit = () => {
  const accordions = document.querySelectorAll(`.accordion`);
  let currentAccordion = null;

  const closeAccordions = (accordionList) => {
    accordionList.forEach((accordion) => {
      if (accordion.classList.contains('accordion__item--active')) {
        accordion.classList.remove('accordion__item--active');
        accordion.querySelector('.accordion__wrapper').style.maxHeight = null;
      }
    })
  }
  
  accordions.forEach((accordion) => {
    accordion.addEventListener(`click`, (evt) => {
      const accordionItem = evt.target.closest('.accordion__item');
      const accordionItems = accordion.querySelectorAll('.accordion__item');
      const accordionTitle = accordionItem.querySelector('.title');
      const accordionWrapper = accordionItem.querySelector('.accordion__wrapper');
      const accordionContentHeight = accordionItem.querySelector('.accordion__content').offsetHeight;

      if (evt.target === accordionTitle || evt.target.closest('.title')) {
        if (currentAccordion) {
          closeAccordions(accordionItems);
        }

        if (accordionItem === currentAccordion) {
          currentAccordion = null;
          closeAccordions(accordionItems);
          return;
        }
        accordionItem.classList.add('accordion__item--active');
        accordionWrapper.style.maxHeight = accordionContentHeight + 'px';
        currentAccordion = accordionItem;
      }
    })
  })
}

