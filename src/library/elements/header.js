import { getDiv } from './utils';
import burger from '../static/free-icon-font-menu-burger.svg';
import settings from '../static/free-icon-font-settings.svg';

/**
 * Шапка с кнопками бутерброда и шестерёнкой.
 *
 * @param {string} headerClassName
 * @param {string} imgClassName
 * @param {string} id
 */
export function getHeader(headerClassName, imgClassName, id) {
    const node = getDiv(headerClassName, id, );
    const burgerIcon = new Image();
    const settingsIcon = new Image();

    burgerIcon.src = burger;
    settingsIcon.src = settings;

    burgerIcon.className = imgClassName;
    settingsIcon.className = imgClassName;

    node.append(burgerIcon, settingsIcon);

    return node;
}