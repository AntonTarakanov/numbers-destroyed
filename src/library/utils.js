/**
 * Возвращает рандомное число по переданным параметрам.
 * @param {number} max.
 * @param {number} min.
 * @return {number}
 */
export const getRandomNumber = (max = 10, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;