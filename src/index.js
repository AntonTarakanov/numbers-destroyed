import './style.css';
import { PowerRenderHelper } from './render';
import { PowerDataHelper } from './data';
import { HANDLER_TYPE } from './constants';
import { tileClickHandler } from './power/powerTurn';
import { POWER_CONFIG } from './data/constants';
import { LogicApi } from './power/LogicApi';

const APP_NAME = 'powerValue';
const isDev = true;

/**
 * Инициализация приложения.
 * Классы только для текущего приложения. Далее можно вынести общие методы в небольшую библиотеку.
 * Смысл метода в комбинированном взаимодействии двух классов через переданные в них handler.
 * Возможно имеет смысл создать общий класс для этого взаимодействия.
 */
function createApp() {
    const renderHelperArg1 = { root: APP_NAME };

    try {
        const proxyDataHandler = function(type, data) {
            return busDataHandler(AppData, AppRender, data, type);
        }
        const proxyDomHandler = function(event, context, type) {
            busDomHandler(event, context, AppData, type);
        }

        const AppData = new PowerDataHelper(proxyDataHandler, POWER_CONFIG, isDev);
        const AppRender = new PowerRenderHelper(renderHelperArg1, proxyDomHandler, isDev);

        AppData.createApp();
        AppRender.createApp(AppData.matrix, AppData.state);
    } catch(error) {
        console.log(error);
    }
}

/**
 * TODO: добавить возможность сразу передавать Tile, без лишнего запроса "getItemByPosition".
 */

function busDataHandler(AppData, AppRender, data, type) {

    if (type === 'rerenderByPosition') {
        const item = AppData.getItemByPosition(data);

        AppRender.rerenderTD(AppData.matrix, item);
        AppRender.rerenderLog(AppData.state);
    }

    if (type === 'turnButtonActive') {
        AppRender.rerenderTurnButton(true);
    }

    if (type === 'turnButtonInactive') {
        AppRender.rerenderTurnButton(false);
    }
}

/**
 *
 */
function busDomHandler(event, context, appData, type) {
    if (type === HANDLER_TYPE.TILE_CLICK) {
        tileClickHandler(event, context, appData);
    }

    if (type === HANDLER_TYPE.TURN_BUTTON_CLICK) {
        appData.activeGivePowerStepForPeople();
    }

    if (type === HANDLER_TYPE.DEV_DO_RANDOM_1) {
        LogicApi.doRandomAttacks(appData.state.currentTurn, appData);
    }
}

createApp();