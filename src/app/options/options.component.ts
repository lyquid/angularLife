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
    this.getOptions();
  }

  getOptions(): void {
    this.boardHeight = this.options.boardHeight;
    this.boardWidth = this.options.boardWidth;
    this.population = this.options.population;
    this.delay = this.options.delay;
  }

  setOptions(): void {
    this.options.boardHeight = this.boardHeight;
    this.options.boardWidth = this.boardWidth;
    this.options.population = this.population;
  }

  updateOptions(): void {
    this.setOptions();
    this.controlsComponent.reset();
  }

  updateSpeed(): void {
    this.options.delay = this.delay;
  }

  setDefaults(): void {
    this.options.setDefaults();
    this.getOptions();
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
