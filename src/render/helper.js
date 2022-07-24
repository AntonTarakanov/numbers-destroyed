import { CELL_TYPE } from '../constants';
import { CELL_CLASS_NAME, COLOR, DOM_ID } from './constants';
import { getRenderTableByMatrix } from './map';

export const getElementById = id => document.getElementById(id);

export const createDiv = () => document.createElement('div');

const isCreated = id => !!getElementById(id);

export const getClassByCellType = (type) => {
    switch (type) {
        case CELL_TYPE.EMPTY: return CELL_CLASS_NAME.EMPTY;
        case CELL_TYPE.WAITING: return CELL_CLASS_NAME.WAITING;
        case CELL_TYPE.READY: return '';
        default: return CELL_CLASS_NAME.EMPTY;
    }
}

/**
 * @param {string} color
 * @return {string}
 */
export const getClassByColor = color => {
    switch (color) {
        case COLOR.GREEN: return CELL_CLASS_NAME.GREEN;
        case COLOR.RED: return CELL_CLASS_NAME.RED;
        case COLOR.MAGENTA: return CELL_CLASS_NAME.MAGENTA;
        case COLOR.BLUE: return CELL_CLASS_NAME.BLUE;
        default: return COLOR.DEFAULT;
    }
}

/* Функции для упрощения логики в базовом файле при операциях с DOM: */

export const baseFormIsCreated = () => isCreated(DOM_ID.COMMON_MAP);

/**
 * Создаёт карту и добавляет в DOM.
 */
export const createFullMapByMatrix = (map, onClickHandler) => {
    const table = getRenderTableByMatrix(map, onClickHandler);
    const root = getElementById(DOM_ID.COMMON_MAP);

    root.appendChild(table);
}