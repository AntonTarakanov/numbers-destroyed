import { HANDLER_TYPE, CELL_TYPE, CONNECT_TYPE } from '../../constants';
import { CELL_CLASS_NAME, COLOR, HEXAGON_CLASS_NAMES } from '../constants';
import { getClassByCellType } from '../helper';
import { COMMON_CLASS_NAMES } from '../../library/render/constants';

export const buildHexagonTile = (tile, contentMethods) => {
    const clickHandler = function(event) {
        contentMethods.tileHandler(event, this, HANDLER_TYPE.TILE_CLICK);
    }

    const tileNode = contentMethods.getDiv();
    const content = getTileContent(tile, contentMethods);
    const powerValue = contentMethods.getDiv();

    powerValue.textContent = tile.powerValue;
    powerValue.className = HEXAGON_CLASS_NAMES.POWER_VALUE;

    tileNode.append(powerValue, content);

    if (tile.type !== undefined && tile.type !== CELL_TYPE.CONNECT_LINE) {
        tileNode.addEventListener('click', clickHandler);
    }

    tileNode.className = getClassForTileWrap(tile);
    contentMethods.setAttributeInTile(tileNode, tile);

    return tileNode;
}

const getTileContent = (tile, contentMethods) => {
    const wrapElem = contentMethods.getDiv();

    if (tile.type === CELL_TYPE.CONNECT_LINE) {
        const line = contentMethods.getDiv();

        line.className = getClassForConnect(tile.connectType);

        wrapElem.append(line);
    }

    if ([CELL_TYPE.READY, CELL_TYPE.WAITING_SELECT].includes(tile.type)) {
        const hexagon = contentMethods.getDiv();
        const hexagonSpan = document.createElement('span');

        hexagon.className = HEXAGON_CLASS_NAMES.HEXAGON;

        hexagon.append(hexagonSpan);
        wrapElem.append(hexagon);
    }

    wrapElem.className = `${HEXAGON_CLASS_NAMES.TILE_HEXAGON} ${COMMON_CLASS_NAMES.FLEX}`;

    if (tile.color) {
        const colorClass = getClassByColor(tile.color);

        wrapElem.className = `${wrapElem.className} ${colorClass}`;
    }

    return wrapElem;
}

const getClassForTileWrap = item => {
    const byCellType = getClassByCellType(item.type);
    let result = CELL_CLASS_NAME.WRAP;

    if (byCellType) {
        result = `${result} ${byCellType}`;
    }

    return result;
}

const getClassForConnect = connectType => {
    switch (connectType) {
        case CONNECT_TYPE.LEFT_TO_BOTTOM: return HEXAGON_CLASS_NAMES.LEFT_TO_BOTTOM;
        case CONNECT_TYPE.RIGHT_TO_BOTTOM: return HEXAGON_CLASS_NAMES.RIGHT_TO_BOTTOM;
        case CONNECT_TYPE.LINE: return HEXAGON_CLASS_NAMES.LINE;
        default: return COLOR.DEFAULT;
    }
}

const getClassByColor = color => {
    switch (color) {
        case COLOR.GREEN: return HEXAGON_CLASS_NAMES.TILE_GREEN;
        case COLOR.RED: return HEXAGON_CLASS_NAMES.TILE_RED;
        case COLOR.MAGENTA: return HEXAGON_CLASS_NAMES.TILE_MAGENTA;
        case COLOR.BLUE: return HEXAGON_CLASS_NAMES.TILE_BLUE;
        default: return COLOR.DEFAULT;
    }
}