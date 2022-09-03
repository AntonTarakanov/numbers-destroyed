import { COLOR_LIST } from '../constants';
import { State } from '../library/State';

export class PowerState extends State {
    constructor(names) {
        super();

        this[STATE_FIELDS.PLAYERS_LIST] = [ ...names ];
        this[STATE_FIELDS.CURRENT_TURN] = null;
        this[STATE_FIELDS.CURRENT_STEP_TYPE] = null;
        this[STATE_FIELDS.ACTIVE_TILE_POSITION] = {};

        names.forEach((name, index) => {
            this.setState(name, this.createPlayerStateObj(COLOR_LIST[index]));
        });
    }

    createPlayerStateObj(value) {
        return new PlayerState(value);
    }
}

export class PlayerState extends State {
    constructor(value) {
        super();

        this[STATE_FIELDS.STEP_TYPE] = null;
        this[STATE_FIELDS.VALUE] = value || '';
        this[STATE_FIELDS.AVAILABLE_POWER] = 0;
    }
}

export const STATE_FIELDS = {
    STEP_TYPE: 'stepType',                  // шаг/тип действия на клетке.
    VALUE: 'value',                         // цвет.
    AVAILABLE_POWER: 'availablePower',      // доступно power.
    PLAYERS_LIST: 'playersList',            // список игроков.
    CURRENT_TURN: 'currentTurn',            // текущий ход, активный игрок.
    CURRENT_STEP_TYPE: 'currentStepType',   // этап текущего хода.
    ACTIVE_TILE_POSITION: 'activeTilePosition', // координаты активной плитки.
}