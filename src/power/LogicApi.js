/**
 * Выполняем рандомные атаки по переданному игроку
 *
 * @param {string} name
 * @param {PowerDataHelper} DataApi -
 */
const doRandomAttacks = (name, DataApi) => {
    const tileList = DataApi.matrix.getTileListByCanAttack(name);

    tileList.forEach(tile => {
        const availableTile = DataApi.getOpponentTileList(tile.position);

        if (availableTile.length) {
            DataApi.doPCAttack(tile.position, availableTile[0].position, name);
        }
    });
}

export const LogicApi = {
    doRandomAttacks: doRandomAttacks,
}