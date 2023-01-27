import { BaseComponent } from '../../library';

import { LOG_CLASS } from '../constants';

/**
 * Компонент кнопки для смены состояния хода.
 */
export class TurnButtonComponent extends BaseComponent {
    constructor(handler, type, text) {
        super();

        this.handler = handler;
        this.handlerType = type;
        this.tileClassName = LOG_CLASS.TILE;
        this.buttonClassName = LOG_CLASS.BUTTON;

        this.element = this.getNewElement(text);
    }

    getNewElement(text) {
        const buttonTile = this.getDiv(this.tileClassName);
        const buttonNode = this.getDiv(this.buttonClassName, null, text);

        this.buttonNode = buttonNode;
        buttonNode.addEventListener('click', event => this.clickHandler(event));
        buttonTile.append(buttonNode);

        return buttonTile;
    }

    clickHandler(event) {
        this.handler(event, null, this.handlerType);
    }

    highlightOn() {
        this.buttonNode.className = `${this.buttonClassName} ${LOG_CLASS.BUTTON_SELECTED}`;
    }

    highlightOff() {
        this.buttonNode.className = this.buttonClassName;
    }

    setText(value) {
        this.buttonNode.textContent = value;
    }

    changeTurnInfo(caption, type) {
        this.setText(caption);
        this.handlerType = type;
    }
}