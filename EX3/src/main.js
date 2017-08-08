import GameView from './GameView';
import GameModel from './GameModel';
import GameController from './GameController';

let gameView;
let gameModel;
let gameController;

function init() {
    $('#box-build').hide();
    const numCells = document.getElementById('table-size').value;
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
    gameController.start();
}

$(document).ready(function () {
    $('#btn-build-table').click(function () {
        init();
    });
    $('#btn-start').click(function () {
        startTheGame();
    });
});

