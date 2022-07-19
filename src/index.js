import '/style.css';
// import Icon from './icon.png';
import { baseForm } from './render/baseForm';
import { createDataTools } from './data/base';
import { renderTableByMatrix } from './render/map';

/**
 * Инициализация приложения.
 */
function createApp() {
    const baseFormElement = baseForm();
    const dataTools = createDataTools();
    const table = renderTableByMatrix(baseFormElement.firstChild, dataTools.map, onClickHandler);

    document.body.appendChild(baseFormElement);
}

const onClickHandler = () => {
    console.log('onClickHandler');
}

createApp();