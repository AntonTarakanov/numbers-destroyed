import { createDiv } from './helper';
import { DOM_ID } from './constants';

/**
 * Базовая пустая форма с картой, логированием, ID-элементов для дальнейшего добавления элементов.
 */
const getBaseForm = () => {
    const appElem = createDiv();
    const map = createDiv();

    map.className = 'flex';
    map.id = DOM_ID.COMMON_MAP;
    appElem.className = 'application flex';
    appElem.appendChild(map);

    return appElem;
}

/**
 * Создаёт и добавляет "baseForm" в body.
 */
export const createBaseForm = () => document.body.appendChild(getBaseForm());