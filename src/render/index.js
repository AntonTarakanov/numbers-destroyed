import { RenderHelper } from '../library/RenderHelper';
import { DOM_ID } from './constants';
import { buildTable, buildTD } from './table';
import { buildLog } from './logTile';
import { createDiv } from './helper';

/**
 * Всё что связано с визуальным отображением.
 */
export class PowerRenderHelper extends RenderHelper {
    createApp(matrix, state) {
        // TODO: переписать эту фигню.
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
        // TODO: убрать additionalField строкой
        const rootNode = this.getElementById('additionalField');
        const logNode = buildLog.call(this, state);

        rootNode.append(logNode);
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
            // TODO: убрать mainField строкой
            const root = this.getElementById('mainField');

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