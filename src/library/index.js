export { BaseComponent } from './render/components/Base';

export { RenderHelper } from './render/RenderHelper';
export { DataHelper } from './data/DataHelper';
export { BaseState } from './data/State';
export { BaseMatrix } from './data/Matrix';

import { getEmptyDiv, getDiv } from './render/utils';

export const renderUtils = {
    getEmptyDiv,
    getDiv,
}