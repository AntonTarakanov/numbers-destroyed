/**
 * Самые простые методы для работы с данными в виде матрицы.
 */
export class BaseMatrix extends Array {

    constructor(config) {
        super();

        this.MAX_X = config.SIZE.x;
        this.MAX_Y = config.SIZE.y;
    }

    /**
     * Получить элемент матрицы.
     *
     * @param {object} position - { x, y } .
     */
    getItem(position) {
        if (!this.checkPositionLimits(position)) {
            console.log('checkPositionLimits ERROR');

            return null;
        }

        return this[position.y][position.x];
    }

    /**
     * Проверка соответствию границы матрицы.
     */
    checkPositionLimits({ x, y }) {
        const limitsMethod = (value, maxLimit) => value >= 0 && value <= maxLimit;

        return limitsMethod(x, this.MAX_X) && limitsMethod(y, this.MAX_Y);
    }
}