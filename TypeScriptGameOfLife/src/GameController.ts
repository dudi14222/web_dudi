import GameView from './GameView';
import GameModel from './GameModel';

class GameController {
    constructor(private model: GameModel, private view: GameView) {        
    }
    initCells(): void {
        this.view.initCells(this.model.arrCells);
    }
    removeTableClickEvent(): void{
        this.view.initTableClickEvent(false);
    }
    calcNeighbors(): void {
        this.model.calcNeighbors();
    }
    updateModel(): void {
        this.model.updateState();
    }
    updateView(): void {
        this.view.updateView(this.model.arrCells);
    }
    buildTable(): void {
        this.view.buildTable();
    }
    initTableStart(): void {
        this.view.initTableClickEvent(true);
    }
    calcGeneration(): void {
        this.calcNeighbors();
        this.updateModel();
        this.updateView();
    }
    start() : void{
        let timeout: string = (<HTMLInputElement>document.getElementById('speed')).value;
        setInterval(this.calcGeneration.bind(this), timeout);
    }
}

export default GameController;