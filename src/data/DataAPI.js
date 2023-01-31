import { PowerData } from './Data';
import { CELL_TYPE, STEP_TYPE } from '../constants';
import { STATE_FIELDS } from './components/State';
import { calcAttackResult } from '../power/main';

/**
 * Расширяем данные "PowerData" методами для совершения ходов.
 * С постфикосм "PC" не выполняются промежуточные перерисовки.
 */
export class PowerDataAPI extends PowerData {

    setFirstTurn() {
        const name = this.getFirstTurnName();

        this.setStepType(name, STEP_TYPE.CHOOSE_FOR_ATTACK, true);
    }

    // CHANGE TURN

    /**
     * Поменять статусы для совершения след. хода. Убрать подсветки.
     *
     * @param {string} newPlayerName
     */
    doNextTurn(newPlayerName) {

        // Сброс предыдущих состояний.
        this.resetHighlight();
        this.rerender('turnButtonInactive');

        // Установка новых состояний.
        this.setStepType(newPlayerName, CELL_TYPE.WAITING_SELECT);
    }

    // FOR ATTACK

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

    /**
     *
     */
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

    // FOR GIVE POWER:

    /**
     * Перевести ход в стадию раздачи power.
     * Отображаем кол-во доступных power.
     */
    activeGivePowerStep(isPeople = false) {
        const playerName = this.state.getCurrentTurn();
        const tileList = this.matrix.getTileListByPlayer(playerName);

        this.setStepType(playerName, STEP_TYPE.GIVE_POWER, isPeople);
        this.setAvailablePower(playerName, tileList.length);

        if (isPeople) {
            this.activeGiftView(tileList.length, isPeople);
        }
    }

    /**
     * Раздаём power, проверки на возможность, смена статуса, изменеиня промежуточного отображения.
     *
     * @param {string} playerName.
     * @param {object} position { x, y }.
     */
    doGivePower(playerName, position) {
        this.doGivePowerBase(playerName, position, true);
    }

    /**
     * Раздать power.
     *
     * @param {string} playerName.
     * @param {object} position { x, y }.
     */
    doGivePowerPC(playerName, position) {
        this.doGivePowerBase(playerName, position);
    }
}