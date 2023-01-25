export const CELL_CLASS_NAME = {
    COMMON: 'cell',
    EMPTY: 'cell_empty',
    WAITING: 'cell_waiting',
    WRAP: 'cell_wrap',
    GREEN: 'cell_green',
    RED: 'cell_red',
    MAGENTA: 'cell_magenta',
    BLUE: 'cell_blue',
    WAITING_SELECT: 'cell_waitingSelect',
    SELECTED: 'cell_selected',
};

export const HEXAGON_CLASS_NAMES = {
    TILE_HEXAGON: 'tile_hexagon',

    TILE_HEXAGON_PART1: 'tile_hexagon_part1',
    TILE_HEXAGON_PART2: 'tile_hexagon_part2',
    TILE_HEXAGON_PART3: 'tile_hexagon_part3',

    TILE_BLUE: 'tile_blue',
    TILE_MAGENTA: 'tile_magenta',
    TILE_RED: 'tile_red',
    TILE_GREEN: 'tile_green',

    LEFT_TO_BOTTOM: 'tile_hexagon_line_1',
    RIGHT_TO_BOTTOM: 'tile_hexagon_line_2',
    LINE: 'tile_hexagon_line_3',
}

export const CONNECT_CLASS_NAME = {
    BASE: 'cell_connect',
    DIAGONAL_LEFT: 'cell_connect_diagonalLeft',
    DIAGONAL_RIGHT: 'cell_connect_diagonalRight',
    LINE: 'cell_connect_line',
}

export const COLOR = {
    GREEN: 'green',
    RED: 'red',
    MAGENTA: 'magenta',
    BLUE: 'blue',
    DEFAULT: '',
};

export const LOG_CLASS = {
    // WRAP: 'log_wrap',
    TILE: 'log_tile',
    BUTTON: 'log_button',
}

export const TEXTS = {
    NEXT_TURN: 'Завершить ход',
    END_GIFT: 'Завершить раздачу',
    MATRIX_ERROR: 'Ошибка в переданной матрице.',
}

export const POWER_DOM_IDS = {
    TURN_BUTTON: 'turnButton',      // TODO: может оказаться лишним.
    MAIN_FIELD: 'mainField',
}