import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { OptionsService } from './options.service';
import { ControlsComponent } from '../controls/controls.component';
// import { PopulationComponent } from './population/population.component';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  delay: number;
  @Input() controlsComponent: ControlsComponent;
  // @ViewChild(PopulationComponent) private populationComponent: PopulationComponent;

  constructor(private optionsService: OptionsService) {
    this.getOptions();
  }

  ngOnInit() { }

  getOptions(): void {
    // this.population = this.optionsService.population;
    this.delay = this.optionsService.delay;
  }

  updateSpeed(): void {
    this.optionsService.delay = this.delay;
  }

  setDefaults(): void {
    this.optionsService.setDefaults();
    this.getOptions();
    this.controlsComponent.reset();
    ////////
    // this.populationComponent.populationSlider = this.population;
  }

  onPopulationChange(population: number): void {
    this.optionsService.population = population;
    this.controlsComponent.reset();
  }

  isPaused?(): boolean {
    return this.controlsComponent.isPaused();
  }
}
