import { Base } from './base';
import { CONFIG_ERROR_TEXT, CONFIG_REQUIRED_FIELDS } from './constants';

/**
 *
 */
export class ConfigHelper extends Base {
    constructor(config) {
        super();

        this.REQUIRED_FIELDS = CONFIG_REQUIRED_FIELDS;
        this.ERROR_TEXT = CONFIG_ERROR_TEXT;

        for (let key in config) {
            this[key] = config[key];
        }

        this.checkRequiredFields();
    }

    getValue(field) {
        return this[field];
    }

    setValue(field, value) {
        this[field] = value;
    }
}