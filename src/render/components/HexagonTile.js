import { HANDLER_TYPE } from '../../constants';
import { CELL_CLASS_NAME } from '../constants';
import { getClassByCellType, getClassByColor } from '../helper';

export const buildHexagonTile = (item, contentMethods) => {
    const clickHandler = function(event) {
        contentMethods.tileHandler(event, this, HANDLER_TYPE.TILE_CLICK);
    }

    const tile = contentMethods.getDiv();
    const content = getTileContent(item, contentMethods);

    tile.appendChild(content);
    tile.addEventListener('click', clickHandler);

    tile.className = getClassForTile(item);
    contentMethods.setAttributeInTile(tile, item);

    return tile;
}

const getTileContent = (tile, contentMethods) => {
    const wrapElem = contentMethods.getDiv();

    console.log(tile);

    if (tile.type === 'connectLine') {
        wrapElem.textContent = '|';
    }

    if (tile.type === 'ready') {
        wrapElem.textContent = tile.powerValue;
    }

    wrapElem.className = `${CELL_CLASS_NAME.COMMON} flex`;

    if (tile.color) {
        const colorClass = getClassByColor(tile.color);

        wrapElem.className = wrapElem.className + ' ' + colorClass;
    }

    return wrapElem;
}

const getClassForTile = item => {
    const byCellType = getClassByCellType(item.type);
    let result = CELL_CLASS_NAME.WRAP + ' ' + 'smallMargin';

    if (byCellType) {
        result = `${result} ${byCellType}`;
    }

    return result;
}