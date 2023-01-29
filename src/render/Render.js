import { RenderHelper } from '../library';
import { COMMON_DOM_IDS } from '../library/render/constants';

import { buildHexagonTile } from './components/HexagonTile';
import { AdditionalFieldComponent } from './components/AdditionalField';
import { POWER_DOM_IDS, TEXTS } from './constants';
import { buildTable } from './components/Table';

/**
 * Всё что связано с визуальным отображением игры.
 */
export class PowerRender extends RenderHelper {

    createApp(matrix) {
        const baseForm = this.getBaseForm();

        document.body.appendChild(baseForm);

        this.createMatrix(matrix);
        this.createAdditionalInfo();
    }

    /**
     * Создаёт элемент в DOM.
     * Элемент является таблицей которая строится по переданной матрице.
     */
    createMatrix(matrix) {
        if (matrix) {
            const matrixMap = this.buildMap(matrix);
            const root = this.getElementById(POWER_DOM_IDS.MAIN_FIELD);

            root.appendChild(matrixMap);
        } else {
            console.log(TEXTS.MATRIX_ERROR);
        }
    }

    buildMap(matrix) {
        return this.USE_TABLE ? buildTable.call(this, matrix) : this.buildDivMatrix(matrix);
    }

    /**
     * Не хватило фантазии на более интересное название.
     */
    createAdditionalInfo() {
        const rootNode = this.getAdditionalNode();

        this.additionalField = new AdditionalFieldComponent(this.handler);
        this.additionalField.pastIn(rootNode);
    }

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