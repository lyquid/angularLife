import { Component, OnInit, Input } from '@angular/core';

import { OptionsService } from '../options.service';
import { ControlsComponent } from 'src/app/controls/controls.component';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent implements OnInit {
  population: number;
  disabled: boolean;
  @Input() controlsComponent: ControlsComponent;

  constructor(private optionsService: OptionsService) { }

  ngOnInit() {
    this.getPopulation();
    this.disabled = false;
  }

  getPopulation(): void {
    this.population = this.optionsService.population;
  }

  setPopulation(): void {
    this.optionsService.population = this.population;
    this.controlsComponent.reset();
  }

  formatLabel(value: number | null): string {
    if (!value) {
      return null;
    }
    return value.toString() + '%';
  }
}
