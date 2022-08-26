import './style.css';
import { RenderHelper } from './render';
import { PowerDataHelper } from './data';
import { HANDLER_TYPE } from './constants';
import { tileClickHandler } from './power/powerTurn';
import { POWER_CONFIG } from './data/constants';

/**
 * Инициализация приложения.
 * Классы только для текущего приложения. Далее можно вынести общие методы в небольшую библиотеку.
 * Смысл метода в комбинированном взаимодействии двух классов через переданные в них handler.
 * Возможно имеет смысл создать общий класс для этого взаимодействия.
 */
function createApp() {
    const renderHelperArg1 = { root: 'powerValue' };

    try {
        const proxyDataHandler = function(position) {
            return busDataHandler.call(AppData, AppRender, position);
        }
        const proxyDomHandler = function(event, context, type) {
            busDomHandler(event, context, AppData, type);
        }

        const AppData = new PowerDataHelper(proxyDataHandler, POWER_CONFIG);
        const AppRender = new RenderHelper(renderHelperArg1, proxyDomHandler);

        AppData.createApp();
        AppRender.createApp(AppData.matrix, AppData.state);
    } catch(error) {
        console.log(error);
    }
}

function busDataHandler(AppRender, position) {
    const item = this.findItemByPosition(position);

    AppRender.rerenderTD(this.matrix, item);
    AppRender.rerenderLog(this.state);
}

function busDomHandler(event, context, appData, type) {
    if (type === HANDLER_TYPE.TILE_CLICK) {
        tileClickHandler(event, context, appData);
    }

    if (type === HANDLER_TYPE.TURN_BUTTON_CLICK) {
        console.log('buttonClick');
    }
}

createApp();