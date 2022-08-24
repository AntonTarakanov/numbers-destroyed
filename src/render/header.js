import { createDiv } from './helper';
import { DOM_ID } from './constants';
import burger from '../../static/free-icon-font-menu-burger.svg';
import settings from '../../static/free-icon-font-settings.svg';

export function buildHeader() {
    const node = createDiv('header', null, DOM_ID.HEADER);
    const burgerIcon = new Image();
    const settingsIcon = new Image();

    burgerIcon.src = burger;
    settingsIcon.src = settings;

    burgerIcon.className = 'header_img';
    settingsIcon.className = 'header_img';

    node.append(burgerIcon, settingsIcon);

    return node;
}