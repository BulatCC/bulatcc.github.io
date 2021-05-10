import {projectCardTemplate} from '../templates/project-card-template.js';
import {sortButtonTemplate} from '../templates/sort-button-template.js';
import {render, classChanger} from './utils.js';

const filterButtonsContainer = document.querySelector('.button-list');
const projectCardsContainer = document.querySelector('.js-project-card-list');
const defaultFilterType = `All`;
let currentFilterType = defaultFilterType;
let currentActiveButton = null;
let previousActiveButton = null;


const getButtons = (data) => {
  let buttons = {};
  data.forEach((item) => {
    item.technology.forEach((techType) => {
      buttons[techType.toString()] = techType;
    })
  })
  return buttons;
}

const renderFilterButtons = (buttons) => {
  if (!buttons) {
    return;
  }

  filterButtonsContainer.insertAdjacentHTML('beforeend', sortButtonTemplate(defaultFilterType, true));
  const buttonsArr = Object.values(buttons).sort();
  render(buttonsArr, filterButtonsContainer, sortButtonTemplate);
  currentActiveButton = filterButtonsContainer.querySelector('.button--active');
}

const filteringData = (data, filterType) => {
  if (filterType === defaultFilterType) {
    return data;
  }

  let result = [];
  data.forEach((card) => {
    if (card.technology.includes(filterType)) {
      result.push(card.id);
    }
  });

  return data.filter((card) => {
    return result.includes(card.id);
  })
}

const showFullDescriptionHandler = (data) => {
  projectCardsContainer.addEventListener('click', (evt) => {
    if (evt.target.dataset.id) {
      let decriptionButton = evt.target;
      const descriptionNode = decriptionButton.previousSibling;
      descriptionNode.previousSibling.innerHTML = ``;
      let fullDescription = data.filter((card) => {
        return decriptionButton.dataset.id.includes(card.id);
      })
      descriptionNode.textContent = fullDescription[0].description;
      decriptionButton.remove();
      decriptionButton = null;
    }
  })
}

const renderFilteredProjectCards = (data) => {
  showFullDescriptionHandler(data);
  filterButtonsContainer.addEventListener('click', (evt) => {
    if (evt.target.tagName === 'BUTTON') {
      previousActiveButton = currentActiveButton;
      currentActiveButton = evt.target;
      classChanger(previousActiveButton, currentActiveButton, 'button--active');
      currentFilterType = evt.target.dataset.filter;
      let filteredData = filteringData(data, currentFilterType);
      projectCardsContainer.innerHTML = ``;
      render(filteredData, projectCardsContainer, projectCardTemplate);
    }
  })
}


export const renderFilterSection = (data) => {
  renderFilterButtons(getButtons(data));
  render(data, projectCardsContainer, projectCardTemplate);
  renderFilteredProjectCards(data);
}

