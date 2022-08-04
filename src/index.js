import './style.css';
import { createBaseForm } from './render/baseForm';
import { baseFormIsCreated, createFullMapByMatrix } from './render/helper';
import { createDataTools } from './data/base';

/**
 * Инициализация приложения.
 */
function createApp() {
    try {
        createBaseForm();

        if (baseFormIsCreated()) {
            const dataTools = createDataTools();

            // TODO: Брать значение из контекста или конфига.
            dataTools.setActivePlayer(0);

            createFullMapByMatrix(dataTools, onClickHandler);
        }
    } catch(error) {
        console.log(error);
    }
}

/**
 * Необходимо получить элемент по которому был совершён клик.
 */
const onClickHandler = (event, dataTools, clickElem) => {
    const getterForAttribute = (attr, key) => {
        const attrKey = 'key';
    }

    const entries = clickElem.getAttributeNames().map(item => [item, clickElem.getAttribute(item)]);
    const attributeObj = Object.fromEntries(entries);
    const whoseTurnKey = dataTools.getActivePlayer();
    const whoseTurnItem = dataTools.getPlayerStateByName(whoseTurnKey);

    if (whoseTurnItem.stepType === 'activeWaiting') {
        // могу кликнуть только по своей клетке
        // выделить свою клетку
        // подсветить возможные клетки после клика
    }

    if (whoseTurnItem.stepType === 'opponentWaiting') {
        // ничего не могу
    }

    if (whoseTurnItem.stepType === 'selectOpponent') {
        // необходимо кликнуть по сопернику
        // подсветить возможные клетки соперника
        // выполнить перерасчёт
    }
}

createApp();