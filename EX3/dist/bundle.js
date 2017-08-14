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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _GameView = __webpack_require__(1);

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
    $('#box-build').hide();
    var numCells = document.getElementById('table-size').value;
    var table = document.getElementById("table-body");
    gameModel = new _GameModel2.default(numCells);
    gameView = new _GameView2.default(table, numCells);
    gameController = new _GameController2.default(gameModel, gameView);
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

$(document).ready(function () {
    $('#btn-build-table').click(function () {
        init();
    });
    $('#btn-start').click(function () {
        startTheGame();
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Cell = __webpack_require__(2);

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clickHandler = function clickHandler() {
    $(this).addClass("selected");
};

var GameView = function () {
    function GameView(table, numCells) {
        _classCallCheck(this, GameView);

        this._table = table;
        this._numCells = numCells;
    }

    _createClass(GameView, [{
        key: "updateView",
        value: function updateView(arr) {
            for (var i = 0; i < this._numCells; i++) {
                for (var j = 0; j < this._numCells; j++) {
                    var cell = arr[i][j];
                    this.setCellStatus(i, j, cell.alive);
                }
            }
        }
    }, {
        key: "setCellStatus",
        value: function setCellStatus(i, j, status) {
            var tableCell = this._table.rows[i].cells[j];
            if (status) {
                $(tableCell).addClass("selected");
            } else {
                $(tableCell).removeClass("selected");
            }
        }
    }, {
        key: "initCells",
        value: function initCells(arr) {
            for (var i = 0; i < this._table.rows.length; i++) {
                for (var j = 0; j < this._table.rows[i].cells.length; j++) {
                    var c1 = this._table.rows[i].cells[j];
                    var myCell = new _Cell2.default(c1.className === "selected");
                    arr[i][j] = myCell;
                }
            }
        }
    }, {
        key: "initTableClickEvent",
        value: function initTableClickEvent(bindEvent) {
            if (this._table != null) {
                for (var i = 0; i < this._table.rows.length; i++) {
                    for (var j = 0; j < this._table.rows[i].cells.length; j++) {
                        if (bindEvent) {
                            $(this._table.rows[i].cells[j]).bind("click", clickHandler);
                        } else {
                            $(this._table.rows[i].cells[j]).unbind("click", clickHandler);
                        }
                    }
                }
            }
        }
    }, {
        key: "buildTable",
        value: function buildTable() {
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
    }]);

    return GameView;
}();

exports.default = GameView;

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        key: "calcNeighbors",
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
        key: "updateState",
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
        key: "arrCells",
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
        key: 'initCells',
        value: function initCells() {
            this._view.initCells(this._model.arrCells);
        }
    }, {
        key: 'removeTableClickEvent',
        value: function removeTableClickEvent() {
            this._view.initTableClickEvent(false);
        }
    }, {
        key: 'calcNeighbors',
        value: function calcNeighbors() {
            this._model.calcNeighbors();
        }
    }, {
        key: 'updateModel',
        value: function updateModel() {
            this._model.updateState();
        }
    }, {
        key: 'updateView',
        value: function updateView() {
            this._view.updateView(this._model.arrCells);
        }
    }, {
        key: 'buildTable',
        value: function buildTable() {
            this._view.buildTable();
        }
    }, {
        key: 'initTableStart',
        value: function initTableStart() {
            this._view.initTableClickEvent(true);
        }
    }, {
        key: 'calcGeneration',
        value: function calcGeneration() {
            this.calcNeighbors();
            this.updateModel();
            this.updateView();
        }
    }, {
        key: 'start',
        value: function start() {
            var timeout = document.getElementById('speed').value;
            setInterval(this.calcGeneration.bind(this), timeout);
        }
    }]);

    return GameController;
}();

exports.default = GameController;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map