import { createState } from './state';
import { getPlayersName, getConfig } from './configModule';
import { createMap, setRandomElementsInMap } from './map';

/**
 * Набор данных необходимый для работы приложения.
 * @return {object} config, state, map
 * state - playersList: [], `playerName`: stepType, value: string
 */
export const createDataTools = () => {
    const config = getConfig();
    const names = getPlayersName();
    const state = createState(names);
    const map = createMap(config, state);
    const mapWithElements = setRandomElementsInMap(map, state); // вынести в другой метод.

    return {
        config,                 // коэффициенты и настройки отображения/построения карты.
        state,                  // текущее состояние игры, по этому параметру рассчитывается логика/последовательность.
        map: mapWithElements,   // карта, по этому параметру происходит рендер.

        // Взаимодействие с данными и перестройка DOM.
        // TODO: Необходимо вынести в отдельную структуру.
        setActivePlayer: function(index) {
            const key = names[index];

            this.state[key].stepType = 'activeWaiting';
        },
        getActivePlayer: function() {
            return names.find(item => this.state[item].stepType === 'activeWaiting');
        },
        getPlayerStateByName: function(name) {
            return this.state[name];
        },
        // history: createHistory(),
    };
}