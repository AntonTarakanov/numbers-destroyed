import { CELL_TYPE } from '../../constants';

export class Tile {
    constructor(position = { x: 0, y: 0 }, type = CELL_TYPE.EMPTY, connectType) {
        this[MATRIX_FIELDS.POWER_VALUE] = null;
        this[MATRIX_FIELDS.POSITION] = { ...position };
        this[MATRIX_FIELDS.TYPE] = type;
        this[MATRIX_FIELDS.CONNECT_LIST] = [];

        if (connectType) {
            this[MATRIX_FIELDS.CONNECT_TYPE] = connectType;
        }
    }

    setProperty(property, value) {
        this[property] = value;
    }

    getPowerValue() {
        return this[MATRIX_FIELDS.POWER_VALUE];
    }

    getColor() {
        return this[MATRIX_FIELDS.COLOR];
    }

    getPlayerName() {
        return this[MATRIX_FIELDS.PLAYER_NAME];
    }

    getType() {
        return this[MATRIX_FIELDS.TYPE];
    }

    /**
     *
     * @param {MATRIX_FIELDS} value
     */
    setType(value) {
        this.setProperty(MATRIX_FIELDS.TYPE, value);
    }

    /**
     * @param {object} values
     * @return {boolean} is changed
     */
    setValues(values = {}) {
        const property = Object.values(MATRIX_FIELDS);
        let result = false;

        for (let key in values) {
            if (property.includes(key)) {
                if (this[key] !== values[key]) {
                    this.setProperty(key, values[key]);
                    result = true;
                }
            }
        }

        return result;
    }

    /**
     *
     * @param {string} value
     */
    addToConnectList(value) {
        if (!this[MATRIX_FIELDS.CONNECT_LIST].includes(value)) {
            this[MATRIX_FIELDS.CONNECT_LIST].push(value);
        }
    }
}

export const MATRIX_FIELDS = {
    TYPE: 'type',
    POWER_VALUE: 'powerValue',
    POSITION: 'position',
    CONNECT_LIST: 'connectList',
    PLAYER_NAME: 'playerName',
    COLOR: 'color',
    CONNECT_TYPE: 'connectType',
};