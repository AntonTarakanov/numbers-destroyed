import './style.css';
import { RenderHelper } from './render';
import { DataHelper } from './data';

/**
 * Инициализация приложения.
 * Классы только для текущего приложения. Далее можно вынести общие методы в небольшую библиотеку.
 * Смысл метода в комбинированном взаимодействии двух классов через переданные в них handler.
 * Возможно имеет смысл создать общий класс для этого взаимодействия.
 */
function createApp() {
    const renderHelperArg1 = { root: 'powerValue' };
    const renderHelperArg2 = { cellClick: busDomHandler };

    try {
        const AppData = new DataHelper(busDataHandler);
        const AppRender = new RenderHelper(renderHelperArg1, renderHelperArg2);

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

function busDomHandler() {
    console.log('busDomHandler');
}

/**
 * Необходимо получить элемент по которому был совершён клик.
 */
const onClickHandler = (event, dataTools, clickElem) => {

    // TODO: Переписать вот это сложное на простое dataset.
    const entries = clickElem.getAttributeNames().map(item => [item, clickElem.getAttribute(item)]);
    const attributeObj = Object.fromEntries(entries);
    const whoseTurnKey = dataTools.getActivePlayer();
    const whoseTurnItem = dataTools.getPlayerStateByName(whoseTurnKey);

    // Ожидание выбора своей клетки для совершения хода.
    if (whoseTurnItem.stepType === 'activeWaiting') {
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