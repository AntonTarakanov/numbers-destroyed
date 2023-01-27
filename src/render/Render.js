import { RenderHelper } from '../library';
import { COMMON_DOM_IDS } from '../library/render/constants';

import { buildHexagonTile } from './components/HexagonTile';

/**
 * Всё что связано с визуальным отображением игры.
 */
export class PowerRender extends RenderHelper {

    buildDivTile(item, contentMethods) {
        return buildHexagonTile(item, contentMethods);
    }

    rerenderDivTile(tile) {
        const {x, y} = tile.position;

        const commonMap = this.getElementById(COMMON_DOM_IDS.MAIN);
        const rowNodes = commonMap.firstChild;
        const oldNode = rowNodes.childNodes[y].childNodes[x];
        const tileNode = this.buildDivTile(tile, this.getContentMethods());

        rowNodes.childNodes[y].replaceChild(tileNode, oldNode);
    }

    rerenderTableTile(tile) {
        const tdNode = buildTD.call(this, tile);

        const commonMap = this.getElementById(COMMON_DOM_IDS.MAIN);
        const trNode = commonMap.getElementsByTagName('tr')[tile.position.y];
        const oldTd = trNode.getElementsByTagName('td')[tile.position.x];

        trNode.replaceChild(tdNode, oldTd);
    }
}