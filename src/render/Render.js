import { RenderHelper } from '../library';

import { buildHexagonTile } from './components/HexagonTile';

/**
 * Всё что связано с визуальным отображением игры.
 */
export class PowerRender extends RenderHelper {

    buildDivTile(item, contentMethods) {
        return buildHexagonTile(item, contentMethods);
    }
}