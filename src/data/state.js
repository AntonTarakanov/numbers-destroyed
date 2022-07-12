import { COLOR_LIST } from '../constants';

/**
 * Инициализация стейта.
 * @param {array} names.
 */
export const createState = names => {
    const playerState = {
        stepType: null, //
        color: '',      // цвет
    };
    const arr = names.map((item, index) => [item, {...playerState, color: COLOR_LIST[index] }]);
    const result = Object.fromEntries(arr);

    result.playersList = [...names];

    return result;
};