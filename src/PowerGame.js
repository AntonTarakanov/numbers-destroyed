import { PowerDataAPI } from './data';
import { PowerRenderAPI } from './render';
import { PowerLogicAPI } from './power';

import { BASE_HANDLER_TYPES } from './library';

import { tileClickHandler } from './power/powerTurn';

/**
 * Игра PowerNumber.
 */
export default class PowerGameApp {
    constructor(config, domIds, isDev) {
        const RENDER_CONFIG = {
            USE_TABLE: config.USE_TABLE,
            DOM_IDS: domIds,
        }

        this.logicAPI = new PowerLogicAPI();
        this.dataAPI = new PowerDataAPI(this.dataHandler.bind(this), config, isDev);
        this.renderAPI = new PowerRenderAPI(this.domHandler.bind(this), RENDER_CONFIG, isDev);

        this.config = config;

        this.isDev = isDev;
    }

    start() {
        this.renderAPI.createApp(this.dataAPI.matrix);
        this.dataAPI.setFirstTurn();

        if (this.isDev) {
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

        if (type === 'turnButtonActive') {
            console.log('turnButtonActive');
        }
    }

    domHandler(event, targetElement, type) {
        if (BASE_HANDLER_TYPES.TILE_CLICK === type) {
            tileClickHandler(event, targetElement, this.dataAPI);
        }
    }
}