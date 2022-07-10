/**
 * Инициализация стейта.
 * @param {array} names.
 */
export const createState = names => {
    const playerState = {
        stepType: null
    };
    const arr = names.map(item => [item, {...playerState}]);

    return Object.fromEntries(arr);
};