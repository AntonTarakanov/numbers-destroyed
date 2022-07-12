import { CELL_TYPE } from '../constants';
import { CELL_CLASS_NAME } from './constants';

export const getElementById = id => document.getElementById(id);

export const createDiv = () => document.createElement('div');

export const getClassByCellType = (type) => {
    switch (type) {
        case CELL_TYPE.EMPTY: return CELL_CLASS_NAME.EMPTY;
        case CELL_TYPE.WAITING: return CELL_CLASS_NAME.WAITING;
        case CELL_TYPE.READY: return '';
        default: return CELL_CLASS_NAME.EMPTY;
    }
}