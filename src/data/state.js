import { COLOR_LIST } from '../constants';

/**
 * Инициализация стейта.
 * @param {array} names.
 */
export const createState = names => {
    const playerState = {
        stepType: null,     // шаг/тип действия на клетке.
        value: '',          // цвет.
        availablePower: 0,  // доступно power.
    };
    const arr = names.map((item, index) => [item, { ...playerState, value: COLOR_LIST[index] }]);
    const result = Object.fromEntries(arr);

    result.playersList = [...names];

    return result;
};