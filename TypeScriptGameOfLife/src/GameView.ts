import Cell from './Cell';
import $ from "jquery";
const clickHandler = function (): void {
    $(this).addClass("selected");
}


class GameView{
    constructor(private table: HTMLTableElement, private numCells: number) {
    }

    updateView(arr: Cell[][]): void {
        for (let i = 0; i < this.numCells; i++) {
            for (let j = 0; j < this.numCells; j++) {
                let cell: Cell = arr[i][j];
                this.setCellStatus(i, j, cell.alive);
            }
        }
    }

    setCellStatus(i: number, j: number, status: boolean): void {
        let tableCell: HTMLTableDataCellElement = this.table.rows[i].cells[j];
        if (status) {
            $(tableCell).addClass("selected");
        }
        else {
            $(tableCell).removeClass("selected");
        }
    }

    initCells(arr: Cell [][]): void {
        for (let i = 0; i < this.table.rows.length; i++) {
            for (let j = 0; j < this.table.rows[i].cells.length; j++) {
                let c1: HTMLTableDataCellElement = this.table.rows[i].cells[j];
                let myCell: Cell = new Cell(c1.className === "selected");
                arr[i][j] = myCell;
            }
        }
    }

    initTableClickEvent(bindEvent: boolean): void {
        if (this.table != null) {
            for (let i = 0; i < this.table.rows.length; i++) {
                for (let j = 0; j < this.table.rows[i].cells.length; j++) {
                    if (bindEvent) {
                        $(this.table.rows[i].cells[j]).bind("click", clickHandler);
                    }
                    else {
                        $(this.table.rows[i].cells[j]).unbind("click", clickHandler);
                    }
                }
            }
        }
    }

    buildTable(): void {
        let cells: string = "";
        for (var i = 0; i < this.numCells; i++) {
            cells = cells + "<tr>";
            for (var j = 0; j < this.numCells; j++) {
                cells = cells + "<td></td>";
            }
            cells = cells + "</tr>";
        }
        $(this.table).append(cells);
    }

}

export default GameView;