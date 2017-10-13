import GameView from './GameView';
import GameModel from './GameModel';
import GameController from './GameController';
import $ from "jquery";

let gameView: GameView;
let gameModel: GameModel;
let gameController: GameController;

function init(): void {
    $('#box-build').hide();
    const numCells: number = +(<HTMLInputElement>document.getElementById('table-size')).value;
    const table: HTMLTableElement = <HTMLTableElement>document.getElementById("table-body");
    gameModel = new GameModel(numCells);
    gameView = new GameView(table, numCells);
    gameController = new GameController(gameModel, gameView);
    gameController.buildTable();
    gameController.initTableStart();
    $('#box-start').show();
}


function startTheGame(): void {
    $('#box-start').hide();
    gameController.initCells();
    gameController.removeTableClickEvent();
    gameController.start();
}

$(document).ready(() => {
    $('#btn-build-table').click(() => init())
    $('#btn-start').click(() => startTheGame())
}
);

