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
        const proxyDataHandler = function(position) {
            return busDataHandler.call(AppData, AppRender, position);
        }
        const proxyDomHandler = function(event, context) {
            busDomHandler(event, context, AppData);
        }

        const AppData = new DataHelper(proxyDataHandler);
        const AppRender = new RenderHelper(renderHelperArg1, proxyDomHandler);

        const dataCreated = AppData.createApp();
        const formCreated = AppRender.createApp();

        if (formCreated && dataCreated) {
            AppRender.createMap(AppData.matrix, onClickHandler);
            AppRender.createLog(AppData.state);
        }
    } catch(error) {
        console.log(error);
    }
}

function busDataHandler(AppRender, position) {
    const item = this.findItemByPosition(position);

    AppRender.rerenderTD(this.matrix, item);
    AppRender.rerenderLog(this.state);
}

/**
 *
 */
function busDomHandler(event, context, appData) {
    onClickHandler(event, context, appData);
}

/**
 * @param {event} event
 * @param {object} context
 * @param {DataHelper} appData
 */
const onClickHandler = (event, context, appData) => {
    // const entries = context.getAttributeNames().map(item => [item, context.getAttribute(item)]);
    // const attributeObj = Object.fromEntries(entries);
    const attrDataset = context.dataset;

    const playerName = attrDataset.playername;
    const position = { x: Number(attrDataset.positionX), y: Number(attrDataset.positionY) };
    const whoseTurnItem = appData.getStateByName(playerName);

    // Ожидание выбора своей клетки для совершения хода.
    if (whoseTurnItem.stepType === STEP_TYPE.GIVE_POWER) {
        // могу кликнуть только по своей клетке
        // выделить свою клетку
        // подсветить возможные клетки после клика
        // меняем stepType

        // Пишем в клетку в matrix -> меняем state -> проверки и смена статусов.
        appData.doGivePower(position, playerName);
    }

    if (whoseTurnItem.stepType === 'opponentWaiting') {
        // ничего не могу
        console.log('Дождитесь хода соперника.');
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