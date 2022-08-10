import { DOM_ID } from './constants';

/**
 *
 */
export class RenderHelper {
    constructor(domIds, handlers) {
        this.DOM_IDS = domIds;
        this.handlers = handlers;
    }

    /**
     * Базовая пустая форма с картой, логированием, ID-элементов для дальнейшего добавления элементов.
     */
    getBaseForm() {
        const appElem = this.getEmptyDiv();
        const map = this.getEmptyDiv();

        map.className = 'flex';
        map.id = DOM_ID.COMMON_MAP;
        appElem.id = this.DOM_IDS.root;
        appElem.className = 'application flex';
        appElem.appendChild(map);

        return appElem;
    }

    createApp() {
        return document.body.appendChild(this.getBaseForm());
    }

    getEmptyDiv() {
        return document.createElement('div');
    }

    createFullMapByMatrix(data) {

    }
}