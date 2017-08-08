class GameController {
    constructor(model, view) {
        this._model = model;
        this._view = view;
    }
    initCells() {
        this._view.initCells(this._model.arrCells);
    }
    calcNeighbors() {
        this._model.calcNeighbors();
    }
    updateModel() {
        this._model.updateState();
    }
    updateView() {
        this._view.updateView(this._model.arrCells);
    }
    buildTable() {
        this._view.buildTable();
    }
    initTableStart() {
        this._view.initTableStart();
    }
    calcGeneration() {
        this.calcNeighbors();
        this.updateModel();
        this.updateView();
    }
    start() {
        let timeout = document.getElementById('speed').value;
        setInterval(this.calcGeneration.bind(this), timeout);
    }
}

export default GameController;