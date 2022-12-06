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
        const onClickHandler = this.handler;
        const type = this.handlerType;
        const buttonHandler = function(event) {
            return onClickHandler(event, this, type);
        }

        const buttonTile = this.getDiv(this.tileClassName);
        const buttonNode = this.getDiv(this.buttonClassName, null, text);

        this.buttonNode = buttonNode;
        buttonNode.addEventListener('click', buttonHandler);
        buttonTile.append(buttonNode);

        return buttonTile;
    }

    highlightOn() {
        this.buttonNode.className = `${this.buttonClassName} cell_selected`;
    }

    highlightOff() {
        this.buttonNode.className = this.buttonClassName;
    }

    setText(value) {
        this.buttonNode.textContent = value;
    }
}