import { CELL_CLASS_NAME } from './constants';
import { getPowerTileRenderElement } from './powerTile';

/**
 *
 * @param {object} dataTools
 * @param {any} onClickHandler
 */
export const getRenderTableByMatrix = (dataTools, onClickHandler) => {
    const tableElement = document.createElement('table');
    const handler = function(event) {
        return onClickHandler(event, dataTools, this);
    }

    // TODO: map - заменить из-за нативного свойства.
    dataTools.map.forEach(rowList => {
        const rowElement = document.createElement('tr');

        rowList.forEach(item => {
            const cellElement = document.createElement('td');
            const content = getPowerTileRenderElement(item);

            cellElement.appendChild(content);
            cellElement.addEventListener('click', handler);
            cellElement.className = CELL_CLASS_NAME.WRAP;
            setAttributeInCell(cellElement, item);

            rowElement.appendChild(cellElement);
        });
        tableElement.appendChild(rowElement);
    });

    return tableElement;
}

/**
 * TODO: всё нужно переделать.
 * Устанавливаем атрибуты для клетки.
 * @param {object} cellElement - DOM-элемент клетки таблицы.
 * @param {object} attribute - атрибуты.
 * @param {string} prefix -
 */
const setAttributeInCell = (cellElement, attribute, prefix) => {
    for (let key in attribute) {
        if (attribute.hasOwnProperty(key)) {
            const currentValue = attribute[key];

            if (typeof currentValue === 'object' && currentValue !== null) {
                setAttributeInCell(cellElement, currentValue, key);
            } else {
                cellElement.setAttribute(`data-${prefix ? prefix + '-' : ''}${key}`, attribute[key]);
            }
        }
    }
}