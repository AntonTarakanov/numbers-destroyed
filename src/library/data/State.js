import { Base } from '../base/base';

/**
 * Самые простые методы для работы с состоянием приложения или его отдельных частей.
 */
export class BaseState extends Base {
    setState(property, value) {
        if (property) {
            this[property] = value;
        }
    }

    getStateProperty(property) {
        return this[property];
    }
}