import { createEmptyDiv, getClassByColor, createDiv } from './helper';
import { CELL_CLASS_NAME, CONNECT_CLASS_NAME } from './constants';
import { CONNECT_TYPE } from '../constants';

/**
 *
 * @param {object} item - свойства color может быть пустым.
 */
const getWrapElement = item => {
    const element = createEmptyDiv();
    let elementClassName = `${CELL_CLASS_NAME.COMMON} flex`;

    if (item.color?.value) {
        const colorClass = getClassByColor(item.color.value);
        elementClassName = `${elementClassName} ${colorClass}`;
    }

    element.className = elementClassName;

    return element;
}

/**
 * Рендер верхней части клетки.
 * TODO: на данный момент middle - это лишний элемент. Можно убрать.
 * @param {array} connectList - список соединение строками.
 */
const getTopElement = connectList => {
    const element = createDiv('cell_row flex justifySpaceBetween');

    const left = createDiv();
    const middle = createDiv('cell_connect cell_connect_empty');
    const right = createDiv('cell_connect cell_connect_empty');

    if (connectList.includes(CONNECT_TYPE.LEFT_TOP)) {
        left.className = `${CONNECT_CLASS_NAME.BASE} ${CONNECT_CLASS_NAME.DIAGONAL_LEFT}`;
    }

    element.append(left, middle, right);

    return element;
}

const getMiddleElement = powerValue => {
    const element = createDiv('cell_row flex justifySpaceBetween');

    const left = createDiv('cell_connect cell_connect_empty');
    const middle = createDiv('cell_connect cell_connect_empty');
    const right = createDiv('cell_connect cell_connect_empty');

    if (powerValue) {
        middle.textContent = powerValue;
    }

    element.append(left, middle, right);

    return element;
}

const getBottomElement = connectList => {
    const element = createDiv('cell_row flex justifySpaceBetween');

    const left = createDiv('cell_connect cell_connect_empty');
    const middle = createDiv('cell_connect cell_connect_empty');
    const right = createDiv();

    if (connectList.includes(CONNECT_TYPE.RIGHT_BOTTOM)) {
        right.className = `${CONNECT_CLASS_NAME.BASE} ${CONNECT_CLASS_NAME.DIAGONAL_RIGHT}`;
    }

    element.append(left, middle, right);

    return element;
}

/**
 * Базовая DOM-клетка для игры со всем наполнением.
 * @param {object} item - className, color?: { stepType, value(color) }, connectList: [], position, powerValue, type.
 */
export const getPowerTileRenderElement = item => {
    const wrap = getWrapElement(item);

    const topElement = getTopElement(item.connectList);
    const middleElement = getMiddleElement(item.powerValue);
    const bottomElement = getBottomElement(item.connectList);

    wrap.append(topElement, middleElement, bottomElement);

    return wrap;
}