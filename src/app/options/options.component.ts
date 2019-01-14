import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { OptionsService } from './options.service';
import { ControlsComponent } from '../controls/controls.component';
import { PopulationComponent } from './population/population.component';
import { SpeedComponent } from './speed/speed.component';
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
  @ViewChild(SpeedComponent) private delayComponent: SpeedComponent;

  constructor(private optionsService: OptionsService) { }

  ngOnInit() { }

  setDefaults(): void {
    this.optionsService.setDefaults();
    this.populationComponent.getPopulation();
    this.sizeComponent.getSize();
    this.delayComponent.getDelay();
    this.controlsComponent.reset();
  }

  disableOptions(disabled: boolean): void {
    if (disabled) {
      this.populationComponent.disabled = true;
      this.sizeComponent.disabled = true;
    } else {
      this.populationComponent.disabled = false;
      this.sizeComponent.disabled = false;
    }
  }

  isPaused?(): boolean {
    return this.controlsComponent.isPaused();
  }
}
