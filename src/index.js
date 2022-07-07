import '/style.css';
import Icon from './icon.png';

function component() {
    const element = document.createElement('div');
    const myIcon = new Image();

    element.innerHTML = 'Hello webpack';
    element.classList.add('hello');

    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());