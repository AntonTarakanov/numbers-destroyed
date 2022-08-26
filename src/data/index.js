import { CELL_TARGET_TYPE } from './constants';
import { STEP_TYPE } from '../constants';
import { DataHelper } from '../library/DataHelper';
import { CELL_TYPE } from '../constants';

/**
 * Набор данных необходимый для работы приложения.
 */
export class PowerDataHelper extends DataHelper {

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
        const item = this.findItemByPosition(position);

        if (item.powerValue < this.config.MAX_POWER_VALUE) {
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

    getFirstTurnName() {
        return this.playersName[this.config.FIRST_TURN_INDEX];
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
        this.setState('currentStepType', type);
    }

    /**
     * Выделяем клетку чтобы совершить атаку.
     *
     * @param {object} position
     * @param {boolean} useRerender - для хода компьютера не используем лишние перерисовки.
     */
    doSelectForAttack(position, useRerender = false) {
        this.changeParamByParam('type', 'waitingSelect', 'ready', true);
        this.setCellType(CELL_TARGET_TYPE.byPosition, position, CELL_TYPE.SELECTED, true);

        // Ожидание клика другими связанными клетками.

        this.setCurrentStepType(STEP_TYPE.ATTACK);
    }

}