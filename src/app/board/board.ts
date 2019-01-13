export class Board {
  private layout = [];
  private readonly height: number = null;
  private readonly width: number = null;
  private readonly requestedPopulation: number = null;
  private currentPopulation: number = null;
  private turn: number;

  /**
   * Creates a new Board object.
   * @param height A number representing the desired height of the board's layout.
   * @param width A number representing the desired width of the board's layout.
   * @param population A number representing the desired initial % of populated cells in the board's layout.
   * @returns A new object of the Board class.
   */
  constructor(height: number, width: number, population: number) {
    this.height = height;
    this.width = width;
    this.currentPopulation = 0;
    this.turn = 0;
    this.requestedPopulation = population;
    this.layout = this.createLayout(this.height, this.width, this.requestedPopulation);
  }

  /**
   * Checks how many neighbors (surronding matrix positions with a living
   * cell in) has a given position in the board.
   * @param x The first coordinate.
   * @param y The second coordinate.
   * @returns A number representing the quantity of neighbors.
   */
  checkNeighbors(x: number, y: number): number {
    let count = 0;
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (i >= 0 && j >= 0 && i < this.layout.length && j < this.layout[x].length) {
          if (this.layout[i][j] === 1 && (i !== x || j !== y)) {
            count++;
          }
        }
      }
    }
    return count;
  }

  /**
   * Creates a new layout for the board and populates it according to the given population.
   * @param height A number representing the desired height of the layout.
   * @param width A number representing the desired width of the layout.
   * @param population A number representing the desired initial % of populated cells in the layout.
   * @returns A matrix (array of arrays) populated with 0's and 1's representing the board's layout.
   */
  private createLayout(height: number, width: number, population: number): [][] {
    const matrix = [];
    const totalBoxes = height * width;
    if (height <= 0 || width <= 0 || population > 100) {
      return null;
    }
    for (let i = 0; i < height; i++) {
      matrix[i] = [];
      for (let j = 0; j < width; j++) {
        matrix[i][j] = 0;
      }
    }
    return this.generateCells(matrix, totalBoxes, population);
  }

  /**
   * Randomly populates a layout (array of arrays) according to the given population.
   * @param layout An array of arrays representing the board's unpopulated layout.
   * @param totalBoxes A number representing the total positions of the layout.
   * @param population A number representing the desired initial % of populated cells in the layout.
   * @returns A matrix (array of arrays) populated with 0's and 1's representing the board's layout.
   */
  // no entiendo pq si pongo layout: [][] marca como incorrecto populatedMatrix[i][j] = 1,
  // aunque funciona perfectamente
  private generateCells(layout: any[], totalBoxes: number, population: number): [][] {
    const maxCells = Math.floor((totalBoxes * population) / 100);
    const populatedMatrix = layout;
    let currentCells = 0;
    if (population === 0) {
      return layout;
    }
    while (currentCells < maxCells) {
      const i = Math.floor(Math.random() * populatedMatrix.length);
      const j = Math.floor(Math.random() * populatedMatrix[i].length);
      if (populatedMatrix[i][j] === 0) {
        populatedMatrix[i][j] = 1;
        currentCells++;
        this.currentPopulation++;
      }
    }
    return populatedMatrix;
  }

  /**
   * Returns the current population (living cells) of the board.
   * @returns A number representing the board's current population.
   */
  getCurrentPopulation(): number {
    return this.currentPopulation;
  }

  /**
   * Returns the current turn of the board.
   * @returns A number representing the board's current turn.
   */
  getCurrentTurn(): number {
    return this.turn;
  }

  /**
   * Returns the height of the board.
   * @returns A number representing the board's height.
   */
  getHeight(): number {
    return this.height;
  }

  /**
   * Returns the layout of the board.
   * @returns An array of arrays representing the current board's layout.
   */
  getLayout(): [][] {
    return this.layout;
  }

  /**
   * Returns the width of the board.
   * @returns A number representing the board's width.
   */
  getWidth(): number {
    return this.width;
  }

  /**
   * Updates each position of the board according to the Game of Life algorithm.
   * Also updates the current population of cells and advances the turn by 1.
   */
  nextTurn(): void {
    const nextLayout = [];
    let neighbors: number;
    for (let i = 0; i < this.layout.length; i++) {
      nextLayout[i] = [];
      for (let j = 0; j < this.layout[i].length; j++) {
        nextLayout[i][j] = this.layout[i][j];
        neighbors = this.checkNeighbors(i, j);
        if (this.layout[i][j] === 1) {
          if (neighbors < 2 || neighbors > 3) {
            nextLayout[i][j] = 0;
            this.currentPopulation--;
          }
        } else {
          if (neighbors === 3) {
            nextLayout[i][j] = 1;
            this.currentPopulation++;
          }
        }
      }
    }
    this.layout = nextLayout;
    this.turn++;
  }
}
