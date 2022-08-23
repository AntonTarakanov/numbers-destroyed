import { createState } from './state';
import { createMap, setRandomElementsInMap } from './map';
import { DEFAULT_CONFIG, CELL_TARGET_TYPE } from './constants';
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
        this.matrix = setRandomElementsInMap(emptyMap, this.state);

        this.setFirstTurn();

        return true;
    }

    getStateByName(name) {
        return this.state[name];
    }

    setFirstTurn() {
        const name = this.getFirstTurnName();

        this.setStepType(name, STEP_TYPE.GIVE_POWER);
        this.setCellType(CELL_TARGET_TYPE.byPlayerName, name, CELL_TYPE.WAITING_SELECT);
        this.calcAvailablePower();
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

    getAvailablePower(name) {
        return this.state[name].availablePower;
    }

    increaseAvailablePower(name) {
        ++this.state[name].availablePower;
    }

    decreaseAvailablePower(name) {
        --this.state[name].availablePower;
    }

    findItemByPosition(position) {
        return this.matrix[position.y].find(elem => elem.position.x === position.x);
    }

    /**
     * Проставить stepType.
     * @param {string} targetType - тип простановки. На все, по id, ещё какие-то выборки.
     * @param {any} target
     * @param {string} value
     */
    setCellType(targetType, target, value) {
        if (CELL_TARGET_TYPE.byPlayerName === targetType) {
            this.matrix.forEach(row => {
                row.forEach(cell => {
                    if (cell.playerName === target) {
                        cell.type = value;
                    }
                });
            });
        }
    }

    /**
     * Проставить availablePower в state
     */
    calcAvailablePower() {
        this.matrix.forEach(row => {
            row.forEach(item => {
                if (item.playerName) {this.increaseAvailablePower(item.playerName);
                }
            });
        });
    }

    increasePowerValue(position) {
        let result = false;
        const item = this.findItemByPosition(position);

        // TODO: в config
        if (item.powerValue < 8) {
            ++item.powerValue;
            result = true;
        }

        return result;
    }

    /**
     * Раздаём power, делаем проверки, меняем статусы.
     */
    doGivePower(position, playerName) {
        const availablePower = this.getAvailablePower(playerName);

        // уменьшаем в state / добавляем в map
        if (availablePower > 0) {
            const increaseResult = this.increasePowerValue(position);

            if (increaseResult) {
                this.decreaseAvailablePower(playerName);
                this.rerenderByPosition(position);
            }
        } else {
            // Меняем state / map / и вообще всё что только можно. Другая стадия хода.
            console.log('Меняем state / map / и вообще всё что только можно. Другая стадия хода.');
        }
    }

    rerenderByPosition(position) {
        this.handler(position);
    }
}