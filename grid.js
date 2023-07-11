import {Cell} from './cell.js';


const GRID_SiZE = 4;
const CELLS_COUNT = GRID_SiZE*GRID_SiZE;


export class Grid{
    constructor(gridElement){
        this.cells = [];
        for (let i = 0; i < CELLS_COUNT; i++) {
            this.cells.push(
                new Cell(gridElement, i % GRID_SiZE, Math.floor(i / GRID_SiZE))
            );
            
        }
    }
}