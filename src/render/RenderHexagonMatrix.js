import { RenderHelper } from '../library';
import { COMMON_CLASS_NAMES, COMMON_DOM_IDS } from '../library/render/constants';
import { getClassForTileWrap, getClassForConnect, getClassByColor } from './components/HexagonTile';
import { CELL_TYPE, HANDLER_TYPE } from '../constants';
import { HEXAGON_CLASS_NAMES } from './constants';

/**
 * Добавляется функционал рендера плиток гексагонами.
 * Достпно только рендер div'ами.
 * Для связей между Tile строки свдигаются через 1.
 */
export class RenderHexagonMatrix extends RenderHelper {

    buildRowNode(row, index) {
        const rowElement = super.buildRowNode(row, index);

        // Сдвиг строк с power через одну.
        if (index % 2 !== 0) {
            rowElement.className = `${rowElement.className} ${COMMON_CLASS_NAMES.MARGIN_LEFT_MIDDLE}`;
        }

        return rowElement;
    }

    buildDivTileNode(tile) {
        const onTileClick = this.handler;
        const clickHandler = function(event) {
            onTileClick(event, this, HANDLER_TYPE.TILE_CLICK);
        }

        const tileNode = this.getDiv();
        const content = this.buildTileContent(tile);
        const powerValue = this.getDiv();

        powerValue.textContent = tile.powerValue;
        powerValue.className = HEXAGON_CLASS_NAMES.POWER_VALUE;

        tileNode.append(powerValue, content);

        if (tile.type !== undefined && tile.type !== CELL_TYPE.CONNECT_LINE) {
            tileNode.addEventListener('click', clickHandler);
        }

        tileNode.className = getClassForTileWrap(tile);
        this.setAttributeInTile(tileNode, tile);

        return tileNode;
    }

    buildTileContent(tile) {
        const wrapElem = this.getDiv();

        if (tile.type === CELL_TYPE.CONNECT_LINE) {
            const line = this.getDiv();

            line.className = getClassForConnect(tile.connectType);

            wrapElem.append(line);
        }

        if ([CELL_TYPE.READY, CELL_TYPE.WAITING_SELECT].includes(tile.type)) {
            const hexagon = this.getDiv();
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

    rerenderDivTile(tile) {
        const { x, y } = tile.position;

        const commonMap = this.getElementById(COMMON_DOM_IDS.MAIN);
        const rowNodes = commonMap.firstChild;
        const oldNode = rowNodes.childNodes[y].childNodes[x];
        const tileNode = this.buildDivTileNode(tile);

        rowNodes.childNodes[y].replaceChild(tileNode, oldNode);
    }
}