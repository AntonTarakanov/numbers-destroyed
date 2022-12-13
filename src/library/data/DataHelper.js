import { Base } from '../base/base';
import { BaseState } from './State';
import { BaseMatrix } from './Matrix';
import {
    REQUIRED_FIELDS,
    ERROR_TEXT,
    DEFAULT_PLAYER_NAME,
} from './constants';

import { CELL_TARGET_TYPE } from '../../data/constants';

/**
 * Универсальные методы для работы с данными.
 * Данные в виде матрицы по переданным размерам.
 *
 * config - размер matrix которую необходимо построить.
 * handler - вызов при изменении полей matrix.
 */
export class DataHelper extends Base {
    constructor(handler, config, isDev = false) {
        super();

        this.REQUIRED_FIELDS = REQUIRED_FIELDS;
        this.ERROR_TEXT = ERROR_TEXT;

        this.handler = handler;
        this.config = config;
        this.isDev = isDev;

        this.checkRequiredFields();
        this.initData();
    }

    /**
     * Определение минимально необходимых данных.
     */
    initData() {
        this.state = new BaseState();
        this.matrix = new BaseMatrix();
    }

    setState(property, value) {
        this.state.setState(property, value);
    }

    getStateProperty(property) {
        return this.state.getStateProperty(property);
    }

    /**
     * Возвращает имена/ключи игроков самым простым способом.
     */
    getPlayersName() {
        const value = this.getNumberOfPlayers();
        const result = [];

        for (let i = 0; i < value; i++) {
            result.push(DEFAULT_PLAYER_NAME + i);
        }

        return result;
    }

    getNumberOfPlayers() {
        return this.config.COUNT_PLAYER;
    }

    /**
     * Получить элемент матрицы по координатам.
     *
     * @param {object} position - { x, y } .
     */
    getItemByPosition(position) {
        return this.matrix.getItem(position);
    }

    /**
     * Меняем одно переданное значение на другое
     *
     * @param {string} property
     * @param {any|array} oldValue
     * @param {any} newValue
     * @param {boolean} useRerender
     */
    // TODO: переделать/пересомтреть всё что ниже.
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
            const tileList = this.matrix.getTileListByPlayer(target);

            tileList.forEach(tile => {
                tile.setType(value);

                if (useRerender) {
                    this.rerenderByPosition(tile.position);
                }
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

    /**
     * Проставить stepType для переданного списка.
     * @param {array} list
     * @param {any} value
     * @param {boolean} useRerender
     */
    setCellTypeInList(list, value, useRerender = false) {
        list.forEach(tile => {
            tile.setType(value);

            if (useRerender) {
                this.rerenderByPosition(tile.position);
            }
        });
    }

    rerenderByPosition(position) {
        this.rerender('rerenderByPosition', position);
    }

    /**
     *
     */
    rerender(type, data) {
        this.handler(type, data);
    }
}