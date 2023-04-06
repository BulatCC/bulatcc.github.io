import { createElement } from "../utils.js";
import { logTemplate, toastTempalte } from "./templates.js";

export class htmlGenerator {
    constructor(htmlTemplate, params) {
        this.htmlTemplate = htmlTemplate;
        this.displayParams = params.displayParams;
        this.positionParams = params.positionParams;
        this.title = params.title;
        this.events = params.events;
        this.element = null;
        this.renderContainer = document.querySelector('[data-render-container]');
        this.toastContainer = document.querySelector('[data-toast-container]');
    }

    init() {
        this.renderElement();
        this.logParams();
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.htmlTemplate(this.displayParams, this.positionParams, this.title));
        }
        return this.element;
    }

    addHandlers() {
        this.events.forEach(event => {
            this.getElement().addEventListener(event, () => {
                this.showToast(event);
            });
        });
    }

    logParams() {
        const logger = logTemplate(this.displayParams, this.positionParams, this.title, this.events);
        this.renderContainer.append(createElement(logger));
    }

    showToast(eventName) {
        const toast = toastTempalte(eventName);
        this.toastContainer.append(createElement(toast));
        setTimeout(() => { 
            const toastDom = this.toastContainer.querySelector('.toast');
            toastDom.remove();
        }, 2000);
    }

    renderElement() {
        const element = this.getElement();
        this.addHandlers();
        this.renderContainer.append(element);
    }
}
