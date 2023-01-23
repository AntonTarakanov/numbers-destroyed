import { Base, ConfigHelper, BASE_HANDLER_TYPES } from '../base';
import { BaseState } from './State';
import { BaseMatrix } from './Matrix';
import {
    REQUIRED_FIELDS,
    ERROR_TEXT,
    DEFAULT_PLAYER_NAME,
} from './constants';

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
        this.config = new ConfigHelper(config);
        this.isDev = isDev;

        const checkResult = this.checkRequiredFields();

        if (checkResult || isDev) {
            this.initData();
        }
    }

    /**
     * Определение минимально необходимых данных.
     */
    initData() {
        this.state = new BaseState();
        this.matrix = new BaseMatrix(this.config.MAP);
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
        return this.config.COUNT_PLAYER || 1;
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
     * @param {boolean} useHandler
     */
    changeParamByParam(property, oldValue, newValue, useHandler = false) {
        const changedList = this.matrix.changeParamByParam(property, oldValue, newValue);

        if (useHandler) {
            changedList.forEach(position => {
                this.useHandler(position);
            });
        }
    }

    /**
     * Событие изменения элемента.
     *
     * @param {object} position - { x, y } .
     */
    useHandler(position) {
        this.useHandlerWithCustom(BASE_HANDLER_TYPES.ELEMENT_CHANGED, position);
    }

    /**
     * Любое событие.
     *
     * @param {string} type
     * @param {any} data
     */
    useHandlerWithCustom(type, data) {
        this.handler(type, data);
    }
}