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
  delay: number;
  @Input() controlsComponent: ControlsComponent;

  constructor(private options: OptionsService) { }

  ngOnInit() {
    this.boardHeight = this.options.boardHeight;
    this.boardWidth = this.options.boardWidth;
    this.population = this.options.population;
    this.delay = this.options.delay;
  }

  updatePopulation(): void {
    this.options.population = this.population;
    this.controlsComponent.reset();
  }

  updateSize(): void {
    this.options.boardHeight = this.boardHeight;
    this.options.boardWidth = this.boardWidth;
    this.controlsComponent.reset();
  }

  updateSpeed(): void {
    this.options.delay = this.delay;
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
