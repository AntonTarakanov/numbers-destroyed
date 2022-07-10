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

export const getPlayersName = () => ['player0', 'player1'];