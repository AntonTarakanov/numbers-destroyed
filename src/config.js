import { MATRIX_TYPES, SORTING_TYPES } from './constants';

/**
 * Базовый конфиг для построения приложения.
 */

// Можно поменять через настройки. Необходимо для дефолтной отрисовки.
export const POWER_CONFIG = {
    MAP: {
        SIZE: {
            x: 11,
            y: 11,
        }
    },
    COUNT_PLAYER: 4,
    FIRST_TURN_INDEX: 0,
    MAX_POWER_VALUE: 8,
    MATRIX_TYPE: MATRIX_TYPES.HEXAGON,
    SORTING_TYPE: SORTING_TYPES.RANDOM,
    USE_TABLE: false,
};