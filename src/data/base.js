import { createState } from './state';
import { getPlayersName, getConfig } from './configModule';
import { createMap, setRandomElementsInMap } from './map';

/**
 * Набор данных необходимый для работы приложения.
 */
export const createDataTools = () => {
    const config = getConfig();
    const names = getPlayersName();
    const state = createState(names);
    const map = createMap(config, state);
    const mapWithElements = setRandomElementsInMap(map, state); // вынести в другой метод.

    return {
        config,
        state,
        map: mapWithElements,
        // history: createHistory(),
    };
}