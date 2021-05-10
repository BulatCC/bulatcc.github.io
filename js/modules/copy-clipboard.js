import {tooltipShow} from "./tooltip.js"

export const copyClipboard = () => {
  const copyBlocks = document.querySelectorAll(`.js-text-copy`);

  if (copyBlocks) {
    copyBlocks.forEach((copyBlock) => {
      const copyButton = copyBlock.querySelector(`.copy-button`);
      const text = copyBlock.querySelector(`.js-copy-frame`);

      const copyText = (button, text) => {
        button.addEventListener(`click`, () => {
          const range = document.createRange();
          range.selectNode(text);
          window.getSelection().addRange(range);
          try {
            const success = document.execCommand(`copy`);
            if (!copyBlock.querySelector('.tooltip-container') && success === true) {
              tooltipShow(copyBlock, `Скопированно`);
            }
          } catch(err) {
            tooltipShow(copyBlock, `Не удалось скопировать`);
          }
            window.getSelection().removeAllRanges();
        });
      };

      if (copyButton && text) {
        copyText(copyButton, text);
      }
    });
  }
}



