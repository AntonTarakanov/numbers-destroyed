import '/style.css';
// import Icon from './icon.png';
import { baseForm } from "./render/baseForm";

/**
 *
 */
function createApp() {
    const elem = baseForm();

    document.body.appendChild(elem);
}

createApp();