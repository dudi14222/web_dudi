class Cell {
    constructor(alive) {
        this._alive = alive;
        this._neighbors = 0;
    }

    set alive(alive) {
        this._alive = alive;
    }
    set neighbors(neighbors) {
        this._neighbors = neighbors;
    }

    get neighbors(){
        return this._neighbors;
    }

    get alive(){
        return this._alive;
    }

    print() {
        console.log(`is alive = ${this._alive} , neighbors = ${this.neighbors}`);
    }
}

export default Cell