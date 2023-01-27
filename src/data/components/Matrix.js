import { BaseMatrix } from '../../library';
import { CONNECT_TYPE, SORTING_TYPES } from '../../constants';
import { Tile } from './Tile';
import { MATRIX_TYPES } from '../../constants';
import { getSquareMatrix1, getHexagonMatrix1, getNeighborHexagon1 } from './matrixGenerators';
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

    /**
     * Через промежуточный массив, т.к. map попытается создать новый экземпляр PowerMatrix.
     *
     * @param {string} name - playerName.
     */
    getTileListByPlayer(name) {
        const filtered = [];

        this.forEach(row => {
            filtered.push(row.filter(tile => tile.playerName === name));
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

    /**
     * Возвращает список доступных клеток через connectList.
     *
     * @param {Tile} tile
     * @param {string} scheme - схема / тип карты.
     * @return {array}
     */
    getNeighbors({ connectList, position }, scheme = MATRIX_TYPES.HEXAGON) {
        const { x: X, y: Y } = position;

        if (scheme === MATRIX_TYPES.SIMPLE) {
            const result = [];

            connectList.forEach(type => {
                let neighborPosition;

                if (type === CONNECT_TYPE.LEFT_TOP) {
                    neighborPosition = { x: X - 1, y: Y - 1 };
                }

                if (type === CONNECT_TYPE.RIGHT_BOTTOM) {
                    neighborPosition = { x: X + 1, y: Y + 1 };
                }

                result.push(this.getItem(neighborPosition));
            });

            return result;
        }

        if (scheme === MATRIX_TYPES.HEXAGON) {
            const result = [];

            connectList.forEach(type => {
                const neighborPosition = getNeighborHexagon1(type, position);

                result.push(this.getItem(neighborPosition));
            });

            return result.filter(tile => !!tile);
        }
    }

    getOpponentLinkedTile(position, scheme) {
        const isOpponentCondition = (name1, name2) => name1 !== name2;
        const tile = this.getItem(position);
        const neighbors = this.getNeighbors(tile, scheme);

        return neighbors.filter(linkedTile => isOpponentCondition(
            linkedTile.getPlayerName(),
            tile.getPlayerName()
        ));
    }
}