/**
 * Возвращает рандомное число по переданным параметрам.
 * @param {number} max.
 * @param {number} min.
 * @return {number}
 */
export const getRandomNumber = (max = 10, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Возвращает рандомно true/false;
 *
 * @param {number} chance
 * @return {boolean}
 */
export const getRandomBoolean = (chance) => {
    let param = 1;

    if (chance === 25) {
        param = 3;
    }

    return !!getRandomNumber(param);
};