import { POWER_CONFIG } from './config';
import PowerGameApp from './PowerGame';
import './style.css';

const APP_NAME = 'powerValue';
const isDev = true;

function createApp() {
    const DOM_IDS = { root: APP_NAME };
    const powerGame = new PowerGameApp(POWER_CONFIG, DOM_IDS, isDev);

    powerGame.start();
}

createApp();