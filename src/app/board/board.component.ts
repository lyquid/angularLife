import { Component, OnInit } from '@angular/core';
import { Board } from './board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  private defaultPopulation = 35;
  private paused = true;
  board: Board;
  layout: [][];
  // todo: get this from a form or something
  boardWidth = 60;
  boardHeight = 40;
  requestedPopulation: number = null;

  constructor() { }

  ngOnInit() {
    this.board = new Board(this.boardHeight, this.boardWidth, this.defaultPopulation);
    this.layout = this.board.getLayout();
  }

  async play() {
    this.paused = false;
    while (!this.paused) {
      await this.delay(500);
      this.board.nextTurn();
      this.layout = this.board.getLayout();
    }
  }

  nextTurn(): void {
    this.board.nextTurn();
    this.layout = this.board.getLayout();
  }

  pause(): void {
    this.paused = true;
  }

  delay = (amount: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, amount);
    });
  }

  reset(): void {
    this.paused = true;
    this.board = null; // destroy?
    this.layout = null;
    this.board = new Board(this.boardHeight, this.boardWidth, this.defaultPopulation);
    this.layout = this.board.getLayout();
  }

  isPaused?(): boolean {
    return this.paused;
  }

  setPopulation(population: number): void {
    this.requestedPopulation = population;
  }

  setBoardHeight(height: number): void {
    this.boardHeight = height;
  }

  setBoardWidth(width: number): void {
    this.boardWidth = width;
  }

  trackByFn(index: number, item: any): number {
    return item.id; // or index
 }
}
