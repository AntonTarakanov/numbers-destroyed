import './style.css';
import { PowerRenderHelper } from './render';
import { PowerDataAPI } from './data';
import { HANDLER_TYPE, TURN_BUTTON_EVENTS } from './constants';
import { tileClickHandler } from './power/powerTurn';
import { POWER_CONFIG } from './data/constants';
import { PowerLogicAPI } from './power/LogicAPI';

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
        // TODO: привести к единому виду.
        const proxyDataHandler = function(type, data) {
            return busDataHandler(AppData, AppRender, data, type);
        }
        const proxyDomHandler = function(event, context, type) {
            busDomHandler(event, context, AppData, type, LogicAPI);
        }

        const LogicAPI = new PowerLogicAPI();
        const AppData = new PowerDataAPI(proxyDataHandler, POWER_CONFIG, isDev);
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
        AppRender.rerenderTurnButton('highlight', true);
    }

    if (type === 'turnButtonInactive') {
        AppRender.rerenderTurnButton('highlight', false);
    }

    if (type === 'activeGiftView') {
        AppRender.rerenderTurnButton('activeGiftView', data);
    }

    if (type === 'dev_AutoGiftActive') {
        AppRender.rerenderTurnButton('dev_AutoGiftActive');
    }
}

/**
 *
 */
function busDomHandler(event, context, appData, type, LogicAPI) {
    console.log(event, context, appData, type);

    if (type === HANDLER_TYPE.TILE_CLICK) {
        tileClickHandler(event, context, appData);
    }

    if (TURN_BUTTON_EVENTS.includes(type)) {
        LogicAPI.turnButtonClickHandler(appData, null, { type });
    }

    if (type === HANDLER_TYPE.DEV_DO_RANDOM_1) {
        if (appData.state.currentStepType === 'givePower') {
            LogicAPI.doSimpleGiftPower(appData.state.currentTurn, appData);
            appData.rerender('turnButtonActive');
        } else {
            LogicAPI.doRandomAttacks(appData.state.currentTurn, appData);
        }
    }
}

createApp();
