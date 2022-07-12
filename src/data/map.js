import { CELL_TYPE, CONNECT_TYPE } from '../constants';
import { getClassByCellType } from '../render/helper';
import { getRandomNumber } from '../utils';

/**
 *
 */
export const createMap = config => getEmptyMap(config);

/**
 * Пустая карта для игры.
 * @param {any} config
 */
const getEmptyMap = config => {
    const result = [];

    for (let i = 0; i < config.MAP.SIZE.y; i++) {
        let rowResult = [];
        for (let j = 0; j < config.MAP.SIZE.x; j++) {
            const type = i % 2 === 0
                ? j % 2 === 0 ? CELL_TYPE.WAITING : CELL_TYPE.EMPTY
                : j % 2 === 0 ? CELL_TYPE.EMPTY : CELL_TYPE.WAITING;
            rowResult.push({
                position: {x: j, y: i},
                type,
                connectList: [],
                className: getClassByCellType(type)
            });
        }

        /* Проставляем горизонтальные связи. Идея в том, чтобы в массив записать типы границ. */
        rowResult.forEach((item, index, list) => {
            if (!item.type) {
                const type = list[index - 1]?.type === CELL_TYPE.WAITING && list[index + 1]?.type === CELL_TYPE.WAITING
                    ? CONNECT_TYPE.LINE
                    : null;
                if (type) {
                    item.connectList.push(type);
                }
            }
        });

        /* Проставляем верхние связи слева. */
        if (result.length) {

            // TODO: list ?
            rowResult.forEach((item, index, list) => {
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

/**
 * Смысл метода: тут мы должны сделать рандомное расположение для игроков и их клеток.
 * Формируем список свободных клеток -> выбираем рандомную из них -> перестраиваем массив.
 * По итогу из массива строим отображение.
 *
 * Может быть 2 типа расстановки: равная и полный рандом. Проще сейчас реализовать полный рандом - играть так сложнее.
 * Потом доработать и добавить второй вариант.
 */
export const setRandomElementsInMap = (map, state) => {
    const waitingList = map.reduce((acc, item) => {
        const list = item.filter(item => item.type === CELL_TYPE.WAITING).map(item => item.position);
        return [...acc, ...list];
    }, []);
    const ceilByCount = Math.ceil(waitingList.length / state.playersList.length);

    state.playersList.forEach(item => {
        for (let i = 0; i < ceilByCount; i++) {
            if (waitingList.length) {
                const currentRandom = getRandomNumber(waitingList.length - 1);
                const currentPosition = waitingList[currentRandom];

                waitingList.splice(currentRandom, 1);
            }
        }
    });

    return map;
}