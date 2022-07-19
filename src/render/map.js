import { createDiv } from './helper';
import { CELL_CLASS_NAME } from './constants';

/**
 *
 * Куда именно всталвять созданные элементы определем по id.
 * @param {any} mapElement - DOM-элемент.
 * @param {array} matrix - массив с массивами с инфой о клетке.
 * @param {object} additionalInfo - дополнительная информация для рендера.
 */
export const renderTableByMatrix = (mapElement, matrix, additionalInfo) => {
    const tableElement = document.createElement('table');

    matrix.forEach(rowList => {
        const rowElement = document.createElement('tr');

        rowList.forEach(item => {
            const cellElement = document.createElement('td');

            /*if (additionalInfo.getContentRender) {
                const content = additionalInfo.getContentRender(item);
                cellElement.appendChild(content);
            }*/

            /*if (additionalInfo.handler) {
                cellElement.addEventListener(additionalInfo.handler.type, additionalInfo.handler.method);
            }*/

            cellElement.className = CELL_CLASS_NAME.WRAP;
            // setAttribute(cellElement, item);
            // rowElement.appendChild(cellElement);
        });
        tableElement.appendChild(rowElement);
    });

    return createDiv();
}