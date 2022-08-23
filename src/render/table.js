import { getPowerTileRenderElement } from './powerTile';
import { CELL_CLASS_NAME } from './constants';
import { CELL_TYPE } from '../constants';
import { getClassByCellType } from './helper';

/**
 * Создаём таблицу для приложения.
 */
export function buildTable(matrix) {
    const tableElement = document.createElement('table');

    matrix.forEach((rowList, index) => {
        const rowElement = document.createElement('tr');
        rowElement.setAttribute('data-order', index);

        rowList.forEach(item => {
            const cellElement = buildTD.call(this, item);

            rowElement.appendChild(cellElement);
        });
        tableElement.appendChild(rowElement);
    });

    return tableElement;
}

export function buildTD(item) {
    const onClickHandler = this.handler;
    const tdHandler = function(event) {
        return onClickHandler(event, this);
    }
    const cellElement = document.createElement('td');
    const content = getPowerTileRenderElement(item);

    cellElement.appendChild(content);
    cellElement.addEventListener('click', tdHandler);
    cellElement.className = getClassForTD(item);
    setAttributeInCell(cellElement, item);

    return cellElement;
}

const getClassForTD = item => {
    const availableType = [CELL_TYPE.WAITING_SELECT];
    let result = CELL_CLASS_NAME.WRAP;

    if (availableType.includes(item.type)) {
        result = `${result} ${getClassByCellType(item.type)}`;
    }

    return result;
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