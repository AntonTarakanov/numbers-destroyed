import { RenderPioneer } from './Pioneer';
import { Header } from './components/Header';
import { COMMON_CLASS_NAMES, COMMON_DOM_IDS } from './constants';

/**
 * Базовые метода для создания приложения.
 * Шапка, поле приложения, информационное поле.
 */
export class RenderPioneerApp extends RenderPioneer {
    constructor(DOM_IDS) {
        super();

        this.DOM_IDS = DOM_IDS;

        this.headerInstance = this.getHeaderInstance();
        this.additionalFieldInstance = this.getAdditionalFieldInstance();
        this.appFieldInstance = this.getAppFieldInstance();
    }

    /**
     * Базовая пустая форма(appForm) с id:
     *  основное поле (appField)
     *  вспомогательное поле (additionalField)
     *  header
     */
    getAppFormNode() {
        const appNodeWrap = this.getDiv(COMMON_CLASS_NAMES.APP, this.DOM_IDS.root);
        const contentNode = this.getDiv(COMMON_CLASS_NAMES.JUSTIFY_CENTER);
        const appFieldNode = this.appFieldInstance.getAppFieldNode();
        const additionalFieldNode = this.additionalFieldInstance.getFieldNode();
        const headerNode = this.headerInstance.getHeaderNode(
            COMMON_CLASS_NAMES.HEADER, COMMON_CLASS_NAMES.HEADER_IMG, COMMON_DOM_IDS.HEADER
        );

        contentNode.append(appFieldNode, additionalFieldNode);
        appNodeWrap.append(headerNode, contentNode);

        return appNodeWrap;
    }

    getAppFieldInstance() {
        const divCreator = this.getDiv;

        return {
            getAppFieldNode: function() {
                return divCreator(COMMON_CLASS_NAMES.FLEX, COMMON_DOM_IDS.MAIN);
            }
        };
    }

    getHeaderInstance() {
        return new Header();
    }

    getAdditionalFieldInstance() {
        const divCreator = this.getDiv;

        return {
            getFieldNode: function() {
                return divCreator(null, COMMON_DOM_IDS.ADDITIONAL);
            }
        };
    }

    getAdditionalFieldNode() {
        return this.getElementById(COMMON_DOM_IDS.ADDITIONAL);
    }

    getHeaderNode() {
        return this.getElementById(COMMON_DOM_IDS.HEADER);
    }

    getAppFieldNode() {
        return this.getElementById(COMMON_DOM_IDS.MAIN);
    }
}