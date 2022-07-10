import { createState } from './state';
import { getPlayersName, getConfig } from './configModule';
import { createMap } from './map';

/**
 * Набор данных необходимый для работы приложения.
 */
export const createDataTools = () => {
    const config = getConfig();
    const names = getPlayersName();
    const state = createState(names);
    const map = createMap(config);

    const data = {
        config,
        state,
        map,
        // history: createHistory(),
    }

    return data;
}