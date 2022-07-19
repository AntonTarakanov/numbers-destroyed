import { createDiv } from './helper';
import { DOM_ID } from './constants';

/**
 *
 */
export const baseForm = () => {
    const appElem = createDiv();
    const map = createDiv();

    map.className = 'flex';
    map.id = DOM_ID.COMMON_MAP;
    appElem.className = 'application flex';
    appElem.appendChild(map);

    return appElem;
}