export { BaseComponent } from './render/components/Base';
export { BASE_HANDLER_TYPES } from './base';

export { RenderHelper } from './render/RenderHelper';
export { DataHelper } from './data/DataHelper';
export { BaseState } from './data/State';
export { BaseMatrix } from './data/Matrix';

import { getEmptyDiv, getDiv } from './render/utils';
import { COMMON_CLASS_NAMES, COMMON_DOM_IDS } from './render/constants';

export const renderUtils = {
    getEmptyDiv,
    getDiv,
}

export const COMMON = {
    CLASS_NAMES: COMMON_CLASS_NAMES,
    DOM_IDS: COMMON_DOM_IDS,
}