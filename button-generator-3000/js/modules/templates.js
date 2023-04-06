export const buttonTemplate = (displayParams, positionParams, title) => {
    return `<button class="btn ${displayParams.join(' ')} ${positionParams.join(' ')}">${title}</button>`;
};

export const logTemplate = (displayParams, positionParams, title, events) => {
    return `<p><b>Параметры отображения:</b> ${displayParams}
    <br>
    <b>Модификаторы:</b> ${positionParams}
    <br>
    <b>Текст:</b> ${title}
    <br>
    <b>События:</b> ${events}</p>`;
};

export const toastTempalte = (title) => {
    return `<div class="toast">${title}</div>`;
}
