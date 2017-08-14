/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = function () {
    function Cell(alive) {
        _classCallCheck(this, Cell);

        this._alive = alive;
        this._neighbors = 0;
    }

    _createClass(Cell, [{
        key: "print",
        value: function print() {
            console.log("is alive = " + this._alive + " , neighbors = " + this.neighbors);
        }
    }, {
        key: "alive",
        set: function set(alive) {
            this._alive = alive;
        },
        get: function get() {
            return this._alive;
        }
    }, {
        key: "neighbors",
        set: function set(neighbors) {
            this._neighbors = neighbors;
        },
        get: function get() {
            return this._neighbors;
        }
    }]);

    return Cell;
}();

exports.default = Cell;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _GameView = __webpack_require__(2);

var _GameView2 = _interopRequireDefault(_GameView);

var _GameModel = __webpack_require__(3);

var _GameModel2 = _interopRequireDefault(_GameModel);

var _GameController = __webpack_require__(4);

var _GameController2 = _interopRequireDefault(_GameController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gameView = void 0;
var gameModel = void 0;
var gameController = void 0;

function init() {
    var numCells = 600;
    var grid = document.getElementById("myCanvas");
    var ctx = grid.getContext("2d");

    gameModel = new _GameModel2.default(numCells);
    gameView = new _GameView2.default(ctx, numCells);
    gameController = new _GameController2.default(gameModel, gameView);

    gameController.initCells();
    gameController.fillRandom();
    gameController.start();
}

$(document).ready(function () {
    init();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Cell = __webpack_require__(0);

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
    function GameView(ctx, numCells) {
        _classCallCheck(this, GameView);

        this._ctx = ctx;
        this._numCells = numCells;
        this._ctx.fillStyle = "#070707";
    }

    _createClass(GameView, [{
        key: "updateView",
        value: function updateView(arr) {
            this._ctx.clearRect(0, 0, this._numCells, this._numCells);
            for (var i = 0; i < this._numCells; i++) {
                for (var j = 0; j < this._numCells; j++) {
                    var cell = arr[i][j];
                    if (cell.alive) this._ctx.fillRect(i, j, 1, 1);
                }
            }
        }
    }]);

    return GameView;
}();

exports.default = GameView;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Cell = __webpack_require__(0);

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function buildArr(numCells) {
    var arr = [];
    for (var i = 0; i < numCells; i++) {
        var innerArr = [];
        for (var j = 0; j < numCells; j++) {
            innerArr.push(0);
        }
        arr.push(innerArr);
    }
    return arr;
}

var GameModel = function () {
    function GameModel(numCells) {
        _classCallCheck(this, GameModel);

        this._arrCells = buildArr(numCells);
        this._numCells = numCells;
    }

    _createClass(GameModel, [{
        key: 'calcNeighbors',
        value: function calcNeighbors() {
            for (var i = 0; i < this._numCells; i++) {
                for (var j = 0; j < this._numCells; j++) {
                    var n = 0;
                    var cell = this._arrCells[i][j];
                    //i-1,j-1)
                    if (i > 0 && j > 0) {
                        n = n + (this._arrCells[i - 1][j - 1].alive ? 1 : 0);
                    }
                    //(i-1, j)   
                    if (i > 0) {
                        n = n + (this._arrCells[i - 1][j].alive ? 1 : 0);
                    }
                    //(i-1, j+1)
                    if (i > 0 && j + 1 < this._numCells) {
                        n = n + (this._arrCells[i - 1][j + 1].alive ? 1 : 0);
                    }
                    //(i, j-1)
                    if (j > 0) {
                        n = n + (this._arrCells[i][j - 1].alive ? 1 : 0);
                    }
                    //(i, j+1)
                    if (j + 1 < this._numCells) {
                        n = n + (this._arrCells[i][j + 1].alive ? 1 : 0);
                    }
                    //(i+1, j-1)
                    if (i + 1 < this._numCells && j > 0) {
                        n = n + (this._arrCells[i + 1][j - 1].alive ? 1 : 0);
                    }
                    //(i+1, j)
                    if (i + 1 < this._numCells) {
                        n = n + (this._arrCells[i + 1][j].alive ? 1 : 0);
                    }
                    //(i+1, j+1)
                    if (i + 1 < this._numCells && j + 1 < this._numCells) {
                        n = n + (this._arrCells[i + 1][j + 1].alive ? 1 : 0);
                    }
                    cell.neighbors = n;
                }
            }
        }
    }, {
        key: 'fillRandom',
        value: function fillRandom() {
            for (var j = 100; j < this._numCells - 100; j++) {
                for (var k = 100; k < this._numCells - 100; k++) {
                    this._arrCells[j][k].alive = Math.round(Math.random()) === 1;
                }
            }
        }
    }, {
        key: 'initCells',
        value: function initCells() {
            for (var j = 0; j < this._numCells; j++) {
                for (var k = 0; k < this._numCells; k++) {
                    this._arrCells[j][k] = new _Cell2.default(false);
                }
            }
        }
    }, {
        key: 'updateState',
        value: function updateState() {
            for (var i = 0; i < this._numCells; i++) {
                for (var j = 0; j < this._numCells; j++) {
                    var cell = this._arrCells[i][j];
                    if (cell.alive) {
                        if (cell.neighbors > 3 || cell.neighbors < 2) {
                            cell.alive = false;
                        }
                    } else {
                        if (cell.neighbors == 3) {
                            cell.alive = true;
                        }
                    }
                }
            }
        }
    }, {
        key: 'arrCells',
        get: function get() {
            return this._arrCells;
        }
    }]);

    return GameModel;
}();

exports.default = GameModel;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameController = function () {
    function GameController(model, view) {
        _classCallCheck(this, GameController);

        this._model = model;
        this._view = view;
    }

    _createClass(GameController, [{
        key: "calcNeighbors",
        value: function calcNeighbors() {
            this._model.calcNeighbors();
        }
    }, {
        key: "updateModel",
        value: function updateModel() {
            this._model.updateState();
        }
    }, {
        key: "updateView",
        value: function updateView() {
            this._view.updateView(this._model.arrCells);
        }
    }, {
        key: "initCells",
        value: function initCells() {
            this._model.initCells();
        }
    }, {
        key: "fillRandom",
        value: function fillRandom() {
            this._model.fillRandom();
        }
    }, {
        key: "calcGeneration",
        value: function calcGeneration() {
            this.calcNeighbors();
            this.updateModel();
            this.updateView();
        }
    }, {
        key: "start",
        value: function start() {
            setInterval(this.calcGeneration.bind(this), 10);
        }
    }]);

    return GameController;
}();

exports.default = GameController;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map