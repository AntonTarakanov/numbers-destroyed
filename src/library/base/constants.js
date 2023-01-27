/**
 * Базовые типы событий.
 */
export const BASE_HANDLER_TYPES = {
    ELEMENT_CHANGED: 'elementChanged',
    TILE_CLICK: 'tileClick',
}

export const CONFIG_REQUIRED_FIELDS = ['COUNT_PLAYER', 'MAP'];

export const CONFIG_ERROR_TEXT = {
    COUNT_PLAYER: 'Не передан COUNT_PLAYER',
    MAP: 'Не передан MAP',
};