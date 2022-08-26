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

    const playerName = attrDataset.playername;
    const position = { x: Number(attrDataset.positionX), y: Number(attrDataset.positionY) };
    const whoseTurnItem = appData.getStateByName(playerName);

    console.log('tileClickHandler', whoseTurnItem.stepType);

    // Ожидание выбора своей клетки для дальнейшей атаки
    if (whoseTurnItem.stepType === STEP_TYPE.CHOOSE_FOR_ATTACK) {
        appData.doSelectForAttack(position);
        // Игра со статусами.

        // проставить state type. Обозначит выделенную клетку.
        // Сбросить предыдущие выделенные клетки.
        // Выделить другие клетки оппонента.
    }

    // Ожидание клика по пилтке оппонента дял совершения атаки.
    if (whoseTurnItem.stepType === STEP_TYPE.ATTACK) {
        console.log('STEP_TYPE.ATTACK');
        // необходимо кликнуть по сопернику
        // подсветить возможные клетки соперника
        // выполнить перерасчёт
        // меняем stepType
    }

    // Ожидание выбора своих клеток для раздачи power.
    if (whoseTurnItem.stepType === STEP_TYPE.GIVE_POWER) {
        appData.doGivePower(position, playerName);
    }

    if (whoseTurnItem.stepType === 'opponentWaiting') {
        // ничего не могу
        console.log('Дождитесь хода соперника.');
    }
}