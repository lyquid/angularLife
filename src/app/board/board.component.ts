import { Component, OnInit } from '@angular/core';

import { Board } from './board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  private board: Board;
  layout: [][];

  constructor() { }

  ngOnInit() { }

  createBoard(height: number, width: number, population: number): void {
    this.board = new Board(height, width, population);
    this.layout = this.board.getLayout();
  }

  nextTurn(): void {
    this.board.nextTurn();
    this.layout = this.board.getLayout();
  }

  resetBoard(): void {
    this.board = null;
    this.layout = null;
  }

  getCurrentPopulation(): number {
    return this.board.getCurrentPopulation();
  }

  getCurrentTurn(): number {
    return this.board.getCurrentTurn();
  }

  trackByFn(index: number, item: any): number {
    return item.id; // or index
  }
}
