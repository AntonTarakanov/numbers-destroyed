// TODO: дублирование
export const getEmptyDiv = () => document.createElement('div');

/**
 * Div с простым наполнением.
 */
// TODO: дублирование
export const getDiv = (className, id, text, child) => {
    const element = getEmptyDiv();

    if (className) {
        element.className = className;
    }

    if (id) {
        element.id = id;
    }

    if (text) {
        element.textContent = text;
    }

    if (child) {
        element.append(child);
    }

    return element;
};