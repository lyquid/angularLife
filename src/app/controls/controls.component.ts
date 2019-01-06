import { Component, OnInit, Input } from '@angular/core';

import { BoardComponent } from '../board/board.component';
import { OptionsComponent } from '../options/options.component';
import { InfoBarComponent } from '../info-bar/info-bar.component';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  private paused = true;
  @Input() boardComponent: BoardComponent;
  @Input() optionsComponent: OptionsComponent;
  @Input() infoBarComponent: InfoBarComponent;

  constructor() { }

  ngOnInit() {
    this.boardComponent.createBoard(
      this.optionsComponent.boardHeight,
      this.optionsComponent.boardWidth,
      this.optionsComponent.population
    );
    this.updateInfoBar();
  }

  async play() {
    this.paused = false;
    this.updateInfoBar();
    await this.delay(500);
    while (!this.paused) {
      this.boardComponent.nextTurn();
      this.updateInfoBar();
      await this.delay(500);
    }
  }

  delay = (amount: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, amount);
    });
  }

  pause() {
    this.paused = true;
    this.updateInfoBar();
  }

  isPaused?(): boolean {
    return this.paused;
  }

  reset(): void {
    this.paused = true;
    this.boardComponent.resetBoard();
    this.boardComponent.createBoard(
      this.optionsComponent.boardHeight,
      this.optionsComponent.boardWidth,
      this.optionsComponent.population
    );
    this.updateInfoBar();
  }

  updateInfoBar(): void {
    this.infoBarComponent.currentPopulation = this.boardComponent.getCurrentPopulation();
    this.infoBarComponent.currentTurn = this.boardComponent.getCurrentTurn();
    this.infoBarComponent.paused = this.paused;
  }
}
