import { RenderHexagonMatrix } from './RenderHexagonMatrix';

import { AdditionalFieldComponent } from './components/AdditionalField';
import { POWER_DOM_IDS, TEXTS } from './constants';
import { buildTable } from './components/Table';

/**
 * Всё что связано с визуальным отображением игры.
 */
export class PowerRender extends RenderHexagonMatrix {

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
}