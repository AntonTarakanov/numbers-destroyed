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

            // Брать значение из контекста или конфига.
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
const onClickHandler = (event, dataTools) => {
    const whoseTurnKey = dataTools.getActivePlayer();
    const whoseTurnItem = dataTools.getPlayerStateByName(whoseTurnKey);
}

createApp();