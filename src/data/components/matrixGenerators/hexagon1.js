import { CELL_TYPE, CONNECT_TYPE } from '../../../constants';
import { Tile } from '../Tile';
import { isEvenNumber, checkPositionLimits } from './utils';

export const MATRIX_NAME = 'hexagon1';

/**
 * Гексагон который максимально заполнен элементами.
 *
 * @param {object} size { x, y }.
 */
export const getHexagonMatrix1 = (size) => {
    const matrix = [];

    // Расставляем элементы.
    for (let i = 0; i < size.y; i++) {
        const row = [];
        const isPowerRow = isEvenNumber(i);     // Через одну идут строки с power.

        for (let j = 0; j < size.x; j++) {
            const isEvenTile = isEvenNumber(j);

            // PowerRow - можно ставить Power-клетки и горизонтальные связи.
            if (isPowerRow) {
                const isOffsetRow = (i + 2) % 4 === 0;  // Через одну строка с Power-клетками(PowerRow) идут со сдвигом для связей.
                let type;

                // Смещаем Power-элемент где это необходимо.
                if (isOffsetRow) {
                    // Крайние клетки не имеют горизонтальных связей.
                    type = isEvenTile
                        ? j !== 0 && j !== size.x - 1 ? CELL_TYPE.CONNECT_LINE : CELL_TYPE.EMPTY
                        : CELL_TYPE.WAITING_ALLOCATION;
                } else {
                    type = isEvenTile
                        ? CELL_TYPE.WAITING_ALLOCATION
                        : j !== 0 || j !== size.x - 1 ? CELL_TYPE.CONNECT_LINE : CELL_TYPE.EMPTY;
                }

                const connectType = type === CELL_TYPE.CONNECT_LINE ? CONNECT_TYPE.LINE : undefined;

                row.push(new Tile({ x: j, y: i }, type, connectType));
            } else {
                const isEndRow = i === (size.y - 1);
                const isEndTile = j === (size.x - 1);
                const isFunnelRow = (i + 3) % 4 === 0;    // связи образуют визуальную воронку.

                // 1 - Нечего вертикально связывать.
                // 2 - В таком случае не будет нижнего Power-Row.
                // TODO: предупреждать на этапе получения конфига.
                if (isEndTile || isEndRow) {
                    row.push(new Tile({ x: j, y: i }, CELL_TYPE.EMPTY));
                    break;
                }

                const connectType = isFunnelRow
                    ? isEvenTile ? CONNECT_TYPE.LEFT_TO_BOTTOM : CONNECT_TYPE.RIGHT_TO_BOTTOM
                    : isEvenTile ? CONNECT_TYPE.RIGHT_TO_BOTTOM : CONNECT_TYPE.LEFT_TO_BOTTOM;

                row.push(new Tile({ x: j, y: i }, CELL_TYPE.CONNECT_LINE, connectType));
            }
        }

        matrix.push(row);
    }

    // Заполняем поле Tile connectType.
    matrix.forEach((row, yIndex) => {
        row.forEach((tile, xIndex) => {
            if (tile.type === CELL_TYPE.WAITING_ALLOCATION) {
                const neighborsPositionList = [
                    [{y: yIndex, x: xIndex - 2}, CONNECT_TYPE.LEFT_LINE],
                    [{y: yIndex, x: xIndex + 2}, CONNECT_TYPE.RIGHT_LINE],

                    [{y: yIndex - 2, x: xIndex - 1}, CONNECT_TYPE.RIGHT_TO_TOP],
                    [{y: yIndex - 2, x: xIndex + 1}, CONNECT_TYPE.LEFT_TO_TOP],

                    [{y: yIndex + 2, x: xIndex - 1}, CONNECT_TYPE.RIGHT_TO_BOTTOM],
                    [{y: yIndex + 2, x: xIndex + 1}, CONNECT_TYPE.LEFT_TO_BOTTOM],
                ];

                neighborsPositionList.forEach(item => {
                    const [position, type] = item;

                    if (
                        checkPositionLimits(position, { maxX: size.x, maxY: size.y })
                        && matrix[yIndex][xIndex].type === CELL_TYPE.WAITING_ALLOCATION
                    ) {
                        tile.addToConnectList(type);
                    }
                });
            }
        });
    });

    return matrix;
}

export const getNeighbor = (connectType, { x, y }) => {
    switch (connectType) {
        case CONNECT_TYPE.LEFT_TO_BOTTOM: return { x: x + 1, y: y + 2 };
        case CONNECT_TYPE.RIGHT_TO_BOTTOM: return { x: x - 1, y: y + 2 };
        case CONNECT_TYPE.LEFT_TO_TOP: return { x: x + 1, y: y - 2 };
        case CONNECT_TYPE.RIGHT_TO_TOP: return { x: x - 1, y: y - 2 };
        case CONNECT_TYPE.LEFT_LINE: return { x: x - 2, y: y };
        case CONNECT_TYPE.RIGHT_LINE: return { x: x + 2, y: y };
        case CELL_TYPE.READY: return undefined;
    }
}