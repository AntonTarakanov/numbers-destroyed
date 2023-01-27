import { CELL_TARGET_TYPE } from './constants';
import { STEP_TYPE, CELL_TYPE, CALC_ATTACK_RESULTS, TURN_BUTTON_EVENT_TYPES } from '../constants';
import { DataHelper } from '../library';
import { PowerMatrix } from './components';
import { PowerState, STATE_FIELDS } from './components/State';
import { MATRIX_FIELDS } from './components/Tile';

/**
 * Создание данных, методы работы с данными без привязки к логике игры.
 */
export class PowerData extends DataHelper {

    initData() {
        this.playersName = this.getPlayersName();
        this.state = new PowerState(this.playersName);
        this.matrix = new PowerMatrix(this.config, this.state.getShotInfo());

        // TODO: реализовать нормальный функционал после раздела "настройки".
        const isPeopleFlag = 'default';
        if (isPeopleFlag === 'default') {
            this.state.setIsPeopleFlagTrue([this.playersName[0]]);
        }
    }

    decreaseAvailablePower(name) {
        --this.state[name].availablePower;
    }

    getPowerValue(position) {
        const tile = this.getItemByPosition(position);
        return tile.getPowerValue();
    }

    /**
     * Проставить availablePower в state
     *
     * @param {string} name
     * @param {number|string} value
     */
    setAvailablePower(name, value) {
        if (value === undefined) {
            value = this.matrix.getCountTilesByName(name);
        }

        this.state.setAvailablePower(name, value);
    }

    /**
     * TODO: переписать логику. При превышении значения снимать подсветку и не обрабатывать клик.
     */
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
     * TODO: это нужно рефакторить на более говорящие функции. Сократить по максимуму вызов метода и удалить потом.
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

    /**
     * Проставить stepType.
     *
     * @param {string} targetType - тип простановки. На все, по id, ещё какие-то выборки.
     * @param {any} target
     * @param {string} value
     * @param {boolean} useRerender
     */
    setCellTypeForAll(targetType, target, value, useRerender = false) {
        if (CELL_TARGET_TYPE.byPlayerName === targetType) {
            const tileList = this.matrix.getTileListByPlayer(target);

            tileList.forEach(tile => {
                tile.setType(value);

                if (useRerender) {
                    this.rerenderByPosition(tile.position);
                }
            });
        }

        if (CELL_TARGET_TYPE.byPosition === targetType) {
            const item = this.matrix.getItem(target);

            if (item?.type) {
                item.type = value;
            }

            if (useRerender) {
                this.rerenderByPosition(target);
            }
        }
    }

    /**
     * Проставить stepType для переданного списка.
     *
     * @param {array} list
     * @param {any} value
     * @param {boolean} useRerender
     */
    setCellTypeInList(list, value, useRerender = false) {
        list.forEach(tile => {
            tile.setType(value);

            if (useRerender) {
                this.rerenderByPosition(tile.position);
            }
        });
    }

    setCurrentStepType(type) {
        this.state.setCurrentStepType(type);
    }

    getOpponentTileList(myPosition) {
        return this.matrix.getOpponentLinkedTile(myPosition, this.config.MATRIX_TYPE);
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

    /**
     * Самый примитивный способ получения следующего игрока по очередности.
     *
     * @param {string} playerName
     */
    getNextPlayerName(playerName) {
        const playersList = this.state.getPlayersList();
        const currentIndex = playersList.indexOf(playerName);

        return playersList[currentIndex + 1] || playersList[0];
    }

    /**
     *
     * @return {object} { info, name }
     */
    getNextPlayerInfo() {
        const oldName = this.state.getCurrentTurn();
        const nextName = this.getNextPlayerName(oldName);
        const playerInfo = this.state.getPlayerInfo(nextName);

        return {
            info: { ...playerInfo },
            name: nextName,
        };
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

    /**
     *
     * @param {string} name - playerName.
     */
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
                this.rerender(TURN_BUTTON_EVENT_TYPES.HIGHLIGHT);
            } else {
                // След. ход.
                console.log("isn't people");
            }
        }
    }

    rerenderByPosition(position) {
        this.useHandler(position);
    }

    // TODO: для быстрой совместимости. Перейти на "useHandler".
    rerender(type) {
        this.useHandlerWithCustom(type);
    }

    // TODO: убрать дублирование
    checkPositionLimits({ x, y }) {
        const limitsMethod = (value, maxLimit) => value >= 0 && value <= maxLimit;

        return limitsMethod(x, this.config.MAP.SIZE.x) && limitsMethod(y, this.config.MAP.SIZE.y);
    }
}