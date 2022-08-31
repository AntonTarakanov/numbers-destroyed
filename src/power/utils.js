/**
 *
 * @param {string|number} x
 * @param {string|number} y
 * @return {object}
 */
export const getPositionObject = (x, y) => {
    return {
        x: Number(x),
        y: Number(y)
    };
}

/**
 *
 * @param {object} obj1
 * @param {object} obj2
 * @return {boolean}
 */
export const equalPosition = (obj1, obj2) => obj1.x === obj2.x && obj1.y === obj2.y;

/**
 *
 * @param {array} positionList
 * @param {object} position
 * @return {boolean}
 */
export const someEqualPosition = (positionList, position) => {
    return positionList.some(item => equalPosition(item, position));
}