import { STEP_TYPE } from '../constants';
import { getPositionObject, someEqualPosition } from './utils';

/**
 * Обработка клика по плитке.
 * Плитки меняют состояния в зависимости от типа хода.
 *
 * TODO: привести к единому виду с "turnButtonClickHandler".
 * @param {event} event
 * @param {object} context
 * @param {DataHelper} appData
 */
export const tileClickHandler = (event, context, appData) => {
    const attrDataset = context.dataset;

    const currentStepTypeState = appData.getStateProperty('currentStepType');
    const currentTurnState = appData.getStateProperty('currentTurn');

    const tilePlayerName = attrDataset.playername;
    const pressedPosition = getPositionObject(attrDataset.positionX, attrDataset.positionY);

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
        const availableList = appData.getAvailablePosition();

        // Выполнить атаку / сбросить ход.
        if (someEqualPosition(availableList, pressedPosition)) {
            appData.doPeopleAttack(pressedPosition);
        } else {
            appData.doResetSelectForAttack();
        }
    }

    // Ожидание выбора своих клеток для раздачи power.
    if (currentStepTypeState === STEP_TYPE.GIVE_POWER) {
        appData.doGivePower(tilePlayerName, pressedPosition);
    }
}