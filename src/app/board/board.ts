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
    this.requestedPopulation = population;
    this.layout = this.createBoard(this.height, this.width, this.requestedPopulation);
    this.currentPopulation = this.getCurrentPopulation();
    this.turn = 1;
  }

  private createBoard(height: number, width: number, population: number): [][] {
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

  getCurrentPopulation(): number {
    let count = 0;
    if (this.layout) {
      for (let i = 0; i < this.layout.length; i++) {
        for (let j = 0; j < this.layout[i].length; j++) {
          if (this.layout[i][j] === 1) {
            count++;
          }
        }
      }
      this.currentPopulation = count;
      return this.currentPopulation;
    } else {
      return 0;
    }
  }

  getCurrentTurn(): number {
    return this.turn;
  }

  nextTurn(): [][] {
    const nextLayout = this.layout;
    for (let i = 0; i < this.layout.length; i++) {
      for (let j = 0; j < this.layout[i].length; j++) {
        if (this.layout[i][j] === 1) {
          if (this.checkNeighbors(this.layout[i][j]) >= 3 || this.checkNeighbors(this.layout[i][j]) <= 1) {
            nextLayout[i][j] = 0;
          }
        } else {
          if (this.checkNeighbors(this.layout[i][j] === 2)) {
            nextLayout[i][j] = 1;
          }
        }
      }
    }
    return this.layout = nextLayout;
  }

  private checkNeighbors(box: any): number {
    return null;
  }
}
