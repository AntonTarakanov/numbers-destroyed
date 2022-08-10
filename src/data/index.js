import { DEFAULT_CONFIG } from './constants';
import { createState } from './state';
import { createMap, setRandomElementsInMap } from './map';

/**
 * Набор данных необходимый для работы приложения.
 */
export class DataHelper {
    constructor(domIds, handlers) {
        this.domIds = domIds;
        this.handlers = handlers;

        this.config = DEFAULT_CONFIG;
    }

    createApp() {
        this.playersName = this.getPlayersName();
        this.state = createState(this.playersName);

        const emptyMap = createMap(this.config, this.state);
        this.map = setRandomElementsInMap(emptyMap, this.state);

        this.setStepType(this.getFirstTurnName(), 'setActivePlayer');

        return true;
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
}