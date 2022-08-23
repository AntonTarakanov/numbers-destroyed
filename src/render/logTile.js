import { LOG_CLASS } from './constants';

export function buildLog(state) {
    const logNode = this.getEmptyDiv();

    logNode.className = LOG_CLASS.WRAP;

    // Информация по каждму игроку.
    state.playersList.forEach(name => {
        const nameNode = this.getEmptyDiv();

        nameNode.textContent = `${name} - ${state[name].availablePower}`;

        logNode.append(nameNode);
    });

    // Статус игры, чей ход
    const turnNode = this.getEmptyDiv();
    const stepNode = this.getEmptyDiv();

    turnNode.textContent = `turn - ${state.currentTurn}`;
    stepNode.textContent = `step - ${state.currentStepType}`;

    logNode.append(turnNode, stepNode);

    return logNode;
}