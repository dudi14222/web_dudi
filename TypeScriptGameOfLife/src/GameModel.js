function buildArr(numCells) {
    let arr = [];
    for (let i = 0; i < numCells; i++) {
        let innerArr = [];
        for (let j = 0; j < numCells; j++) {
            innerArr.push(null);
        }
        arr.push(innerArr);
    }
    return arr;
}
class GameModel {
    constructor(numCells) {
        this.numCells = numCells;
        this._arrCells = buildArr(numCells);
    }
    get arrCells() { return this._arrCells; }
    calcNeighbors() {
        for (let i = 0; i < this.numCells; i++) {
            for (let j = 0; j < this.numCells; j++) {
                let n = 0;
                let cell = this._arrCells[i][j];
                //i-1,j-1)
                if (i > 0 && j > 0) {
                    n = n + (this._arrCells[i - 1][j - 1].alive ? 1 : 0);
                }
                //(i-1, j)   
                if (i > 0) {
                    n = n + (this._arrCells[i - 1][j].alive ? 1 : 0);
                }
                //(i-1, j+1)
                if (i > 0 && (j + 1) < this.numCells) {
                    n = n + (this._arrCells[i - 1][j + 1].alive ? 1 : 0);
                }
                //(i, j-1)
                if (j > 0) {
                    n = n + (this._arrCells[i][j - 1].alive ? 1 : 0);
                }
                //(i, j+1)
                if ((j + 1) < this.numCells) {
                    n = n + (this._arrCells[i][j + 1].alive ? 1 : 0);
                }
                //(i+1, j-1)
                if ((i + 1) < this.numCells && j > 0) {
                    n = n + (this._arrCells[i + 1][j - 1].alive ? 1 : 0);
                }
                //(i+1, j)
                if ((i + 1) < this.numCells) {
                    n = n + (this._arrCells[i + 1][j].alive ? 1 : 0);
                }
                //(i+1, j+1)
                if ((i + 1) < this.numCells && (j + 1) < this.numCells) {
                    n = n + (this._arrCells[i + 1][j + 1].alive ? 1 : 0);
                }
                cell.neighbors = n;
            }
        }
    }
    updateState() {
        for (let i = 0; i < this.numCells; i++) {
            for (let j = 0; j < this.numCells; j++) {
                let cell = this._arrCells[i][j];
                if (cell.alive) {
                    if (cell.neighbors > 3 || cell.neighbors < 2) {
                        cell.alive = false;
                    }
                }
                else {
                    if (cell.neighbors == 3) {
                        cell.alive = true;
                    }
                }
            }
        }
    }
}
export default GameModel;
