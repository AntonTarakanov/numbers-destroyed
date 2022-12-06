import { getDiv } from '../../elements/utils';

/**
 * Что-то самое простое, чтобы упросить работу с DOM.
 */
export class BaseComponent {
    getDiv(className, id, text, child) {
        return getDiv(className, id, text, child);
    }

    pastIn(parentNode) {
        if (parentNode && this.element) {
            parentNode.append(this.element);
        }
    }
}