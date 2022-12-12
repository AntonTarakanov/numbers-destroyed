import { HANDLER_TYPE } from '../constants';

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

        if (type === HANDLER_TYPE.TURN_BUTTON_CLICK) {
            DataAPI.activeGivePowerStep();
        }

        if (type === HANDLER_TYPE.GIFT_END_BUTTON_CLICK) {
            const playerInfo = DataAPI.getNextPlayerInfo();

            console.log('playerInfo', playerInfo);

            // Получить след. игрока.
            // если человек - меняем статусы. Ждём хода.
            // если комп - меняем статусы. Делаем ход.

            // Обработка хода соперника.
            // Ожидание пока сходит соперник.
            // appData.activeGivePowerStep();

            // DataAPI.activeGivePowerStep();

            console.log('Завершить раздачу this', this);
        }
    }
}
