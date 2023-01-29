import { PowerRender } from './Render';
import { buildTable } from './components/Table';
import { AdditionalFieldComponent } from './components/AdditionalField';
import { POWER_DOM_IDS, TEXTS } from './constants';
import { TURN_BUTTON_EVENT_TYPES, MATRIX_TYPES, STEP_TYPE } from '../constants';

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

        this.additionalField = new AdditionalFieldComponent(this.handler);
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
        return this.USE_TABLE ? buildTable.call(this, matrix) : this.buildDivMatrix(matrix);
    }

    rerenderTile(tile, matrixType) {
        if (matrixType === MATRIX_TYPES.HEXAGON) {
            this.rerenderDivTile(tile);
        }

        if (matrixType === MATRIX_TYPES.SIMPLE) {
            this.rerenderTableTile(tile);
        }
    }

    rerenderTurnButton(type, data) {
        if (type === TURN_BUTTON_EVENT_TYPES.HIGHLIGHT) {
            this.additionalField.buttonHighlight(data);
        }

        if (type === TURN_BUTTON_EVENT_TYPES.ACTIVE_GIFT_VIEW) {
            this.additionalField.activeGiftView(data);
        }

        if (type === 'dev_AutoGiftActive') {
            this.additionalField.devButtonChange(type, data);
        }

        if (type === 'dev1_highlight') {
            this.additionalField.devButtonHighlight(type, data);
        }
    }

    /**
     * @param {string} stepType - в зависимости от stepType dev-кнопка выполняет разные действия.
     */
    showDevButton(stepType) {
        if (stepType === STEP_TYPE.CHOOSE_FOR_ATTACK) {
            this.additionalField.showDevButton('Сделать ходы');
        }

        if (stepType === STEP_TYPE.GIVE_POWER) {
            this.additionalField.showDevButton('Раздать power');
        }
    }

    rerenderLog(state) {
        // const rootNode = this.getElementById(DOM_ID.LOG_BLOCK);
        // const logNode = buildLog.call(this, state);
        // rootNode.replaceChild(logNode, rootNode.firstChild);
    }
}