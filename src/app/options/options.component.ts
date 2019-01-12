import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { OptionsService } from './options.service';
import { ControlsComponent } from '../controls/controls.component';
import { PopulationComponent } from './population/population.component';
import { DelayComponent } from './delay/delay.component';
import { SizeComponent } from './size/size.component';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  @Input() controlsComponent: ControlsComponent;
  @ViewChild(PopulationComponent) private populationComponent: PopulationComponent;
  @ViewChild(SizeComponent) private sizeComponent: SizeComponent;
  @ViewChild(DelayComponent) private delayComponent: DelayComponent;

  constructor(private optionsService: OptionsService) { }

  ngOnInit() { }

  setDefaults(): void {
    this.optionsService.setDefaults();
    this.populationComponent.getPopulation();
    this.sizeComponent.getSize();
    this.delayComponent.getDelay();
    this.controlsComponent.reset();
  }

  isPaused?(): boolean {
    return this.controlsComponent.isPaused();
  }
}
