import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  private readonly defaultBoardHeight = 40;
  private readonly defaultBoardWidth = 60;
  private readonly defaultPopulation = 35;
  boardHeight: number;
  boardWidth: number;
  population: number;

  constructor() {
    this.boardHeight = this.defaultBoardHeight;
    this.boardWidth = this.defaultBoardWidth;
    this.population = this.defaultPopulation;
   }
}