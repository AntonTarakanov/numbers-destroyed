import { STEP_TYPE } from '../constants';

/**
 * Логика игры.
 */

/**
 * Обработка клика по плитке.
 *
 * @param {event} event
 * @param {object} context
 * @param {DataHelper} appData
 *
 */
export const tileClickHandler = (event, context, appData) => {
    const attrDataset = context.dataset;

    const currentStepTypeState = appData.getStateProperty('currentStepType');
    const currentTurnState = appData.getStateProperty('currentTurn');

    const tilePlayerName = attrDataset.playername;
    const pressedPosition = { x: Number(attrDataset.positionX), y: Number(attrDataset.positionY) };

    // Ожидание выбора своей клетки для дальнейшей атаки.
    if (currentStepTypeState === STEP_TYPE.CHOOSE_FOR_ATTACK) {

        // Можно нажать только на свою клетку.
        if (tilePlayerName === currentTurnState) {
            appData.doSelectForAttack(pressedPosition);
        } else {
            console.log('Нажмите на свою клетку.');
        }
    }

    // Ожидание клика по плитке оппонента для совершения атаки.
    if (currentStepTypeState === STEP_TYPE.ATTACK) {

        // Могу кликнуть только по сопернику.
        // Могу кликнуть только по соседнему сопернику.

        // необходимо кликнуть по сопернику
        // подсветить возможные клетки соперника
        // выполнить перерасчёт
        // меняем stepType
    }

    // Ожидание выбора своих клеток для раздачи power.
    if (whoseTurnItem.stepType === STEP_TYPE.GIVE_POWER) {
        // appData.doGivePower(pressedPosition, playerName);
    }

    // Ожидание пока сходит соперник.
    if (whoseTurnItem.stepType === 'opponentWaiting') {
        console.log('Дождитесь хода соперника.');
    }
}