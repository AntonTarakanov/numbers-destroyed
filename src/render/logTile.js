import { LOG_CLASS } from './constants';
import { HANDLER_TYPE } from '../constants';

export function buildLog(state) {
    const onClickHandler = this.handler;
    const buttonHandler = function(event) {
        return onClickHandler(event, this, HANDLER_TYPE.TURN_BUTTON_CLICK);
    }

    const logNode = this.getDiv(LOG_CLASS.WRAP);
    const buttonNode = this.getDiv('log_button', 'Завершить ход');

    buttonNode.addEventListener('click', buttonHandler);

    // Информация по каждму игроку.
    state.playersList.forEach(name => {
        const nameNode = this.getEmptyDiv();

        nameNode.textContent = `${name} - ${state[name].availablePower}`;

        logNode.append(nameNode);
    });

    // Статус игры, чей ход
    const turnNode = this.getDiv(null, `turn - ${state.currentTurn}`);
    const stepNode = this.getDiv(null, `step - ${state.currentStepType}`);

    logNode.append(turnNode, stepNode, buttonNode);

    return logNode;
}