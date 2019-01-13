import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { OptionsService } from '../options/options.service';
import { BoardComponent } from '../board/board.component';
import { InfoBarComponent } from '../info-bar/info-bar.component';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  private paused: boolean;
  @Input() boardComponent: BoardComponent;
  @Input() infoBarComponent: InfoBarComponent;
  @Output() disableOptions = new EventEmitter<boolean>();

  constructor(private optionsService: OptionsService) { }

  ngOnInit() {
    this.reset();
  }

  delay = (amount: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, amount);
    });
  }

  isPaused?(): boolean {
    return this.paused;
  }

  pause(): void {
    this.disableOptions.emit(false);
    this.paused = true;
    this.updateInfoBar();
  }

  async play() {
    this.disableOptions.emit(true);
    this.paused = false;
    this.updateInfoBar();
    await this.delay(this.optionsService.delay);
    while (!this.paused) {
      this.boardComponent.nextTurn();
      this.updateInfoBar();
      await this.delay(this.optionsService.delay);
    }
  }

  reset(): void {
    this.disableOptions.emit(false);
    this.paused = true;
    this.boardComponent.resetBoard();
    this.boardComponent.createBoard(
      this.optionsService.boardHeight,
      this.optionsService.boardWidth,
      this.optionsService.population
    );
    this.updateInfoBar();
  }

  updateInfoBar(): void {
    this.infoBarComponent.currentPopulation = this.boardComponent.getCurrentPopulation();
    this.infoBarComponent.currentTurn = this.boardComponent.getCurrentTurn();
    this.infoBarComponent.paused = this.paused;
  }
}
