import { CELL_TYPE, CONNECT_TYPE } from '../constants';
import { getRandomNumber } from '../utils';
import { Tile } from './Tile';
import { MATRIX_TYPES } from './constants';

/**
 *
 */
class MatrixArray extends Array {
    constructor(config) {
        super();

        this.config = config;
    }

    getTileListByPlayer(name) {
        const filtered = this.map(row => {
            return row.filter(tile => tile.playerName === name);
        });

        return filtered.flat();
    }

    getCountTilesByName(name) {
        return this.getTileListByPlayer(name).length;
    }

    /**
     * Возвращает список tile, которые могут атаковать.
     *
     * @param {string} name - playerName.
     * @return {array}
     */
    getTileListByCanAttack(name) {
        const tileList = this.getTileListByPlayer(name);

        return tileList.filter(tile => {
            const neighbors = this.getNeighbors(tile);
            let result = false;

            // Есть соседние клетки и есть powerValue для атаки.
            if (neighbors.length && tile.powerValue > 1) {
                result = neighbors.some(neighborTile => neighborTile.playerName !== name);
            }

            return result;
        });
    }

    getTileByPosition({x, y}) {
        if (!this.checkPositionLimits({x, y})) {
            console.log('Ошибка получения элемента матрицы. Метод "getTileByPosition"');

            return null;
        }

        return this[y][x];
    }

    /**
     * TODO: убрать 'simple' заглушку.
     * Возвращает список доступных клеток через connectList.
     *
     * @param {Tile} tile
     * @param {string} scheme - схема / тип карты.
     * @return {array}
     */
    getNeighbors({ connectList, position }, scheme = 'simple') {
        if (scheme === 'simple') {
            const result = [];

            connectList.forEach(type => {
                let neighborPosition;

                if (type === CONNECT_TYPE.LEFT_TOP) {
                    neighborPosition = { x: position.x - 1, y: position.y - 1 };
                }

                if (type === CONNECT_TYPE.RIGHT_BOTTOM) {
                    neighborPosition = { x: position.x + 1, y: position.y + 1 };
                }

                result.push(this.getTileByPosition(neighborPosition));
            });

            return result;
        }
    }

    // TODO: убрать дублирование
    checkPositionLimits({ x, y }) {
        const limitsMethod = (value, maxLimit) => value >= 0 && value <= maxLimit;

        return limitsMethod(x, this.config.MAP.SIZE.x) && limitsMethod(y, this.config.MAP.SIZE.y);
    }
}

/**
 * Пустая карта для игры.
 * @param {any} config
 */
export const getEmptyMatrix = config => {
    const result = new MatrixArray(config);

    for (let i = 0; i < config.MAP.SIZE.y; i++) {
        let rowResult = [];
        for (let j = 0; j < config.MAP.SIZE.x; j++) {
            const type = i % 2 === 0
                ? j % 2 === 0 ? CELL_TYPE.WAITING : CELL_TYPE.EMPTY
                : j % 2 === 0 ? CELL_TYPE.EMPTY : CELL_TYPE.WAITING;
            rowResult.push(new Tile({ x: j, y: i }, type));
        }

        /* Проставляем горизонтальные связи. Идея в том, чтобы в массив записать типы границ. */
        /*rowResult.forEach((item, index, list) => {
            if (!item.type) {
                const type = list[index - 1]?.type === CELL_TYPE.WAITING && list[index + 1]?.type === CELL_TYPE.WAITING
                    ? CONNECT_TYPE.LINE
                    : null;

                if (type) {
                    item.connectList.push(type);
                }
            }
        });*/

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

        /* Проставляем верхние связи справа */
        /*if (result.length) {
            rowResult.forEach((item, index) => {
                if (item.type === CELL_TYPE.WAITING) {
                    const previousRow = result[result.length - 1];
                    if (previousRow[index - 1]?.type === CELL_TYPE.WAITING) {
                        item.connectList.push(CONNECT_TYPE.LEFT_TOP);
                        previousRow[index - 1].connectList.push(CONNECT_TYPE.RIGHT_BOTTOM);
                    }
                }
            });
        }*/
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

    state.playersList.forEach(playerName => {
        for (let i = 0; i < ceilByCount; i++) {
            if (waitingList.length) {
                const currentRandom = getRandomNumber(waitingList.length - 1);
                const currentPosition = waitingList[currentRandom];
                const value = {
                    powerValue: 2,
                    color: {
                        value: state[playerName].value,
                    },
                    playerName,
                }

                waitingList.splice(currentRandom, 1);
                changeMap(map, currentPosition, value);
            }
        }
    });

    return map;
}

const findItemInMatrix = (matrix, position) => matrix[position.y][position.x];

/**
 * Внести изменения в "карту". "Карта" + элемент для изменения (position и новое значение).
 * y - это вложенный массив. x - элементы вложенного массива.
 * @param {object} matrix
 * @param {object} position - x/y.
 * @param {object} item - powerValue, color.
 */
export const changeMap = (matrix, position, item) => {
    const findItem = findItemInMatrix(matrix, position);

    findItem.type = CELL_TYPE.READY;
    findItem.color = item.color;
    findItem.powerValue = item.powerValue;
    findItem.playerName = item.playerName;
}

/**
 * Получить список связанные клеток учитывая исключения.
 *
 * @return {array}
 */
export function getOpponentLinkedTile(position) {
    const isOpponentCondition = (name1, name2) => name1 !== name2;
    const tile = this.getItemByPosition(position);

    if (this.config.MATRIX_TYPE === MATRIX_TYPES.SIMPLE) {
        const opponentTiles = tile.connectList.map(linkType => {
            let linkedPosition = null;
            let result = null;

            if (CONNECT_TYPE.LEFT_TOP === linkType) {
                linkedPosition = { x: position.x - 1, y: position.y - 1 };
            }

            if (CONNECT_TYPE.RIGHT_BOTTOM === linkType) {
                linkedPosition = { x: position.x + 1, y: position.y + 1 };
            }

            if (linkedPosition) {
                const item = this.getItemByPosition(linkedPosition);

                if (isOpponentCondition(item.playerName, tile.playerName)) {
                    result = item;
                }
            }

            return result;
        });

        return opponentTiles.filter(item => !!item);
    }
}