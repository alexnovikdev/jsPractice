const Grid = require("./grid");

class Game {
    constructor(gridSize) {
        this.grid = new Grid(gridSize, true); // true - random grid, false - clear grid
    }
    play() {
        return this.grid.compute().render();
    }
}

module.exports = Game;