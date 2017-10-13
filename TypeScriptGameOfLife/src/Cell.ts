class Cell {
    private _neighbors: number;
    constructor(private _alive: boolean) {        
        this._neighbors = 0;
    }

    set alive(alive: boolean) {
        this._alive = alive;
    }
    set neighbors(neighbors: number) {
        this._neighbors = neighbors;
    }

    get neighbors(): number{
        return this._neighbors;
    }

    get alive(): boolean{
        return this._alive;
    }

    print(): void {
        console.log(`is alive = ${this._alive} , neighbors = ${this.neighbors}`);
    }
}

export default Cell