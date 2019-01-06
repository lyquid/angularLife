import { Component, OnInit, Input } from '@angular/core';

import { OptionsService } from '../options/options.service';
import { ControlsComponent } from '../controls/controls.component';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  boardHeight: number;
  boardWidth: number;
  population: number;
  @Input() controlsComponent: ControlsComponent;

  constructor(private options: OptionsService) { }

  ngOnInit() {
    this.boardHeight = this.options.boardHeight;
    this.boardWidth = this.options.boardWidth;
    this.population = this.options.population;
  }

  updatePopulation() {
    this.options.population = this.population;
    this.controlsComponent.reset();
  }

  isPaused?(): boolean {
    return this.controlsComponent.isPaused();
  }

  formatLabel(value: number | null): string {
    if (!value) {
      return null;
    }
    return value.toString() + '%';
  }
}
