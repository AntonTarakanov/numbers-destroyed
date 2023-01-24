import { PowerRender } from './Render';
import { buildTable, buildTD } from './components/Table';
import { COMMON_DOM_IDS } from '../library/render/constants';
import { AdditionalFieldComponent } from './components/AdditionalField';
import { POWER_DOM_IDS, TEXTS } from './constants';

/**
 * Всё что связано с визуальным отображением игры.
 */
export class PowerRenderAPI extends PowerRender {
    createApp(matrix) {
        const baseForm = this.getBaseForm();

        document.body.appendChild(baseForm);

        this.createMatrix(matrix);
        this.createAdditionalInfo();
    }

    /**
     * Не хватило фантазии на более интересное название.
     */
    createAdditionalInfo() {
        const rootNode = this.getAdditionalNode();

        this.additionalField = new AdditionalFieldComponent(this.handler, this.isDev);
        this.additionalField.pastIn(rootNode);
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
        // return this.USE_TABLE ? buildTable.call(this, matrix) : buildDivMatrix.call(this, matrix);
        // console.log('this.buildDivMatrix', this.buildDivMatrix);

        return this.USE_TABLE ? buildTable.call(this, matrix) : this.buildDivMatrix(matrix);
    }

    /**
     * Найти элемент в tr и заменить.
     */
    rerenderTD(matrix, item) {
        const tdNode = buildTD.call(this, item);

        const commonMap = this.getElementById(COMMON_DOM_IDS.MAIN);
        const trNode = commonMap.getElementsByTagName('tr')[item.position.y];
        const oldTd = trNode.getElementsByTagName('td')[item.position.x];

        trNode.replaceChild(tdNode, oldTd);
    }

    rerenderTurnButton(type, data) {
        if (type === 'highlight') {
            this.additionalField.buttonHighlight(data);
        }

        if (type === 'activeGiftView') {
            this.additionalField.activeGiftView(data);
        }

        if (type === 'dev_AutoGiftActive') {
            this.additionalField.devButtonChange(type, data);
        }

        if (type === 'dev1_highlight') {
            this.additionalField.devButtonHighlight(type, data);
        }
    }

    rerenderLog(state) {
        // const rootNode = this.getElementById(DOM_ID.LOG_BLOCK);
        // const logNode = buildLog.call(this, state);
        // rootNode.replaceChild(logNode, rootNode.firstChild);
    }
}