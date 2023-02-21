import { RenderPioneerApp } from './RenderPioneerApp';
import { COMMON_CLASS_NAMES, ATTRIBUTE_ORDER } from './constants';

export class RenderMatrix extends RenderPioneerApp {
    constructor(handler, config, isDev) {
        super(config.DOM_IDS);

        this.USE_TABLE = config.USE_TABLE;
        this.handler = handler;
        this.isDev = isDev;
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

    /**
     * Создаём карту в виде DIV-таблицы для приложения.
     *
     * @param {array} matrix
     */
    buildDivMatrixNode(matrix) {
        const wrapElement = this.getDiv();

        wrapElement.className = COMMON_CLASS_NAMES.FLEX_COLUMN;

        matrix.forEach((row, index) => {
            const rowElement = this.buildRowNode(row, index);

            wrapElement.appendChild(rowElement);
        });

        return wrapElement;
    }

    buildRowNode(row, index) {
        const rowElement = this.getDiv();

        rowElement.setAttribute(ATTRIBUTE_ORDER, index);
        rowElement.className = COMMON_CLASS_NAMES.FLEX;

        row.forEach(item => {
            const tile = this.buildDivTileNode(item);

            rowElement.appendChild(tile);
        });

        return rowElement;
    }

    buildDivTileNode() {
        return this.getDiv();
    }

    /**
     * Создаём карту в виде таблицы(<table>) для приложения.
     *
     * @param {array} matrix
     */
    buildTableMatrixNode(matrix) {
        const tableElement = document.createElement('table');

        matrix.forEach((rowList, index) => {
            const rowElement = this.buildTableRowNode(rowList, index);

            tableElement.appendChild(rowElement);
        });

        return tableElement;
    }

    buildTableRowNode(rowList, index) {
        const rowElement = document.createElement('tr');
        rowElement.setAttribute(ATTRIBUTE_ORDER, index);

        rowList.forEach(item => {
            const cellElement = this.buildTableTileNode(item);

            rowElement.appendChild(cellElement);
        });

        return rowElement;
    }

    buildTableTileNode(item) {
        const onClickHandler = this.handler;
        const tdHandler = function(event) {
            return onClickHandler(event, this);
        }
        const cellElement = document.createElement('td');
        const content = this.buildTableTileContentNode();

        cellElement.appendChild(content);
        cellElement.addEventListener('click', tdHandler);
        this.setAttributeInTile(cellElement, item);

        return cellElement;
    }

    buildTableTileContentNode() {
        return this.getDiv();
    }
}