import { CELL_TARGET_TYPE } from './constants';
import { STEP_TYPE, CELL_TYPE, CALC_ATTACK_RESULTS } from '../constants';
import { DataHelper } from '../library/DataHelper';
import { getEmptyMatrix, getOpponentLinkedTile, setRandomElementsInMap } from './Matrix';
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

        // TODO: реализовать нормальный функционал после раздела "настройки".
        const typeType = 'default';
        if (typeType === 'default') {
            this.state.setIsPeopleFlagTrue(['player0']);
        }

        this.setFirstTurn();

        return true;
    }

    createEmptyMatrix() {
        return getEmptyMatrix(this.config, this.state);
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

    /**
     *
     * @param {string} name
     * @param {any} value
     * @param {boolean} useRerender
     */
    setStepType(name, value, useRerender = false) {
        this.state.changeStepType(name, value);
        this.state.setCurrentStepType(value);
        this.state.setCurrentTurn(name);

        // Подсвечиваем клетки в которые можно раздать power.
        if (value === STEP_TYPE.GIVE_POWER) {
            this.setCellTypeForAll(CELL_TARGET_TYPE.byPlayerName, name, CELL_TYPE.WAITING_SELECT, useRerender);
        }

        // Подсвечиваем клетки которые можно выбрать для атаки.
        if (value === STEP_TYPE.CHOOSE_FOR_ATTACK) {
            const tileList = this.matrix.getTileListByCanAttack(name);

            this.setCellTypeInList(tileList, CELL_TYPE.WAITING_SELECT, useRerender);
        }
    }

    setCurrentStepType(type) {
        this.state.setCurrentStepType(type);
    }

    getOpponentTileList(myPosition) {
        return getOpponentLinkedTile.call(this, myPosition, this.config.MATRIX_TYPE);
    }

    resetWaitingSelect() {
        this.changeParamByParam(MATRIX_FIELDS.TYPE, CELL_TYPE.WAITING_SELECT, CELL_TYPE.READY, true);
    }

    highlightActiveTile(position) {
        this.setCellTypeForAll(CELL_TARGET_TYPE.byPosition, position, CELL_TYPE.SELECTED, true);
    }


    highlightOpponent(myPosition) {
        const linkedList = this.getOpponentTileList(myPosition);

        linkedList.forEach(({ position }) => {
            this.setCellTypeForAll(CELL_TARGET_TYPE.byPosition, position, CELL_TYPE.WAITING_SELECT, true);
        });

        return linkedList;
    }

    resetHighlight() {
        const highlightList = [CELL_TYPE.WAITING_SELECT, CELL_TYPE.SELECTED];

        this.changeParamByParam(MATRIX_FIELDS.TYPE, highlightList, CELL_TYPE.READY, true);
    }

    getAvailablePosition() {
        return this.state.getAvailablePosition();
    }

    setAvailablePosition(positionList) {
        this.state.setAvailablePosition(positionList);
    }

    setActiveTilePosition(position, isPeople = false) {
        if (isPeople) {
            this.highlightActiveTile(position);
        }
        this.setState(STATE_FIELDS.ACTIVE_TILE_POSITION, { ...position });
    }

    getActiveTilePosition() {
        return this.state.getStateProperty(STATE_FIELDS.ACTIVE_TILE_POSITION);
    }

    /**
     * TODO: вероятно нужно переместить часть логики в Tile чтобы не затаскивать MATRIX_FIELDS.
     */
    changeTileAfterAttack(attackPosition, defensivePosition, result) {
        const attackTile = this.getItemByPosition(attackPosition);
        const defensiveTile = this.getItemByPosition(defensivePosition);

        attackTile.setValues({
            [MATRIX_FIELDS.POWER_VALUE]: result.activeValue,
            [MATRIX_FIELDS.TYPE]: CELL_TYPE.READY,
        });
        const defensiveTileIsChanges = defensiveTile.setValues({
            [MATRIX_FIELDS.POWER_VALUE]: result.defensiveValue,
            [MATRIX_FIELDS.PLAYER_NAME]: result.winner === CALC_ATTACK_RESULTS.ATTACK ? attackTile.getPlayerName() : defensiveTile.getPlayerName(),
            [MATRIX_FIELDS.COLOR]: result.winner === CALC_ATTACK_RESULTS.ATTACK ? attackTile.getColor() : defensiveTile.getColor(),
            [MATRIX_FIELDS.TYPE]: CELL_TYPE.READY,
        });

        this.rerenderByPosition(attackPosition);

        // может не измениться если power 2 нападет на power 1.
        if (defensiveTileIsChanges) {
            this.rerenderByPosition(defensivePosition);
        }
    }

    changeStepAfterAttack(name) {
        this.state.resetActiveTilePosition();
        this.state.resetAvailablePosition();
        this.setStepType(name, STEP_TYPE.CHOOSE_FOR_ATTACK, true);
    }

    /**
     * Проверка на возможность совершить дальнейший ход.
     * Если человек - подсветить кнопку "Завершить ход".
     * Если компьютер - перейти к след. игроку.
     *
     * @param {string} name - playerName.
     */
    checkMoveIsCompleted(name) {
        const canAttackList = this.matrix.getTileListByCanAttack(name);
        const isPeople = this.state.getIsPeopleFlag(name);

        if (canAttackList.length === 0) {
            if (isPeople) {
                this.rerender('turnButtonActive');
            } else {
                // След. ход.
                console.log("isn't people");
            }
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

        this.resetHighlight();
        this.setStepType(name, STEP_TYPE.CHOOSE_FOR_ATTACK, true);
    }

    doPeopleAttack(position) {
        const activePosition = this.getActiveTilePosition();
        const activePower = this.getPowerValue(activePosition);
        const defensivePower = this.getPowerValue(position);
        const currentTurn = this.state.getCurrentTurn();
        const attackResult = calcAttackResult(activePower, defensivePower);

        this.changeTileAfterAttack(activePosition, position, attackResult);
        this.resetHighlight();
        this.changeStepAfterAttack(currentTurn);
        this.checkMoveIsCompleted(currentTurn);
    }

    /**
     *
     * @param {object} active - {x, y}
     * @param {object} defensive - {x, y}
     * @param {string} playerName
     */
    doPCAttack(active, defensive, playerName) {
        const activePower = this.getPowerValue(active);
        const defensivePower = this.getPowerValue(defensive);
        const attackResult = calcAttackResult(activePower, defensivePower);

        this.changeTileAfterAttack(active, defensive, attackResult);
        this.resetHighlight();
        this.checkMoveIsCompleted(playerName);
    }

    activeGivePowerStepForPeople() {
        this.setCurrentStepType(STEP_TYPE.GIVE_POWER);
        this.rerender('turnButtonInactive');

        // получить только свои тайлы.
        // подсветить клетки.
        // вывести число power.
        // сбросить кнопку.
    }

    activeGivePowerStepForPC() {
        this.setCurrentStepType(STEP_TYPE.GIVE_POWER);
    }

    /**
     * Раздаём power, делаем проверки, меняем статусы.
     */
    doGivePower(position, playerName) {
        const availablePower = this.state.getAvailablePower(playerName);

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

    // TODO: убрать дублирование
    checkPositionLimits({ x, y }) {
        const limitsMethod = (value, maxLimit) => value >= 0 && value <= maxLimit;

        return limitsMethod(x, this.config.MAP.SIZE.x) && limitsMethod(y, this.config.MAP.SIZE.y);
    }
}