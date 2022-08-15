import './style.css';
import { RenderHelper } from './render';
import { DataHelper } from './data';
import { STEP_TYPE } from './constants';

/**
 * Инициализация приложения.
 * Классы только для текущего приложения. Далее можно вынести общие методы в небольшую библиотеку.
 * Смысл метода в комбинированном взаимодействии двух классов через переданные в них handler.
 * Возможно имеет смысл создать общий класс для этого взаимодействия.
 */
function createApp() {
    const renderHelperArg1 = { root: 'powerValue' };

    try {
        const proxyDataHandler = function() {
            return busDataHandler(AppRender);
        }
        const proxyDomHandler = function(event, context) {
            busDomHandler(event, context, AppData);
        }

        const AppData = new DataHelper(proxyDataHandler);
        const AppRender = new RenderHelper(renderHelperArg1, proxyDomHandler);

        const dataCreated = AppData.createApp();
        const formCreated = AppRender.createApp();

        if (formCreated && dataCreated) {
            AppRender.createFullMapByMatrix(AppData, onClickHandler);
        }
    } catch(error) {
        console.log(error);
    }
}

function busDataHandler() {
    console.log('busDataHandler');
}

/**
 *
 */
function busDomHandler(event, dataTools, context) {
    onClickHandler(event, dataTools, context);
}

/**
 * Необходимо получить элемент по которому был совершён клик.
 */
const onClickHandler = (event, context, appData) => {
    const entries = context.getAttributeNames().map(item => [item, context.getAttribute(item)]);
    const attributeObj = Object.fromEntries(entries);
    const attrDataset = context.dataset;

    const whoseTurnItem = appData.getStateByName(attrDataset.playername);

    // Ожидание выбора своей клетки для совершения хода.
    if (whoseTurnItem.stepType === STEP_TYPE.GIVE_POWER) {
        // additionalBorderForSelect

        // могу кликнуть только по своей клетке
        // выделить свою клетку
        // подсветить возможные клетки после клика
        // меняем stepType
    }

    if (whoseTurnItem.stepType === 'opponentWaiting') {
        // ничего не могу
    }

    if (whoseTurnItem.stepType === 'selectOpponent') {
        // необходимо кликнуть по сопернику
        // подсветить возможные клетки соперника
        // выполнить перерасчёт
        // меняем stepType
    }
    if (whoseTurnItem.stepType === 'setPower') {
        // можно кликать только по своим клеткам
        // есть ограничения по кол-ву кликов
        // меняем stepType
    }
}

createApp();