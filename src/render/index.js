import { DOM_ID } from './constants';
import { buildTable, buildTD } from './table';
import { buildLog } from './logTile';
import { createDiv } from './helper';
import { buildHeader } from './header';

/**
 *
 */
export class RenderHelper {
    constructor(domIds, handler) {
        this.DOM_IDS = domIds;
        this.handler = handler;
    }

    /**
     * Базовая пустая форма с картой, логированием, ID-элементов для дальнейшего наполнения узлов.
     */
    getBaseForm() {
        const appNode = this.getDiv('application', null, this.DOM_IDS.root);
        const contentNode = this.getDiv('flex justifyCenter');
        const matrixNode = this.getDiv('flex', null, DOM_ID.COMMON_MAP);
        const logNode = this.getDiv(null, null, DOM_ID.LOG_BLOCK);
        const headerNode = this.createHeader();

        contentNode.append(matrixNode, logNode);
        appNode.append(headerNode, contentNode);

        return appNode;
    }

    createApp(matrix, state) {
        const formReady = !!document.body.appendChild(this.getBaseForm());

        if (formReady) {
            this.createMap(matrix);
            this.createLog(state);
        }
    }

    /**
     * Не хватило фантазии на более интересное название.
     */
    createLog(state) {
        const rootNode = this.getElementById(DOM_ID.LOG_BLOCK);
        const logNode = buildLog.call(this, state);

        rootNode.append(logNode);
    }

    createHeader() {
        return buildHeader();
    }

    getEmptyDiv() {
        return document.createElement('div');
    }

    getDiv(className, text, id, child) {
        return createDiv(className, text, id, child);
    }

    getElementById(id) {
        return document.getElementById(id);
    }

    /**
     * Создаёт элемент в DOM.
     * Элемент является таблицей которая строится по переданной матрице.
     */
    createMap(matrix) {
        if (matrix) {
            const table = this.buildTable(matrix);
            const root = this.getElementById(DOM_ID.COMMON_MAP);

            root.appendChild(table);
        } else {
            console.log('Ошибка в переданной матрице.');
        }
    }

    buildTable(matrix) {
        return buildTable.call(this, matrix);
    }

    /**
     * Найти элемент в tr и заменить.
     */
    rerenderTD(matrix, item) {
        const tdNode = buildTD.call(this, item);

        const commonMap = this.getElementById(DOM_ID.COMMON_MAP);
        const trNode = commonMap.getElementsByTagName('tr')[item.position.y];
        const oldTd = trNode.getElementsByTagName('td')[item.position.x];

        trNode.replaceChild(tdNode, oldTd);
    }

    // TODO: доработать. На данный момент только для тестирования.
    rerenderLog(state) {
        const rootNode = this.getElementById(DOM_ID.LOG_BLOCK);
        const logNode = buildLog.call(this, state);

        rootNode.replaceChild(logNode, rootNode.firstChild);
    }
}