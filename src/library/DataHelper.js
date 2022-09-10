import { DEFAULT_CONFIG } from './config';
import { CELL_TARGET_TYPE } from '../data/constants';

/**
 * Универсальные методы для работы с данными.
 *
 * config - размер matrix которую необходимо построить.
 */
export class DataHelper {
    constructor(handler, config) {
        this.handler = handler;
        this.config = config ? config : DEFAULT_CONFIG;
    }

    setState(property, value) {
        if (property) {
            this.state[property] = value;
        }
    }

    getStateProperty(property) {
        return this.state[property];
    }

    /**
     * Возвращает имена/ключи игроков самым простым способом.
     * В дальнейшем можно сделать более интересную и настраиваемую систему.
     */
    getPlayersName() {
        const value = this.getNumberOfPlayers();
        const result = [];

        for (let i = 0; i < value; i++) {
            result.push('player' + i);
        }

        return result;
    }

    getNumberOfPlayers() {
        return this.config.COUNT_PLAYER;
    }

    getItemByPosition(position) {
        if (!this.checkPositionLimits(position)) {
            console.log('checkPositionLimits ERROR');
        }

        return this.matrix[position.y][position.x];
    }

    /**
     * Меняем одно переданное значение на другое
     *
     * @param {string} property
     * @param {any|array} oldValue
     * @param {any} newValue
     * @param {boolean} useRerender
     */
    changeParamByParam(property, oldValue, newValue, useRerender = false) {
        this.matrix.forEach(row => {
            row.forEach(item => {
                let isEqual;

                if (Array.isArray(oldValue)) {
                    isEqual = oldValue.some(oldValueItem => oldValueItem === item[property]);
                } else {
                    isEqual = item[property] === oldValue;
                }

                if (isEqual) {
                    item[property] = newValue;

                    if (useRerender) {
                        this.rerenderByPosition(item.position);
                    }
                }
            });
        });
    }

    /**
     * TODO: перенести в частное.
     *
     * Проставить stepType.
     * @param {string} targetType - тип простановки. На все, по id, ещё какие-то выборки.
     * @param {any} target
     * @param {string} value
     * @param {boolean} useRerender
     */
    setCellTypeForAll(targetType, target, value, useRerender = false) {
        if (CELL_TARGET_TYPE.byPlayerName === targetType) {
            this.matrix.forEach(row => {
                row.forEach(cell => {
                    if (cell.getPlayerName() === target) {
                        cell.setType(value);
                    }

                    if (useRerender) {
                        this.rerenderByPosition(cell.position);
                    }
                });
            });
        }

        if (CELL_TARGET_TYPE.byPosition === targetType) {
            const row = this.matrix[target.y];
            const item = row[target.x];

            if (item?.type) {
                item.type = value;
            }

            if (useRerender) {
                this.rerenderByPosition(target);
            }
        }
    }

    rerenderByPosition(position) {
        this.handler(position);
    }
}