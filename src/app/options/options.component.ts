import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
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

  ngOnInit() { }

  formatLabel(value: number | null): string {
    if (!value) {
      return null;
    }
    return value.toString() + '%';
  }
}
