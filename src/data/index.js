import { CELL_TARGET_TYPE } from './constants';
import { STEP_TYPE, CELL_TYPE, CALC_ATTACK_RESULTS } from '../constants';
import { DataHelper } from '../library/DataHelper';
import { getEmptyMatrix, getOpponentLinkedTile, setRandomElementsInMap } from './matrix';
import { PowerState, STATE_FIELDS } from './State';
import { MATRIX_FIELDS } from './Tile';
import { calcAttackResult } from '../power/main';

/**
 * Набор данных необходимый для работы приложения.
 */
export class PowerDataHelper extends DataHelper {

    createApp() {
        this.playersName = this.getPlayersName();
        this.state = new PowerState(this.playersName);

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

    getPowerValue(position) {
        const tile = this.getItemByPosition(position);
        return tile.getPowerValue();
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

        return linkedList;
    }

    resetHighlight() {
        const highlightList = [CELL_TYPE.WAITING_SELECT, CELL_TYPE.SELECTED];

        this.changeParamByParam(MATRIX_FIELDS.TYPE, highlightList, CELL_TYPE.READY, true);
    }

    getAvailablePosition() {
        return this.getStateProperty('availablePosition');
    }

    setAvailablePosition(positionList) {
        this.setState('availablePosition', positionList);
    }

    setActiveTilePosition(position) {
        this.highlightActiveTile(position);
        this.setState(STATE_FIELDS.ACTIVE_TILE_POSITION, { ...position });
    }

    getActiveTilePosition() {
        return this.state.getStateProperty(STATE_FIELDS.ACTIVE_TILE_POSITION);
    }

    changeTileAfterAttack(attackPosition, defensivePosition, result) {
        const attackTile = this.getItemByPosition(attackPosition);
        const defensiveTile = this.getItemByPosition(defensivePosition);

        attackTile.setValues({
            [MATRIX_FIELDS.POWER_VALUE]: result.activeValue,
        });
        const defensiveTileIsChanges = defensiveTile.setValues({
            [MATRIX_FIELDS.POWER_VALUE]: result.defensiveValue,
            [MATRIX_FIELDS.PLAYER_NAME]: result.winner === CALC_ATTACK_RESULTS.ATTACK ? attackTile.getPlayerName() : defensiveTile.getPlayerName(),
            [MATRIX_FIELDS.COLOR]: result.winner === CALC_ATTACK_RESULTS.ATTACK ? attackTile.getColor() : defensiveTile.getColor(),
        });

        this.rerenderByPosition(attackPosition);

        // может не измениться если power 2 нападет на power 1.
        if (defensiveTileIsChanges) {
            this.rerenderByPosition(defensivePosition);
        }
    }

    /**
     * Выделяем клетку чтобы совершить атаку. Выделем клетки которые можно атаковать.
     *
     * @param {object} position
     * @param {boolean} useRerender - для хода компьютера не используем лишние перерисовки.
     */
    doSelectForAttack(position, useRerender = false) {
        this.resetWaitingSelect();
        this.setActiveTilePosition(position);
        const opponentList = this.highlightOpponent(position);
        const opponentPositionList = opponentList.map(item => item.position);
        this.setCurrentStepType(STEP_TYPE.ATTACK);
        this.setAvailablePosition(opponentPositionList);
    }

    /**
     * Отмена "doSelectForAttack", можно заново выбрать клетку для атаки.
     */
    doResetSelectForAttack() {
        const name = this.getStateProperty(STATE_FIELDS.CURRENT_TURN);

        this.setStepType(name, STEP_TYPE.CHOOSE_FOR_ATTACK);
        this.resetHighlight();
    }

    doAttack(position) {
        const activePosition = this.getActiveTilePosition();
        const activePower = this.getPowerValue(activePosition);
        const defensivePower = this.getPowerValue(position);
        const attackResult = calcAttackResult(activePower, defensivePower);

        this.changeTileAfterAttack(activePosition, position, attackResult);

        // this.setStepType(STEP_TYPE.CHOOSE_FOR_ATTACK);
        // this.setCurrentStepType(STEP_TYPE.CHOOSE_FOR_ATTACK);
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