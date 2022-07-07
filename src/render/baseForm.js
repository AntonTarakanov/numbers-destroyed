import { createDiv } from './helper';

/**
 *
 */
export const baseForm = () => {
    const appElem = createDiv();
    const map = createDiv();

    map.className = 'flex';
    map.id = 'commonMap';
    appElem.className = 'application flex';
    appElem.appendChild(map);

    return appElem;
}