import { DEFAULT_CONFIG, CELL_TARGET_TYPE } from './constants';
import { createState } from './state';
import { createMap, setRandomElementsInMap } from './map';
import { STEP_TYPE, CELL_TYPE } from '../constants';

/**
 * Набор данных необходимый для работы приложения.
 */
export class DataHelper {
    constructor(handler) {
        this.handler = handler;
        this.config = DEFAULT_CONFIG;
    }

    createApp() {
        this.playersName = this.getPlayersName();
        this.state = createState(this.playersName);

        const emptyMap = createMap(this.config, this.state);
        this.map = setRandomElementsInMap(emptyMap, this.state);

        this.setFirstTurn();
        this.setCellType(CELL_TARGET_TYPE.byPlayerName, 'player0', CELL_TYPE.WAITING_SELECT);

        return true;
    }

    setFirstTurn() {
        this.setStepType(this.getFirstTurnName(), STEP_TYPE.GIVE_POWER);
    }

    /**
     * Возвращает имена/ключи игроков самым простым способом.
     * В дальнейшем можно сделать более интересную и настраиваемую систему.
     */
    getPlayersName() {
        const value = this.getNumberOfPlayers();
        const result = [];

        for (let i = 0; i < value; i++) {
            result.push('player' + i);
        }

        return result;
    }

    getNumberOfPlayers() {
        return this.config.COUNT_PLAYER;
    }

    getFirstTurnName() {
        return this.playersName[this.config.FIRST_TURN_INDEX];
    }

    setStepType(name, value) {
        this.state[name].stepType = value;
    }

    /**
     * Проставить stepType.
     * @param {string} targetType - тип простановки. На все, по id, ещё какие-то выборки.
     * @param {any} target
     * @param {string} value
     */
    setCellType(targetType, target, value) {
        if (CELL_TARGET_TYPE.byPlayerName === targetType) {
            this.map.forEach(row => {
                row.forEach(cell => {
                    if (cell.playerName === target) {
                        cell.type = value;
                    }
                });
            });
        }
    }
}