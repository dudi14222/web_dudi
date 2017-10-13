import GameView from './GameView';
import GameModel from './GameModel';
import GameController from './GameController';
import $ from "jquery";
let gameView;
let gameModel;
let gameController;
function init() {
    $('#box-build').hide();
    const numCells = +document.getElementById('table-size').value;
    const table = document.getElementById("table-body");
    gameModel = new GameModel(numCells);
    gameView = new GameView(table, numCells);
    gameController = new GameController(gameModel, gameView);
    gameController.buildTable();
    gameController.initTableStart();
    $('#box-start').show();
}
function startTheGame() {
    $('#box-start').hide();
    gameController.initCells();
    gameController.removeTableClickEvent();
    gameController.start();
}
$(document).ready(() => {
    $('#btn-build-table').click(() => init());
    $('#btn-start').click(() => startTheGame());
});
