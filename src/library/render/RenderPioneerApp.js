import { RenderPioneer } from './Pioneer';
import { getHeader } from './components/Header';
import { COMMON_CLASS_NAMES, COMMON_DOM_IDS } from './constants';

/**
 * Базовые метода для создания приложения.
 * Шапка, поле приложения, информационное поле.
 */
export class RenderPioneerApp extends RenderPioneer {
    constructor(handler, config, isDev = false) {
        super();

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
        const appNode = this.getDiv(COMMON_CLASS_NAMES.APP, this.DOM_IDS.root);
        const contentNode = this.getDiv(COMMON_CLASS_NAMES.JUSTIFY_CENTER);
        const mainNode = this.getDiv(COMMON_CLASS_NAMES.FLEX, COMMON_DOM_IDS.MAIN);
        const additionalNode = this.getDiv(null, COMMON_DOM_IDS.ADDITIONAL);

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
}