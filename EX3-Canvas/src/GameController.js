class GameController {
    constructor(model, view) {
        this._model = model;
        this._view = view;
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
    initCells(){
        this._model.initCells(); 
    }
    fillRandom(){
       this._model.fillRandom(); 
    }
    calcGeneration() {
        this.calcNeighbors();
        this.updateModel();
        this.updateView();
    }
    start() {
        setInterval(this.calcGeneration.bind(this), 10);
    }
}

export default GameController;