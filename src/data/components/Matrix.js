import { BaseMatrix } from '../../library';
import { CONNECT_TYPE, SORTING_TYPES } from '../../constants';
import { Tile } from './Tile';
import { MATRIX_TYPES } from '../../constants';
import { getSquareMatrix1, getHexagonMatrix1 } from './matrixGenerators';
import { setRandomPowerInMatrix } from './matrixGenerators/utils';

/**
 * Данные для карты.
 */
export class PowerMatrix extends BaseMatrix {

    /**
     * @param {object} config
     * @param {array} playerInfo - [ [name, color], ... ] .
     */
    constructor(config, playerInfo) {
        super(config.MAP);

        const emptyMatrix = this.getEmptyMatrix(config.MATRIX_TYPE, config.MAP.SIZE);
        const filledMatrix = this.getFilledMatrix(config.SORTING_TYPE, emptyMatrix, playerInfo);

        this.overwriteMatrix(filledMatrix);
        this.config = config;
    }

    /**
     *
     * @param {string} type
     * @param {object} size - { x, y }.
     */
    getEmptyMatrix(type, size) {
        switch (type) {
            case MATRIX_TYPES.SIMPLE: return getSquareMatrix1(size);
            case MATRIX_TYPES.HEXAGON: return getHexagonMatrix1(size);
            default: return [[]];
        }
    }

    /**
     * Проставить принадлежность power tile.
     *
     * @param {SORTING_TYPES} type - тип заполнения Matrix.
     * @param {array} emptyMatrix.
     * @param {array} playerInfo - [ [name, color], ... ] .
     */
    getFilledMatrix(type, emptyMatrix, playerInfo) {
        switch (type) {
            case SORTING_TYPES.RANDOM: return setRandomPowerInMatrix(emptyMatrix, playerInfo);
            // case SORTING_TYPES.FROM_FIRST: return setRandomPowerInMatrix(emptyMatrix, playerInfo);
            default: return emptyMatrix;
        }
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

    // TODO: переписать, будет второй способ организации связи.
    /**
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

                result.push(this.getItem(neighborPosition));
            });

            return result;
        }
    }
}

/**
 * TODO: убрать.
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