import { CELL_TYPE, CONNECT_TYPE } from '../../../constants';
import { Tile } from '../Tile';

export const MATRIX_NAME = 'simple';

/**
 * Квадрат с двумя связями.
 * Первый способ реализации для тестирования.
 *
 * @param {object} size - { x, y }.
 */
export const getSquareMatrix1 = (size) => {
    const result = [];

    for (let i = 0; i < size.y; i++) {
        let rowResult = [];
        for (let j = 0; j < size.x; j++) {
            const type = i % 2 === 0
                ? j % 2 === 0 ? CELL_TYPE.WAITING : CELL_TYPE.EMPTY
                : j % 2 === 0 ? CELL_TYPE.EMPTY : CELL_TYPE.WAITING;
            rowResult.push(new Tile({ x: j, y: i }, type));
        }

        /* Проставляем верхние связи слева. */
        if (result.length) {
            rowResult.forEach((item, index) => {
                if (item.type === CELL_TYPE.WAITING) {
                    const previousRow = result[result.length - 1];
                    if (previousRow[index - 1]?.type === CELL_TYPE.WAITING) {
                        item.connectList.push(CONNECT_TYPE.LEFT_TOP);
                        previousRow[index - 1].connectList.push(CONNECT_TYPE.RIGHT_BOTTOM);
                    }
                }
            });
        }

        result.push(rowResult);
    }

    return result;
}