import { getRandomBoolean } from '../utils';
import { CALC_ATTACK_RESULTS } from '../constants';

/**
 * Логика расчёта при атаке.
 * active/defensive - значения из Tile.
 *
 * @param {number|string} active
 * @param {number|string} defensive
 *
 * @return {object} winner / activeValue / defensiveValue
 */
export const calcAttackResult = (active, defensive) => {
    const result = {
        winner: '',
        activeValue: 1,
        defensiveValue: 1,
    }
    const attackingValue = active - 1;

    if (attackingValue === defensive) {
        result.defensiveValue = 1;
        result.winner = getRandomBoolean() ? CALC_ATTACK_RESULTS.ATTACK : CALC_ATTACK_RESULTS.DEFENSIVE;
    }

    if (attackingValue < defensive) {
        if (attackingValue === defensive - 1) {
            result.defensiveValue = 1;
            result.winner = getRandomBoolean(25) ? CALC_ATTACK_RESULTS.DEFENSIVE : CALC_ATTACK_RESULTS.ATTACK;
        } else {
            result.defensiveValue = defensive - attackingValue;
            result.winner = CALC_ATTACK_RESULTS.DEFENSIVE;
        }
    }

    if (attackingValue > defensive) {
        result.defensiveValue = attackingValue - defensive;
        result.winner = CALC_ATTACK_RESULTS.ATTACK;
    }

    return result;
}