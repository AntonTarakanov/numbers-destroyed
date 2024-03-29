import { COLOR_LIST, STEP_TYPE } from '../../constants';
import { BaseState } from '../../library';

export class PowerState extends BaseState {
    constructor(names) {
        super();

        this[STATE_FIELDS.PLAYERS_LIST] = [ ...names ];
        this[STATE_FIELDS.CURRENT_TURN] = null;
        this[STATE_FIELDS.CURRENT_STEP_TYPE] = null;
        this[STATE_FIELDS.ACTIVE_TILE_POSITION] = {};
        this[STATE_FIELDS.AVAILABLE_POSITION] = [];

        names.forEach((name, index) => {
            this.setState(name, this.createPlayerStateObj(COLOR_LIST[index]));
        });
    }

    createPlayerStateObj(value) {
        return new PlayerState(value);
    }

    setCurrentStepType(value) {
        this.setState(STATE_FIELDS.CURRENT_STEP_TYPE, value);
    }

    getCurrentStepType() {
        return this.getStateProperty(STATE_FIELDS.CURRENT_STEP_TYPE);
    }

    getCurrentTurn() {
        return this.getStateProperty(STATE_FIELDS.CURRENT_TURN);
    }

    setCurrentTurn(value) {
        this.setState(STATE_FIELDS.CURRENT_TURN, value);
    }

    getPlayersList() {
        return this.getStateProperty(STATE_FIELDS.PLAYERS_LIST);
    }

    changeStepType(name, value) {
        this.setStepTypeByName(name, value);
        this.getPlayersList().forEach(otherName => {
            if (otherName !== name) {
                this.setStepTypeByName(otherName, STEP_TYPE.WAITING);
            }
        });
    }

    setStepTypeByName(name, value) {
        this[name].setStepType(value);
    }

    getAvailablePower(playerName) {
        return this[playerName][STATE_FIELDS.AVAILABLE_POWER];
    }

    setAvailablePower(playerName, power) {
        this[playerName][STATE_FIELDS.AVAILABLE_POWER] = power;
    }

    getAvailablePosition() {
        return this.getStateProperty(STATE_FIELDS.AVAILABLE_POSITION);
    }

    setAvailablePosition(value) {
        this.setState(STATE_FIELDS.AVAILABLE_POSITION, value);
    }

    resetAvailablePosition() {
        this.setState(STATE_FIELDS.AVAILABLE_POSITION, []);
    }

    resetActiveTilePosition() {
        this.setState(STATE_FIELDS.ACTIVE_TILE_POSITION, {});
    }

    setIsPeopleFlagTrue(peopleNameList) {
        peopleNameList.forEach(name => {
            this[name].setIsPeopleFlag(true);
        });
    }

    getIsPeopleFlag(playerName) {
        return this[playerName].getIsPeopleFlag();
    }

    getPlayerInfo(playerName) {
        return this[playerName];
    }

    getPlayerColor(playerName) {
        return this.getPlayerInfo(playerName).value;
    }

    /**
     * @return {array} [ [name, color], ... ] .
     */
    getShotInfo() {
        return this.getPlayersList().map(name => [name, this.getPlayerColor(name)]);
    }
}

/**
 *
 */
export class PlayerState extends BaseState {
    constructor(value) {
        super();

        this[STATE_FIELDS.STEP_TYPE] = null;
        this[STATE_FIELDS.VALUE] = value || '';
        this[STATE_FIELDS.AVAILABLE_POWER] = 0;
        this[STATE_FIELDS.IS_PEOPLE] = false;
    }

    setStepType(type) {
        this.setState(STATE_FIELDS.STEP_TYPE, type)
    }

    setIsPeopleFlag(value) {
        this.setState(STATE_FIELDS.IS_PEOPLE, value);
    }

    getIsPeopleFlag() {
        return this.getStateProperty(STATE_FIELDS.IS_PEOPLE);
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
    AVAILABLE_POSITION: 'availablePosition',    // доступные для активной клетки ходы.
    IS_PEOPLE: 'isPeople',                  // флаг, человек.
}