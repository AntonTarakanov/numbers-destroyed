import { PowerRender } from './Render';
import { TURN_BUTTON_EVENT_TYPES, MATRIX_TYPES, STEP_TYPE, DEV_BUTTON_CAPTIONS } from '../constants';

/**
 * Всё что связано с визуальным отображением игры.
 */
export class PowerRenderAPI extends PowerRender {

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

        /*if (type === 'dev_AutoGiftActive') {
            this.additionalField.devButtonChange(type, data);
        }*/

        /*if (type === 'dev1_highlight') {
            this.additionalField.devButtonHighlight(type, data);
        }*/
    }

    /**
     * @param {string} stepType - в зависимости от stepType dev-кнопка выполняет разные действия.
     */
    showDevButton(stepType) {
        if (stepType === STEP_TYPE.CHOOSE_FOR_ATTACK) {
            this.additionalField.showDevButton(DEV_BUTTON_CAPTIONS.MAKE_MOVE);
        }

        if (stepType === STEP_TYPE.GIVE_POWER) {
            this.additionalField.showDevButton(DEV_BUTTON_CAPTIONS.GIVE_POWER);
        }
    }
}