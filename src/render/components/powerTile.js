import { renderUtils } from '../../library';
import { getClassByColor } from '../helper';
import { CELL_CLASS_NAME, CONNECT_CLASS_NAME } from '../constants';
import { CONNECT_TYPE } from '../../constants';

const getContentWrap = () => renderUtils.getDiv('cell_row flex justifySpaceBetween');

/**
 *
 * @param {object} item - свойства color может быть пустым.
 */
const getWrapElement = item => {
    const element = renderUtils.getEmptyDiv();
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
 * На данный момент есть возможность только прописывать верхнюю девую свзяь.
 * TODO: на данный момент middle - это лишний элемент. Можно убрать.
 * @param {array} connectList - список соединение строками.
 */
const getTopElement = ({ connectList }) => {
    const element = getContentWrap();
    const emptyClass = `${CONNECT_CLASS_NAME.BASE} ${CONNECT_CLASS_NAME.EMPTY}`;

    const left = renderUtils.getDiv(CONNECT_CLASS_NAME.BASE);
    const middle = renderUtils.getDiv(emptyClass);
    const right = renderUtils.getDiv(emptyClass);

    if (connectList.includes(CONNECT_TYPE.LEFT_TOP)) {
        left.className = `${left.className} ${CONNECT_CLASS_NAME.DIAGONAL_LEFT}`;
    } else {
        left.className = `${left.className} ${CONNECT_CLASS_NAME.EMPTY}`;
    }

    element.append(left, middle, right);

    return element;
}

/**
 * Могут в том числе проставляться горизонтальные связи.
 */
const getMiddleElement = ({ powerValue, connectList }) => {
    const element = getContentWrap();
    let contentClass = `${CONNECT_CLASS_NAME.BASE} ${CONNECT_CLASS_NAME.EMPTY}`;

    if (connectList.includes(CONNECT_TYPE.LINE)) {
        contentClass = `${contentClass} ${CONNECT_CLASS_NAME.LINE}`;
    }

    const left = renderUtils.getDiv(contentClass);
    const middle = renderUtils.getDiv(contentClass);
    const right = renderUtils.getDiv(contentClass);

    if (powerValue) {
        middle.textContent = powerValue;
    }

    element.append(left, middle, right);

    return element;
}

const getBottomElement = ({ connectList }) => {
    const element = getContentWrap();
    const emptyClass = `${CONNECT_CLASS_NAME.BASE} ${CONNECT_CLASS_NAME.EMPTY}`

    const left = renderUtils.getDiv(emptyClass);
    const middle = renderUtils.getDiv(emptyClass);
    const right = renderUtils.getDiv(CONNECT_CLASS_NAME.BASE);

    if (connectList.includes(CONNECT_TYPE.RIGHT_BOTTOM)) {
        right.className = `${right.className} ${CONNECT_CLASS_NAME.DIAGONAL_RIGHT}`;
    } else {
        right.className = `${right.className} ${CONNECT_CLASS_NAME.EMPTY}`;
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
    const methodList = [getTopElement, getMiddleElement, getBottomElement];

    methodList.forEach(method => wrap.append(method(item)));

    return wrap;
}