import { DOM_ID } from './constants';
import { buildTable, buildTD } from './table';

/**
 *
 */
export class RenderHelper {
    constructor(domIds, handler) {
        this.DOM_IDS = domIds;
        this.handler = handler;
    }

    /**
     * Базовая пустая форма с картой, логированием, ID-элементов для дальнейшего добавления элементов.
     */
    getBaseForm() {
        const appElem = this.getEmptyDiv();
        const map = this.getEmptyDiv();

        map.className = 'flex';
        map.id = DOM_ID.COMMON_MAP;
        appElem.id = this.DOM_IDS.root;
        appElem.className = 'application flex';
        appElem.appendChild(map);

        return appElem;
    }

    createApp() {
        return !!document.body.appendChild(this.getBaseForm());
    }

    getEmptyDiv() {
        return document.createElement('div');
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
        const elementTD = buildTD.call(this, item);
    }
}