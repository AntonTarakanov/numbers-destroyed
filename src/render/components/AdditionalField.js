import { BaseComponent } from '../../library';

import { TurnButtonComponent } from './TurnButton';
import { LOG_CLASS, TEXTS } from '../constants';
import { HANDLER_TYPE } from '../../constants';

/**
 * Дополнительные поля для игры.
 * Кнопка следующего хода.
 * Логирование.
 */
export class AdditionalFieldComponent extends BaseComponent {
    constructor(handler) {
        super();

        this.handler = handler;
        this.tileClassName = LOG_CLASS.TILE;
        this.buttonClassName = LOG_CLASS.BUTTON;

        this.buttonElement = new TurnButtonComponent(handler, HANDLER_TYPE.TURN_BUTTON_CLICK, TEXTS.NEXT_TURN);
        this.element = this.getNewElement();
    }

    getNewElement() {
        const baseNode = this.getDiv();

        this.buttonElement.pastIn(baseNode);

        return baseNode;
    }

    /**
     * @param {boolean} status
     */
    buttonHighlight(status) {
        status ? this.buttonElement.highlightOn() : this.buttonElement.highlightOff();
    }

    /**
     * @param {boolean} status
     */
    devButtonHighlight(status) {
        if (this.devButtonElement1) {
            status ? this.devButtonElement1.highlightOn() : this.devButtonElement1.highlightOff();
        }
    }

    /**
     *
     */
    activeGiftView(data) {
        this.buttonElement.changeTurnInfo(`${TEXTS.END_GIFT} - ${data}`, HANDLER_TYPE.GIFT_END_BUTTON_CLICK);
    }

    /**
     *
     */
    devButtonChange(type, data) {
        this.devButtonElement1.setText('Раздать power');
    }

    /**
     * Вторая кнопка.
     */
    showDevButton(text, isActive = false) {
        if (this.element.childNodes.length > 1) {
            this.devButtonElement1.setText(text);
        } else {
            this.devButtonElement1 = new TurnButtonComponent(this.handler, HANDLER_TYPE.DEV_DO_RANDOM_1, text);
            this.devButtonElement1.pastIn(this.element);
        }
    }
}