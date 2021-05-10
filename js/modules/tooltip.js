import  {tooltipTemplate} from "../templates/tooltip-template.js"

export const tooltipShow = (container, text) => {
  container.insertAdjacentHTML(`beforeend`, tooltipTemplate(text));
  let tooltipContainer = container.querySelector(`.tooltip-container`);
  let tooltip = tooltipContainer.querySelector(`.tooltip`);
  setTimeout(() => {
    tooltip.classList.add('tooltip--active');
  }, 10);

  setTimeout(() => {
    tooltip.classList.remove('tooltip--active');
  }, 1000);
  
  setTimeout(() => {
    tooltipContainer.remove();
    tooltipContainer = null;
    tooltip = null;
  }, 1200);
}

