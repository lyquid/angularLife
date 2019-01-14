import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  private readonly defaultBoardHeight = 40;
  private readonly defaultBoardWidth = 60;
  private readonly defaultPopulation = 35;
  private readonly defaultDelay = 480;
  boardHeight: number;
  boardWidth: number;
  population: number;
  delay: number;

  constructor() {
    this.setDefaults();
  }

  setDefaults(): void {
    this.boardHeight = this.defaultBoardHeight;
    this.boardWidth = this.defaultBoardWidth;
    this.population = this.defaultPopulation;
    this.delay = this.defaultDelay;
  }
}
