import '/style.css';
// import Icon from './icon.png';
import { baseForm } from "./render/baseForm";
import { createDataTools } from './data/base';

/**
 * Инициализация приложения.
 */
function createApp() {
    const elem = baseForm();
    const dataTools = createDataTools();

    document.body.appendChild(elem);
}

createApp();