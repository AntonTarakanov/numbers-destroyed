import { COMMON_CLASS_NAMES } from '../constants';

/**
 * Создаём карту в виде таблицы для приложения.
 *
 * @param {array} matrix
 * @param {object} contentMethods - методы рендера для контента.
 */
export function buildDivMatrix(matrix, contentMethods) {
    const wrapElement = contentMethods.getDiv();

    wrapElement.className = COMMON_CLASS_NAMES.FLEX_COLUMN;

    matrix.forEach((row, index) => {
        const rowElement = contentMethods.getDiv();

        rowElement.setAttribute('data-order', index);
        rowElement.className = COMMON_CLASS_NAMES.FLEX;

        // Сдвиг строк с power через одну.
        if (index % 2 !== 0) {
            rowElement.className = `${rowElement.className} marginLeftMiddle`;
        }

        row.forEach(item => {
            const tile = contentMethods.getTile(item, contentMethods);

            rowElement.appendChild(tile);
        });
        wrapElement.appendChild(rowElement);
    });

    return wrapElement;
}