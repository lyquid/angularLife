import { Component, OnInit, Input } from '@angular/core';
import { Board } from './board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  // @Input() resetOrder: any;
  private defaultPopulation = 35;
  private paused = true;
  board: Board;
  layout: [][];
  // todo: get this from a form or something
  boardWidth = 20;
  boardHeight = 20;
  requestedPopulation: number = null;

  constructor() { }

  ngOnInit() {
    this.board = new Board(this.boardHeight, this.boardWidth, this.defaultPopulation);
    this.layout = this.board.getLayout();
  }

  play(): void {
    this.paused = false;
  }

  nextTurn(): void {
    this.board.nextTurn();
    this.layout = this.board.getLayout();
  }

  pause(): void {
    this.paused = true;
  }

  @Input() reset(): void {
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
}
