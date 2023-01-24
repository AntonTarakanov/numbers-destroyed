import { getDiv, getEmptyDiv } from './utils';
import { getHeader } from './components/Header';
import { COMMON_CLASS_NAMES, COMMON_DOM_IDS } from './constants';
import { buildDivMatrix } from './components/DivMatrix';

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

    /**
     * Устанавливаем атрибуты для клетки.
     *
     * @param {object} tileElement - DOM-элемент клетки.
     * @param {object} attribute - атрибуты.
     * @param {string} prefix -
     */
    setAttributeInTile(tileElement, attribute, prefix) {
        for (let key in attribute) {
            if (attribute.hasOwnProperty(key)) {
                const currentValue = attribute[key];

                if (typeof currentValue === 'object' && currentValue !== null) {
                    this.setAttributeInTile(tileElement, currentValue, key);
                } else {
                    tileElement.setAttribute(`data-${prefix ? prefix + '-' : ''}${key}`, attribute[key]);
                }
            }
        }
    }

    // COMPONENTS

    getContentMethods() {
        return {
            getDiv: this.getDiv,
            getEmptyDiv: this.getEmptyDiv,
            getTile: this.buildDivTile,
            setAttributeInTile: this.setAttributeInTile,
            tileHandler: this.handler,
        };
    }

    buildDivMatrix(matrix) {
        return buildDivMatrix(matrix, this.getContentMethods());
    }

    buildDivTile() {
        return this.getDiv();
    }
}