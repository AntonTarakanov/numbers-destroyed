import { LOG_CLASS, TEXTS } from './constants';
import { HANDLER_TYPE } from '../constants';

/**
 * Дополнительные поля для игры.
 * Кнопка следующего хода.
 * Логирование.
 */
export function additionalField(state) {
    const baseNode = this.getDiv();
    const buttonNode = getPowerTurnButton.call(this);
    const logNode = buildLog.call(this, state);

    baseNode.append(buttonNode, logNode);

    return baseNode;
}

function getTile() {
    return this.getDiv(LOG_CLASS.TILE);
}

/**
 * Кнопка при нажатии на которую меняем ход игрока.
 */
export function getPowerTurnButton() {
    const onClickHandler = this.handler;
    const buttonHandler = function(event) {
        return onClickHandler(event, this, HANDLER_TYPE.TURN_BUTTON_CLICK);
    }
    const buttonTile = getTile.call(this);
    const buttonNode = this.getDiv(LOG_CLASS.BUTTON, null, TEXTS.NEXT_TURN);

    buttonNode.addEventListener('click', buttonHandler);

    buttonTile.append(buttonNode);

    return buttonTile;
}

/**
 * Логирование для возможности отладки приложения.
 *
 * TODO: реализовать расширенное дублирование в консоль.
 * TODO: часть нужно вынести в library.
 */
export function buildLog(state) {
    const logNode = getTile.call(this);

    // Информация по каждму игроку.
    state.playersList.forEach(name => {
        const nameNode = this.getEmptyDiv();

        nameNode.textContent = `${name} - ${state[name].availablePower}`;

        logNode.append(nameNode);
    });

    // Статус игры, чей ход
    const turnNode = this.getDiv(null, null, `turn - ${state.currentTurn}`);
    const stepNode = this.getDiv(null, null, `step - ${state.currentStepType}`);

    logNode.append(turnNode, stepNode);

    return logNode;
}