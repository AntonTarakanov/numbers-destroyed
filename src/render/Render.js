import { RenderHexagonMatrix } from './RenderHexagonMatrix';

import { AdditionalFieldComponent } from './components/AdditionalField';
import { POWER_DOM_IDS, TEXTS } from './constants';

/**
 * Всё что связано с визуальным отображением игры.
 */
export class PowerRender extends RenderHexagonMatrix {

    createApp(matrix) {
        const appForm = this.getAppFormNode();

        document.body.appendChild(appForm);

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
        return this.USE_TABLE ? this.buildTableMatrixNode(matrix) : this.buildDivMatrixNode(matrix);
    }

    /**
     * Не хватило фантазии на более интересное название.
     */
    createAdditionalInfo() {
        const rootNode = this.getAdditionalFieldNode();

        this.additionalField = new AdditionalFieldComponent(this.handler);
        this.additionalField.pastIn(rootNode);
    }
}