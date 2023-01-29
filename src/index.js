import './style.css';
import { PowerRenderAPI } from './render';
import { PowerDataAPI } from './data';
import { HANDLER_TYPE } from './constants';
import { POWER_CONFIG } from './config';
import { PowerLogicAPI } from './power';

// TODO: новый способ инициализации приложения.
import PowerGameApp from './PowerGame';

const APP_NAME = 'powerValue';
const isDev = true;

function createApp() {
    const DOM_IDS = { root: APP_NAME };
    const powerGame = new PowerGameApp(POWER_CONFIG, DOM_IDS, isDev);

    powerGame.start();
}

createApp();

function createAppOld() {
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
        const AppRender = new PowerRenderAPI(renderHelperArg1, proxyDomHandler, isDev);

        AppData.initData();
        AppRender.createApp(AppData.matrix, AppData.state);
    } catch(error) {
        console.log(error);
    }
}

function busDataHandler(AppData, AppRender, data, type) {
    if (type === 'rerenderByPosition') {
        const item = AppData.getItemByPosition(data);

        AppRender.rerenderTD(AppData.matrix, item);
        // AppRender.rerenderLog(AppData.state);
    }

    if (type === 'turnButtonActive') {
        AppRender.rerenderTurnButton('highlight', true);
    }

    if (type === 'turnButtonInactive') {
        AppRender.rerenderTurnButton('highlight', false);
    }

    if (type === 'dev1_active') {
        AppRender.rerenderTurnButton('dev1_highlight', true);
    }

    if (type === 'dev1_inactive') {
        AppRender.rerenderTurnButton('dev1_highlight', false);
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
    if (type === HANDLER_TYPE.DEV_DO_RANDOM_1) {
        if (appData.state.currentStepType === 'givePower') {
            LogicAPI.doSimpleGiftPower(appData.state.currentTurn, appData);
            appData.rerender('turnButtonActive');
        } else {
            LogicAPI.doRandomAttacks(appData.state.currentTurn, appData);
        }
    }
}