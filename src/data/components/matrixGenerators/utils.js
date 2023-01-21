/**
 * Проверка чётное ли число.
 *
 * @param {number} value
 */
export const isEvenNumber = value => value % 2 === 0;

/**
 * Проверка границ. Дублируется.
 *
 * @param {object} position - { x, y }.
 * @param {object} limits - { maxX, maxY }.
 */
export const checkPositionLimits = ({ x, y }, { maxX, maxY }) => {
    const limitsMethod = (value, maxLimit) => value >= 0 && value <= maxLimit;

    return limitsMethod(x, maxX) && limitsMethod(y, maxY);
}
