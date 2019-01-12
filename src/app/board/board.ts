export class Board {
  private layout = [];
  private readonly height: number = null;
  private readonly width: number = null;
  private readonly requestedPopulation: number = null;
  private currentPopulation: number = null;
  private turn: number;

  constructor(height: number, width: number, population: number) {
    this.height = height;
    this.width = width;
    this.currentPopulation = 0;
    this.turn = 0;
    this.requestedPopulation = population;
    this.layout = this.createLayout(this.height, this.width, this.requestedPopulation);
  }

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

  getLayout(): [][] {
    return this.layout;
  }

  getHeight(): number {
    return this.height;
  }

  getWidth(): number {
    return this.width;
  }

  getTurn(): number {
    return this.turn;
  }

  getCurrentPopulation(): number {
    return this.currentPopulation;
  }

  getCurrentTurn(): number {
    return this.turn;
  }

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
}
