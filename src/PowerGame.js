import { PowerDataAPI } from './data';
import { PowerRenderAPI } from './render';
import { PowerLogicAPI } from './power';

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

        this.isDev = isDev;
    }

    start() {
        this.renderAPI.createApp(this.dataAPI.matrix);

        if (this.isDev) {
            window.testDataAPI = this.dataAPI;
            window.testRenderAPI = this.renderAPI;
            window.testLogicAPI = this.logicAPI;
        }
    }

    dataHandler(param1, param2, param3) {
        console.log('dataHandler');
        console.log(param1);
        console.log(param2);
        console.log(param3);
    }

    domHandler(param1, param2, param3) {
        console.log('domHandler');
        console.log(param1);
        console.log(param2);
        console.log(param3);
    }
}