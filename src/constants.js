import { MATRIX_NAMES } from './data';

/**
 * То что может использоваться везде.
 */

// Возможные варианты состояния клетки
export const CELL_TYPE = {
    EMPTY: null,                                //
    WAITING: 'waiting',                         //
    WAITING_ALLOCATION: 'waitingAllocation',    // клетка под power, но не имеет принадлежности.
    READY: 'ready',                             //
    CONNECT_LINE: 'connectLine',                //
    WAITING_SELECT: 'waitingSelect',            // ожидание выбора, подсветка.
    SELECTED: 'selected',                       // выбранная/активная плитка
};

//
export const CONNECT_TYPE = {
    LINE: 'line',
    LEFT_LINE: 'leftLine',
    RIGHT_LINE: 'rightLine',
    LEFT_TOP: 'leftTop',
    RIGHT_BOTTOM: 'rightBottom',
    LEFT_TO_BOTTOM: 'leftToBottom',
    RIGHT_TO_BOTTOM: 'rightToBottom',
    LEFT_TO_TOP: 'leftToTop',
    RIGHT_TO_TOP: 'rightToTop',
};

//
export const COLOR_LIST = ['red', 'magenta', 'green', 'blue'];

// Возможные варианты состояния хода.
export const STEP_TYPE = {
    GIVE_POWER: 'givePower',                // раздать power по завершению хода.
    CHOOSE_FOR_ATTACK: 'chooseForAttack',   // выбор своей клетки для атаки.
    ATTACK: 'attack',                       // выбор клетки оппонента для атаки.
    WAITING: 'waiting',                     // ожидание оппонента.
}

//
export const HANDLER_TYPE = {
    TURN_BUTTON_CLICK: 'turnButtonClick',           // клик по "Следующий ход".
    GIFT_END_BUTTON_CLICK: 'giftEndButtonClick',    // клик по "Завершить раздачу".
    TILE_CLICK: 'tileClick',                        // клик по плитке.

    DEV_DO_RANDOM_1: 'devDoRandom1',                // клик по автовыполнению чего либо.
}

//
export const CALC_ATTACK_RESULTS = {
    ATTACK: 'attack',
    DEFENSIVE: 'defensive',
}

//
export const TURN_BUTTON_EVENTS = [
    HANDLER_TYPE.TURN_BUTTON_CLICK,
    HANDLER_TYPE.GIFT_END_BUTTON_CLICK
];

// Тип карты / тип элементов на карте.
export const MATRIX_TYPES = {
    SIMPLE: MATRIX_NAMES.SQUARE1_MATRIX_NAME,   // Квадрат с двумя связями. Нужен только для тестирования. Реализован через таблицу.
    HEXAGON: MATRIX_NAMES.HEXAGON1_MATRIX_NAME, // Базовый тип с шестью связями.
}

// Тип распределения Power (кому какая клетка принадлежит).
export const SORTING_TYPES = {
    RANDOM: 'random',
    FROM_FIRST: 'fromFirst',
}