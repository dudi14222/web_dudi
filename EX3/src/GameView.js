import Cell from './Cell';

var clickHandler = function () {
    $(this).addClass("selected");
}

class GameView {
    constructor(table, numCells) {
        this._table = table;
        this._numCells = numCells;
    }

    updateView(arr) {
        for (var i = 0; i < this._numCells; i++) {
            for (var j = 0; j < this._numCells; j++) {
                let cell = arr[i][j];
                this.setCellStatus(i, j, cell.alive);
            }
        }
    }

    setCellStatus(i, j, status) {
        let tableCell = this._table.rows[i].cells[j];
        if (status) {
            $(tableCell).addClass("selected");
        }
        else {
            $(tableCell).removeClass("selected");
        }
    }

    initCells(arr) {
        for (var i = 0; i < this._table.rows.length; i++) {
            for (var j = 0; j < this._table.rows[i].cells.length; j++) {
                let c1 = this._table.rows[i].cells[j];
                let myCell = new Cell(c1.className === "selected");
                arr[i][j] = myCell;
            }
        }
    }

    initTableClickEvent(bindEvent) {
        if (this._table != null) {
            for (var i = 0; i < this._table.rows.length; i++) {
                for (var j = 0; j < this._table.rows[i].cells.length; j++) {
                    if (bindEvent) {
                        $(this._table.rows[i].cells[j]).bind("click", clickHandler);
                    }
                    else{
                        $(this._table.rows[i].cells[j]).unbind("click", clickHandler);
                    }
                }
            }
        }
    }

    buildTable() {
        var cells = "";
        for (var i = 0; i < this._numCells; i++) {
            cells = cells + "<tr>";
            for (var j = 0; j < this._numCells; j++) {
                cells = cells + "<td></td>";
            }
            cells = cells + "</tr>";
        }
        $(this._table).append(cells);
    }

}

export default GameView;