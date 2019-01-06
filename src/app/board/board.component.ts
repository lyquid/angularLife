import { Component, OnInit, Input } from '@angular/core';

import { Board } from './board';
import { InfoBarComponent } from '../info-bar/info-bar.component';

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
  boardWidth = 60;
  boardHeight = 40;
  requestedPopulation: number = null;
  @Input() infoBarComponent: InfoBarComponent;

  constructor() { }

  ngOnInit() {
    this.board = new Board(this.boardHeight, this.boardWidth, this.defaultPopulation);
    this.layout = this.board.getLayout();
    this.updateInfoBar();
  }

  async play() {
    this.paused = false;
    this.updateInfoBar();
    await this.delay(500);
    while (!this.paused) {
      this.board.nextTurn();
      this.layout = this.board.getLayout();
      this.updateInfoBar();
      await this.delay(500);
    }
  }

  pause(): void {
    this.paused = true;
    this.updateInfoBar();
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
    this.updateInfoBar();
  }

  isPaused?(): boolean {
    return this.paused;
  }

  setPopulation(population: number): void {
    this.requestedPopulation = population;
  }

  getCurrentPopulation(): number  {
    return this.board.getCurrentPopulation();
  }

  setBoardHeight(height: number): void {
    this.boardHeight = height;
  }

  setBoardWidth(width: number): void {
    this.boardWidth = width;
  }

  getCurrentTurn(): number {
    return this.board.getTurn();
  }

  trackByFn(index: number, item: any): number {
    return item.id; // or index
  }

  updateInfoBar(): void {
    this.infoBarComponent.currentPopulation = this.getCurrentPopulation();
    this.infoBarComponent.currentTurn = this.getCurrentTurn();
    this.infoBarComponent.paused = this.paused;
  }
}
