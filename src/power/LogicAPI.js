import { HANDLER_TYPE, STEP_TYPE } from '../constants';

/**
 * Набор методов для выполнения событий приложения.
 */
export class PowerLogicAPI {

    /**
     * Выполняем рандомные атаки по переданному игроку
     *
     * @param {string} name
     * @param {PowerDataAPI} DataApi -
     */
    doRandomAttacks(name, DataApi) {
        const tileList = DataApi.matrix.getTileListByCanAttack(name);

        tileList.forEach(tile => {
            const availableTile = DataApi.getOpponentTileList(tile.position);

            if (availableTile.length) {
                DataApi.doPCAttack(tile.position, availableTile[0].position, name);
            }
        });
    }

    /**
     *
     */
    doSimpleGiftPower(name, DataApi) {
        const tileList = DataApi.matrix.getTileListByPlayer(name);

        tileList.forEach(tile => {
            DataApi.doGivePowerPC(name, tile.position);
        });
    }

    /**
     * Обработка клика по кнопке хода.
     * Кнопка поддерживает разные состояния с разной реакцией.
     *
     * @param {PowerDataAPI} DataAPI.
     * @param {object} RenderAPI.
     * @param {object} info, { type } - на случай необходимости доп. информации.
     */
    turnButtonClickHandler(DataAPI, RenderAPI, info) {
        const { type } = info;

        console.log('turnButtonClickHandler active');

        if (type === HANDLER_TYPE.TURN_BUTTON_CLICK) {
            DataAPI.activeGivePowerStep();
        }

        if (type === HANDLER_TYPE.GIFT_END_BUTTON_CLICK) {
            const { info: nextPlayerInfo, name: nextPlayerName } = DataAPI.getNextPlayerInfo();

            if (nextPlayerInfo.isPeople) {
                console.log('Данный функционал не реализован.');
                DataAPI.setStepType(nextPlayerName, STEP_TYPE.CHOOSE_FOR_ATTACK, true);
            } else {
                console.log('ХОД NEXT');

                DataAPI.doNextTurn(nextPlayerName);
                this.doRandomAttacks(nextPlayerName, DataAPI);
                this.doSimpleGiftPower(nextPlayerName, DataAPI);
                this.turnButtonClickHandler(DataAPI, RenderAPI, {
                    type: HANDLER_TYPE.GIFT_END_BUTTON_CLICK,
                });
            }

            // Обработка хода соперника.
            // Ожидание пока сходит соперник.
            // appData.activeGivePowerStep();

            // DataAPI.activeGivePowerStep();
        }
    }
}
