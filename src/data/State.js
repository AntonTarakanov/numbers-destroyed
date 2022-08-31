import { COLOR_LIST } from '../constants';
import { State } from '../library/State';

export class PowerState extends State {
    constructor(names) {
        super();

        this[STATE_FIELDS.PLAYERS_LIST] = [ ...names ];
        this[STATE_FIELDS.CURRENT_TURN] = null;
        this[STATE_FIELDS.CURRENT_STEP_TURN] = null;
    }

    createPlayerStateObj(value) {
        return {
            [STATE_FIELDS.STEP_TYPE]: null,
            [STATE_FIELDS.VALUE]: value || '',
            [STATE_FIELDS.AVAILABLE_POWER]: 0,
        }
    }
}

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
    result.currentTurn = null;
    result.currentStepType = null;

    return result;
};

export const STATE_FIELDS = {
    STEP_TYPE: 'stepType',                  // шаг/тип действия на клетке.
    VALUE: 'value',                         // цвет.
    AVAILABLE_POWER: 'availablePower',      // доступно power.
    PLAYERS_LIST: 'playersList',            // список игроков.
    CURRENT_TURN: 'currentTurn',            //
    CURRENT_STEP_TURN: 'currentStepType',   //
}