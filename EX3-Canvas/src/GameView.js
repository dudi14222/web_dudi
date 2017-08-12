import Cell from './Cell';

class GameView {
    constructor(ctx, numCells) {
        this._ctx = ctx;
        this._numCells = numCells;
        this._ctx.fillStyle = "#070707";
    }

    updateView(arr) {
        this._ctx.clearRect(0, 0, this._numCells, this._numCells);
        for (var i = 0; i < this._numCells; i++) {
            for (var j = 0; j < this._numCells; j++) {
                let cell = arr[i][j];
                if (cell.alive)
                    this._ctx.fillRect(i, j, 1, 1);
            }
        }

    }
}

export default GameView;