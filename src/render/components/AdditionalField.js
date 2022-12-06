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
    constructor(handler, isDev) {
        super();

        // this.handler = handler;
        this.tileClassName = LOG_CLASS.TILE;
        this.buttonClassName = LOG_CLASS.BUTTON;
        this.text = TEXTS.NEXT_TURN;

        this.buttonElement = new TurnButtonComponent(handler, HANDLER_TYPE.TURN_BUTTON_CLICK);
        this.element = this.getNewElement();

        // Вспомогательные действия для отладки.
        if (isDev) {
            this.devButtonElement1 = new TurnButtonComponent(handler, HANDLER_TYPE.DEV_DO_RANDOM_1);

            this.devButtonElement1.pastIn(this.element);
            this.devButtonElement1.element.children[0].textContent = 'Сделать ходы';
        }
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
}