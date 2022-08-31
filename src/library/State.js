export class State {
    setState(property, value) {
        if (property) {
            this[property] = value;
        }
    }

    getStateProperty(property) {
        return this[property];
    }
}