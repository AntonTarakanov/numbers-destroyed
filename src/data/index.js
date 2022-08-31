import { CELL_TARGET_TYPE, STATE_FIELDS } from './constants';
import { STEP_TYPE, CELL_TYPE } from '../constants';
import { DataHelper } from '../library/DataHelper';
import { getEmptyMatrix, getOpponentLinkedTile, setRandomElementsInMap } from './matrix';
import { createState } from './state';
import { MATRIX_FIELDS } from './Tile';


/**
 * Набор данных необходимый для работы приложения.
 */
export class PowerDataHelper extends DataHelper {

    createApp() {
        this.playersName = this.getPlayersName();
        this.state = createState(this.playersName);

        const emptyMap = this.createEmptyMatrix();
        this.matrix = setRandomElementsInMap(emptyMap, this.state);

        this.setFirstTurn();

        return true;
    }

    createEmptyMatrix() {
        return getEmptyMatrix(this.config, this.state);
    }

    getStateByName(name) {
        return this.getStateProperty(name);
    }

    getAvailablePower(name) {
        const player = this.getStateByName(name);

        return player.availablePower;
    }

    increaseAvailablePower(name) {
        ++this.state[name].availablePower;
    }

    decreaseAvailablePower(name) {
        --this.state[name].availablePower;
    }

    setFirstTurn() {
        const name = this.getFirstTurnName();

        this.setStepType(name, STEP_TYPE.CHOOSE_FOR_ATTACK);
        this.calcAvailablePower();
    }

    /**
     * Проставить availablePower в state
     */
    calcAvailablePower() {
        this.matrix.forEach(row => {
            row.forEach(item => {
                if (item.playerName) {
                    this.increaseAvailablePower(item.playerName);
                }
            });
        });
    }

    increasePowerValue(position) {
        let result = false;
        const item = this.getItemByPosition(position);

        if (item.powerValue < this.config.MAX_POWER_VALUE) {
            ++item.powerValue;
            result = true;
        }

        return result;
    }

    getFirstTurnName() {
        return this.playersName[this.config.FIRST_TURN_INDEX];
    }

    getConnectList (position) {
        return this.getItemByPosition(position).connectList;
    }

    setStepType(name, value) {
        this.state[name].stepType = value;
        this.state.playersList.forEach(otherName => {
            if (otherName !== name) {
                this.state[otherName].stepType = STEP_TYPE.WAITING;
            }
        });

        this.state.currentStepType = value;
        this.state.currentTurn = name;

        // Подсвечиваем клетки в которые можно раздать power.
        if (value === STEP_TYPE.GIVE_POWER) {
            this.setCellType(CELL_TARGET_TYPE.byPlayerName, name, CELL_TYPE.WAITING_SELECT);
        }

        // Подсвечиваем клетки которые можно выбрать для атаки.
        if (value === STEP_TYPE.CHOOSE_FOR_ATTACK) {
            this.setCellType(CELL_TARGET_TYPE.byPlayerName, name, CELL_TYPE.WAITING_SELECT);
        }
    }

    setCurrentStepType(type) {
        this.setState(STATE_FIELDS.CURRENT_STEP_TYPE, type);
    }

    resetWaitingSelect() {
        this.changeParamByParam(MATRIX_FIELDS.TYPE, CELL_TYPE.WAITING_SELECT, CELL_TYPE.READY, true);
    }

    highlightActiveTile(position) {
        this.setCellType(CELL_TARGET_TYPE.byPosition, position, CELL_TYPE.SELECTED, true);
    }

    highlightOpponent(myPosition) {
        const linkedList = getOpponentLinkedTile.call(this, myPosition, this.config.MATRIX_TYPE);

        linkedList.forEach(({ position }) => {
            this.setCellType(CELL_TARGET_TYPE.byPosition, position, CELL_TYPE.WAITING_SELECT, true);
        });
    }

    /**
     * Выделяем клетку чтобы совершить атаку. Выделем клетки которые можно атаковать.
     *
     * @param {object} position
     * @param {boolean} useRerender - для хода компьютера не используем лишние перерисовки.
     */
    doSelectForAttack(position, useRerender = false) {
        this.resetWaitingSelect();
        this.highlightActiveTile(position);
        this.highlightOpponent(position);
        this.setCurrentStepType(STEP_TYPE.ATTACK);
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

    checkPositionLimits({ x, y }) {
        const limitsMethod = (value, maxLimit) => value >= 0 && value <= maxLimit;

        return limitsMethod(x, this.config.MAP.SIZE.x) && limitsMethod(y, this.config.MAP.SIZE.y);
    }
}