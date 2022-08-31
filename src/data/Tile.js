import { CELL_TYPE } from '../constants';

export class Tile {
    constructor(position = { x: 0, y: 0 }, type = CELL_TYPE.EMPTY) {
        this[MATRIX_FIELDS.POWER_VALUE] = null;
        this[MATRIX_FIELDS.POSITION] = { ...position };
        this[MATRIX_FIELDS.TYPE] = type;
        this[MATRIX_FIELDS.CONNECT_LIST] = [];
    }
}

export const MATRIX_FIELDS = {
    TYPE: 'type',
    POWER_VALUE: 'powerValue',
    POSITION: 'position',
    CONNECT_LIST: 'connectList',
};