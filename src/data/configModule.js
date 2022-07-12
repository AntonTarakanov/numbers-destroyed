/**
 * TODO: нет возможности изменять настройки.
 */
export const getConfig = () => {
    return {
        MAP: {
            SIZE: {
                x: 11,
                y: 11,
            }
        },
        COUNT_PLAYER: 4,
    };
}

const getNumberOfPlayers = () => {
    const config = getConfig();

    return config.COUNT_PLAYER;
}

export const getPlayersName = () => {
    const value = getNumberOfPlayers();
    const result = [];

    for (let i = 0; i < value; i++) {
        result.push('player' + i);
    }

    return result;
};