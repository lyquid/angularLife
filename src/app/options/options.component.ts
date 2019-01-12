import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { OptionsService } from '../options/options.service';
import { ControlsComponent } from '../controls/controls.component';
import { PopulationComponent } from './population/population.component';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  boardHeight: number;
  boardWidth: number;
  population: number;
  delay: number;
  @Input() controlsComponent: ControlsComponent;
  @ViewChild(PopulationComponent) private populationComponent: PopulationComponent;

  constructor(private optionsService: OptionsService) {
    this.getOptions();
  }

  ngOnInit() { }

  getOptions(): void {
    this.boardHeight = this.optionsService.boardHeight;
    this.boardWidth = this.optionsService.boardWidth;
    this.population = this.optionsService.population;
    this.delay = this.optionsService.delay;
  }

  setOptions(): void {
    this.optionsService.boardHeight = this.boardHeight;
    this.optionsService.boardWidth = this.boardWidth;
  }

  updateOptions(): void {
    this.setOptions();
    this.controlsComponent.reset();
  }

  updateSpeed(): void {
    this.optionsService.delay = this.delay;
  }

  setDefaults(): void {
    this.optionsService.setDefaults();
    this.getOptions();
    this.populationComponent.populationSlider = this.population;
    this.controlsComponent.reset();
  }

  onPopulationChange(population: number): void {
    this.optionsService.population = population;
    this.controlsComponent.reset();
  }

  isPaused?(): boolean {
    return this.controlsComponent.isPaused();
  }
}
