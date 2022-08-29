import { CELL_TYPE } from '../constants';

export class Tile {
    constructor(position = { x: 0, y: 0 }, type = CELL_TYPE.EMPTY) {
        this.powerValue = null;
        this.position = { ...position };
        this.type = type;
        this.connectList = [];
    }
}

// TODO: переименовать и переписать эту логику.
export const MATRIX_FIELDS = {
    TYPE: 'type',
};