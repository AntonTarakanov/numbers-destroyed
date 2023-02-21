import { RenderHelper } from '../library';
import { COMMON_CLASS_NAMES, COMMON_DOM_IDS } from '../library/render/constants';
import { getClassForTileWrap } from './components/HexagonTile';
import { CELL_TYPE, HANDLER_TYPE } from '../constants';
import { HEXAGON_CLASS_NAMES } from './constants';
import { getClassForConnect, getClassByColor } from './components/HexagonTile';
import { buildTD } from './components/Table';

/**
 * Добавляется функционал рендера плиток гексагонами.
 * Достпно только рендер div'ами.
 * Для связей между Tile строки свдигаются через 1.
 */
export class RenderHexagonMatrix extends RenderHelper {

    buildDivTile(tile) {
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

        // TODO: условие должно быть более очевидное.
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
        const tileNode = this.buildDivTile(tile);

        rowNodes.childNodes[y].replaceChild(tileNode, oldNode);
    }

    // TODO: нужно полностью переписать.
    rerenderTableTile(tile) {
        const tdNode = buildTD.call(this, tile);

        const commonMap = this.getElementById(COMMON_DOM_IDS.MAIN);
        const trNode = commonMap.getElementsByTagName('tr')[tile.position.y];
        const oldTd = trNode.getElementsByTagName('td')[tile.position.x];

        trNode.replaceChild(tdNode, oldTd);
    }
}