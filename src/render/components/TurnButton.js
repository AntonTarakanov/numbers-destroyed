import { BaseComponent } from '../../library';

import { LOG_CLASS, TEXTS } from '../constants';

/**
 * Компонент кнопки для смены состояния хода.
 */
export class TurnButtonComponent extends BaseComponent {
    constructor(handler, type) {
        super();

        this.handler = handler;
        this.handlerType = type;
        this.tileClassName = LOG_CLASS.TILE;
        this.buttonClassName = LOG_CLASS.BUTTON;
        this.text = TEXTS.NEXT_TURN;
        // this.turnButtonId = POWER_DOM_IDS.TURN_BUTTON;

        this.element = this.getNewElement();
    }

    getNewElement() {
        const onClickHandler = this.handler;
        const type = this.handlerType;
        const buttonHandler = function(event) {
            return onClickHandler(event, this, type);
        }

        const buttonTile = this.getDiv(this.tileClassName);
        const buttonNode = this.getDiv(this.buttonClassName, null, this.text);

        this.buttonNode = buttonNode;
        buttonNode.addEventListener('click', buttonHandler);
        buttonTile.append(buttonNode);

        return buttonTile;
    }

    highlightOn() {
        this.buttonNode.className = `${this.buttonClassName} cell_selected`;
    }

    highlightOff() {
        this.buttonNode.className = `cell_selected`;
    }
}