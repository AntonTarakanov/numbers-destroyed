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
     * Принимаем матрицу и последовательно записывает её.
     *
     * @param {array} matrix.
     */
    overwriteMatrix(matrix) {
        matrix.forEach((row, index) => {
            this[index] = row;
        });
    }

    /**
     * Получить элемент матрицы.
     *
     * @param {object} position - { x, y } .
     */
    getItem({ x, y }) {
        if (!this.checkPositionLimits({ x, y })) {
            console.log('checkPositionLimits ERROR');

            return null;
        }

        return this[y][x];
    }

    /**
     * Меняем одно переданное значение на другое
     *
     * @param {string} property
     * @param {any|array} oldValue
     * @param {any} newValue
     *
     * @return {array} [{ x, y }]. Координаты изменённых элементов.
     */
    changeParamByParam(property, oldValue, newValue) {
        const changedList = [];

        this.forEach(row => {
            row.forEach(item => {
                let isEqual;

                if (Array.isArray(oldValue)) {
                    isEqual = oldValue.some(oldValueItem => oldValueItem === item[property]);
                } else {
                    isEqual = item[property] === oldValue;
                }

                if (isEqual) {
                    item[property] = newValue;

                    changedList.push(item.position);
                }
            });
        });

        return changedList;
    }

    /**
     *
     */
    getEmptyMatrix() {
        if (!this.MAX_X && !this.MAX_Y) {
            return [[]];
        }

        for (let i = 0; i < this.MAX_Y; i++) {
            let rowResult = [];

            for (let j = 0; j < this.MAX_X; j++) {
                rowResult.push({ x: j, y: i });
            }

            result.push(rowResult);
        }

        return result;
    }

    /**
     * Проверка соответствию границы матрицы.
     */
    checkPositionLimits({ x, y }) {
        const limitsMethod = (value, maxLimit) => value >= 0 && value <= maxLimit;

        return limitsMethod(x, this.MAX_X) && limitsMethod(y, this.MAX_Y);
    }
}