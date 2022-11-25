import { RenderHelper } from '../library/RenderHelper';
import { DOM_ID } from './constants';
import { buildTable, buildTD } from './table';
import { createDiv } from './helper';
import { additionalField } from './additionalField';

/**
 * Всё что связано с визуальным отображением.
 */
export class PowerRenderHelper extends RenderHelper {
    createApp(matrix, state) {
        const baseForm = this.getBaseForm();

        document.body.appendChild(baseForm);

        this.createMatrix(matrix);
        this.createAdditionalInfo(state);
    }

    /**
     * Не хватило фантазии на более интересное название.
     */
    createAdditionalInfo(state) {
        const rootNode = this.getAdditionalNode();
        const content = additionalField.call(this, state);

        rootNode.append(content);
    }

    getDiv(className, text, id, child) {
        return createDiv(className, text, id, child);
    }

    /**
     * Создаёт элемент в DOM.
     * Элемент является таблицей которая строится по переданной матрице.
     */
    createMatrix(matrix) {
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
        // const rootNode = this.getElementById(DOM_ID.LOG_BLOCK);
        // TODO: тут всё поломалось
        // const logNode = buildLog.call(this, state);

        // rootNode.replaceChild(logNode, rootNode.firstChild);
    }
}