import { getDiv, getEmptyDiv } from './utils';
import { getHeader } from './components/header';
import { COMMON_CLASS_NAMES, COMMON_DOM_IDS } from './constants';

/**
 * TODO: необходимо добавить возможность заменять иконки.
 *
 *
 */
export class RenderHelper {

    /**
     * TODO: необходимо реализовать корректное изменение встроенных классов/идентификаторов.
     *
     *
     */
    constructor(handler, config, isDev = false) {
        this.DOM_IDS = config.DOM_IDS;
        this.USE_TABLE = config.USE_TABLE;
        this.handler = handler;
        this.isDev = isDev;
    }

    /**
     * Базовая пустая форма с id:
     *  основное поле
     *  вспомогательное поле
     *  header
     */
    getBaseForm() {
        const appNode = getDiv(COMMON_CLASS_NAMES.APP, this.DOM_IDS.root);
        const contentNode = getDiv(COMMON_CLASS_NAMES.JUSTIFY_CENTER);
        const mainNode = getDiv(COMMON_CLASS_NAMES.FLEX, COMMON_DOM_IDS.MAIN);
        const additionalNode = getDiv(null, COMMON_DOM_IDS.ADDITIONAL);

        const headerNode = this.getHeader();

        contentNode.append(mainNode, additionalNode);
        appNode.append(headerNode, contentNode);

        return appNode;
    }

    getAdditionalNode() {
        return this.getElementById(COMMON_DOM_IDS.ADDITIONAL);
    }

    getHeader() {
        return getHeader(COMMON_CLASS_NAMES.HEADER, COMMON_CLASS_NAMES.HEADER_IMG, COMMON_DOM_IDS.HEADER);
    }

    getElementById(id) {
        return document.getElementById(id);
    }

    getDiv(className, id, text, child) {
        return getDiv(className, id, text, child);
    }

    getEmptyDiv() {
        return getEmptyDiv();
    }
}