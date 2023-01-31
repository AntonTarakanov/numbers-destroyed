import { HANDLER_TYPE, STEP_TYPE, TURN_BUTTON_EVENT_TYPES } from '../constants';

/**
 * Набор методов для выполнения событий приложения.
 */
export class PowerLogicAPI {
    constructor(isDev) {
        this.isDev = isDev;
    }


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
            DataAPI.activeGivePowerStep(true);
            RenderAPI.showDevButton(DataAPI.state.getCurrentStepType());
        }

        if (type === HANDLER_TYPE.GIFT_END_BUTTON_CLICK) {
            const { info: nextPlayerInfo, name: nextPlayerName } = DataAPI.getNextPlayerInfo();

            if (nextPlayerInfo.isPeople) {
                DataAPI.setStepType(nextPlayerName, STEP_TYPE.CHOOSE_FOR_ATTACK, true);
                RenderAPI.showDevButton(DataAPI.state.getCurrentStepType());
                RenderAPI.rerenderTurnButton(TURN_BUTTON_EVENT_TYPES.ACTIVE_TURN_BUTTON, { highlight: false });
            } else {
                DataAPI.doNextTurn(nextPlayerName);
                this.doRandomAttacks(nextPlayerName, DataAPI);
                DataAPI.activeGivePowerStep();
                this.doSimpleGiftPower(nextPlayerName, DataAPI);
                this.turnButtonClickHandler(DataAPI, RenderAPI, {
                    type: HANDLER_TYPE.GIFT_END_BUTTON_CLICK,
                });
            }
        }
    }

    devHandler(type, dataAPI, renderAPI) {
        if (!this.isDev) {
            return;
        }

        if (type === HANDLER_TYPE.DEV_DO_RANDOM_1) {
            const currentStepType = dataAPI.state.getCurrentStepType();
            const currentTurn = dataAPI.state.getCurrentTurn();

            if (currentStepType === STEP_TYPE.GIVE_POWER) {
                this.doSimpleGiftPower(currentTurn, dataAPI);
                // renderAPI.rerender('turnButtonActive');
            }

            if (currentStepType === STEP_TYPE.CHOOSE_FOR_ATTACK) {
                this.doRandomAttacks(currentTurn, dataAPI);
            }
        }
    }
}
