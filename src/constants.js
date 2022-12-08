// Возможные варианты состояния клетки
export const CELL_TYPE = {
    EMPTY: null,                        //
    WAITING: 'waiting',                 //
    READY: 'ready',                     //
    CONNECT_LINE: 'connectLine',        // удалить.
    WAITING_SELECT: 'waitingSelect',    // ожидание выбора, подсветка.
    SELECTED: 'selected',               // выбранная/активная прилтка
};

//
export const CONNECT_TYPE = {
    LINE: 'line',
    LEFT_TOP: 'leftTop',
    RIGHT_BOTTOM: 'rightBottom',
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
    TURN_BUTTON_CLICK: 'turnButtonClick',
    GIFT_END_BUTTON_CLICK: 'giftEndButtonClick',
    TILE_CLICK: 'tileClick',

    DEV_DO_RANDOM_1: 'devDoRandom1',
}

export const CALC_ATTACK_RESULTS = {
    ATTACK: 'attack',
    DEFENSIVE: 'defensive',
}