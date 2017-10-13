class GameController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    initCells() {
        this.view.initCells(this.model.arrCells);
    }
    removeTableClickEvent() {
        this.view.initTableClickEvent(false);
    }
    calcNeighbors() {
        this.model.calcNeighbors();
    }
    updateModel() {
        this.model.updateState();
    }
    updateView() {
        this.view.updateView(this.model.arrCells);
    }
    buildTable() {
        this.view.buildTable();
    }
    initTableStart() {
        this.view.initTableClickEvent(true);
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
