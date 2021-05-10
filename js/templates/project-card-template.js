export const projectCardTemplate = (data) => {
  const DESCRIPTION_LENGTH = 57;
  const getTechnologies = (data) => {
    return data.technology.join(`, `);
  }

  return `<li class="grid__column-3">
    <article class="project-card">
      <div class="project-card__container">
        <div class="project-card__link-container project-card__link-container--upper">
          <a class="link" href="${data.hostingLink}">
            <span class="hidden-tablet">Ссылка на хостинг</span>
            <span class="hidden-desktop">Хостинг</span>
          </a>
        </div>
        <picture>
          <source type="image/webp" srcset="img/${data.image}.webp">
          <img src="img/${data.image}.png" width="312" height="312" alt="${data.alt}">
        </picture>
        <div class="project-card__link-container project-card__link-container--down">
          <a class="link" href="${data.githiubLink}" target="_blank"><span class="hidden-tablet">Ссылка на </span>Github</a>
        </div>
      </div>
      <h4 class="title title--sm">${data.title}</h4>
      <p class="paragraph b-500">${getTechnologies(data)}</p>
      <p class="paragraph">${data.description.length > DESCRIPTION_LENGTH ? data.description.slice(0, DESCRIPTION_LENGTH) + `...` : data.description}
      </p>
      ${data.description.length > DESCRIPTION_LENGTH ? `<button class="link" href="#" data-id="${data.id}">Показать полностью</button>` : ``}
    </article>
  </li>`
}