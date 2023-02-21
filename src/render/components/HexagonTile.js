import { CONNECT_TYPE } from '../../constants';
import { CELL_CLASS_NAME, COLOR, HEXAGON_CLASS_NAMES } from '../constants';
import { getClassByCellType } from '../helper';

export const getClassForTileWrap = tile => {
    const byCellType = getClassByCellType(tile.type);
    let result = CELL_CLASS_NAME.WRAP;

    if (byCellType) {
        result = `${result} ${byCellType}`;
    }

    return result;
}

export const getClassForConnect = connectType => {
    switch (connectType) {
        case CONNECT_TYPE.LEFT_TO_BOTTOM: return HEXAGON_CLASS_NAMES.LEFT_TO_BOTTOM;
        case CONNECT_TYPE.RIGHT_TO_BOTTOM: return HEXAGON_CLASS_NAMES.RIGHT_TO_BOTTOM;
        case CONNECT_TYPE.LINE: return HEXAGON_CLASS_NAMES.LINE;
        default: return COLOR.DEFAULT;
    }
}

export const getClassByColor = color => {
    switch (color) {
        case COLOR.GREEN: return HEXAGON_CLASS_NAMES.TILE_GREEN;
        case COLOR.RED: return HEXAGON_CLASS_NAMES.TILE_RED;
        case COLOR.MAGENTA: return HEXAGON_CLASS_NAMES.TILE_MAGENTA;
        case COLOR.BLUE: return HEXAGON_CLASS_NAMES.TILE_BLUE;
        default: return COLOR.DEFAULT;
    }
}