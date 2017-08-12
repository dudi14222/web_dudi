import GameView from './GameView';
import GameModel from './GameModel';
import GameController from './GameController';

let gameView;
let gameModel;
let gameController;


function init() {
    const numCells = 600;
    const grid = document.getElementById("myCanvas");
    const ctx = grid.getContext("2d");
       
    gameModel = new GameModel(numCells);
    gameView = new GameView(ctx, numCells);
    gameController = new GameController(gameModel, gameView);

    gameController.initCells();
    gameController.fillRandom();
    gameController.start();
}

$(document).ready(function () {
    init();
});




