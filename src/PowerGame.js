import { PowerDataAPI } from './data';
import { PowerRenderAPI } from './render';
import { PowerLogicAPI } from './power';

import { BASE_HANDLER_TYPES } from './library';

import { tileClickHandler } from './power/powerTurn';
import { HANDLER_TYPE, TURN_BUTTON_EVENT_TYPES, TURN_BUTTON_EVENTS } from './constants';

/**
 * Игра PowerNumber.
 */
export default class PowerGameApp {
    constructor(config, domIds, isDev) {
        const RENDER_CONFIG = {
            USE_TABLE: config.USE_TABLE,
            DOM_IDS: domIds,
        }

        this.logicAPI = new PowerLogicAPI(isDev);
        this.dataAPI = new PowerDataAPI(this.dataHandler.bind(this), config, isDev);
        this.renderAPI = new PowerRenderAPI(this.domHandler.bind(this), RENDER_CONFIG, isDev);

        this.config = config;

        this.isDev = isDev;
    }

    start() {
        this.renderAPI.createApp(this.dataAPI.matrix);
        this.dataAPI.setFirstTurn();

        if (this.isDev) {
            this.renderAPI.showDevButton(this.dataAPI.state.getCurrentStepType());

            window.testDataAPI = this.dataAPI;
            window.testRenderAPI = this.renderAPI;
            window.testLogicAPI = this.logicAPI;
        }
    }

    dataHandler(type, data) {
        if (BASE_HANDLER_TYPES.ELEMENT_CHANGED === type) {
            const tile = this.dataAPI.getItemByPosition(data);

            this.renderAPI.rerenderTile(tile, this.config.MATRIX_TYPE);
        }

        if (TURN_BUTTON_EVENT_TYPES.HIGHLIGHT === type) {
            this.renderAPI.rerenderTurnButton(type, true);
        }

        if (TURN_BUTTON_EVENT_TYPES.ACTIVE_GIFT_VIEW === type) {
            this.renderAPI.rerenderTurnButton(type, data);
        }
    }

    domHandler(event, targetElement, type) {
        if (this.isDev) {
            console.log(event, targetElement, type);
        }

        if (BASE_HANDLER_TYPES.TILE_CLICK === type) {
            tileClickHandler(event, targetElement, this.dataAPI);
        }

        if (TURN_BUTTON_EVENTS.includes(type)) {
            this.logicAPI.turnButtonClickHandler(this.dataAPI, this.renderAPI, { type });
        }

        if (type === HANDLER_TYPE.DEV_DO_RANDOM_1) {
            this.logicAPI.devHandler(type, this.dataAPI, this.renderAPI);
        }
    }
}