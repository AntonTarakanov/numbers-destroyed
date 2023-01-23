import { CELL_TYPE } from '../../../constants';
import { getRandomNumber } from '../../../library/utils';
import { MATRIX_FIELDS } from '../Tile';

/**
 * Проверка чётное ли число.
 *
 * @param {number} value
 */
export const isEvenNumber = value => value % 2 === 0;

/**
 * Проверка границ. Дублируется.
 *
 * @param {object} position - { x, y }.
 * @param {object} limits - { maxX, maxY }.
 */
export const checkPositionLimits = ({ x, y }, { maxX, maxY }) => {
    const limitsMethod = (value, maxLimit) => value >= 0 && value <= maxLimit;

    return limitsMethod(x, maxX) && limitsMethod(y, maxY);
}

/**
 * Смысл метода: сделать рандомное расположение для игроков и их клеток.
 * Формируем список свободных клеток -> выбираем рандомную из них -> перестраиваем массив.
 * По итогу из массива строим отображение.
 *
 * @param {array} matrix
 * @param {array} playerInfo
 */
export const setRandomPowerInMatrix = (matrix, playerInfo) => {
    const waitingList = matrix.reduce((acc, item) => {
        const list = item.filter(item => item.type === CELL_TYPE.WAITING_ALLOCATION).map(item => item.position);

        return [...acc, ...list];
    }, []);
    const ceilByCount = Math.ceil(waitingList.length / playerInfo.length);

    playerInfo.forEach(info => {
        const [playerName, playerColor] = info;

        for (let i = 0; i < ceilByCount; i++) {
            if (waitingList.length) {
                const currentRandom = getRandomNumber(waitingList.length - 1);
                const currentPosition = waitingList[currentRandom];

                matrix[currentPosition.y][currentPosition.x].setValues({
                    [MATRIX_FIELDS.POWER_VALUE]: 2,
                    [MATRIX_FIELDS.COLOR]: playerColor,
                    [MATRIX_FIELDS.PLAYER_NAME]: playerName,
                    [MATRIX_FIELDS.TYPE]: CELL_TYPE.READY,
                });

                waitingList.splice(currentRandom, 1);
            }
        }
    });

    return matrix;
}
