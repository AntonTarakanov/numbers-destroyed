import { createDiv, getClassByColor } from './helper';
import { CELL_CLASS_NAME } from './constants';

/**
 *
 * @param {array} matrix - массив с массивами с инфой о клетке.
 * @param {any} onClickHandler
 */
export const getRenderTableByMatrix = (matrix, onClickHandler) => {
    const tableElement = document.createElement('table');

    matrix.forEach(rowList => {
        const rowElement = document.createElement('tr');

        rowList.forEach(item => {
            const cellElement = document.createElement('td');
            const content = tileRender(item);

            cellElement.appendChild(content);
            cellElement.addEventListener('click', onClickHandler);
            cellElement.className = CELL_CLASS_NAME.WRAP;
            setAttributeInCell(cellElement, item);

            rowElement.appendChild(cellElement);
        });
        tableElement.appendChild(rowElement);
    });

    return tableElement;
}

/**
 * @param {any} item
 */
const tileRender = item => {
    const content = createDiv();
    let className = CELL_CLASS_NAME.COMMON;

    if (item.className) {
        className = `${className} ${item.className}`;
        delete item.className;
    }

    if (item.color) {
        const colorClass = getClassByColor(item.color);
        className = `${className} ${colorClass}`;
    }

    if (item.powerValue) {
        content.textContent = item.powerValue;
    }

    content.className = className;

    return content;
}

/**
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