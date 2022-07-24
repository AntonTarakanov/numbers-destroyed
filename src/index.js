import '/style.css';
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

            createFullMapByMatrix(dataTools.map, onClickHandler);
        }
    } catch(error) {
        console.log(error);
    }
}

const onClickHandler = () => {
    console.log('onClickHandler');
}

createApp();