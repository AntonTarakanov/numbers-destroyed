import { RenderPioneerApp } from './RenderPioneerApp';

import { COMMON_CLASS_NAMES, ATTRIBUTE_ORDER } from './constants';

export class RenderMatrix extends RenderPioneerApp {

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

    // TODO: Нужно удалить.
    getContentMethods() {
        return {
            getDiv: this.getDiv,
            getEmptyDiv: this.getEmptyDiv,
            getTile: this.buildDivTile,
            setAttributeInTile: this.setAttributeInTile,
            tileHandler: this.handler,
        };
    }

    /**
     * Создаём карту в виде таблицы для приложения.
     *
     * @param {array} matrix
     */
    buildDivMatrix(matrix) {
        const wrapElement = this.getDiv();

        wrapElement.className = COMMON_CLASS_NAMES.FLEX_COLUMN;

        matrix.forEach((row, index) => {
            const rowElement = this.getDiv();

            rowElement.setAttribute(ATTRIBUTE_ORDER, index);
            rowElement.className = COMMON_CLASS_NAMES.FLEX;

            // Сдвиг строк с power через одну.
            // TODO: нужно убрать в Power методы.
            if (index % 2 !== 0) {
                rowElement.className = `${rowElement.className} marginLeftMiddle`;
            }

            row.forEach(item => {
                const tile = this.buildDivTile(item);

                rowElement.appendChild(tile);
            });
            wrapElement.appendChild(rowElement);
        });

        return wrapElement;
    }

    buildDivTile() {
        return this.getDiv();
    }
}