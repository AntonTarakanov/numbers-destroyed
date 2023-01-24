import { HANDLER_TYPE } from '../../constants';

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

const getTileContent = (item, contentMethods) => {
    const wrapElem = contentMethods.getDiv();

    wrapElem.textContent = 1;

    return wrapElem;
}

const getClassForTile = item => {
    return '';
}