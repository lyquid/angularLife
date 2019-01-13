import { Component, OnInit, Input } from '@angular/core';

import { OptionsService } from '../options.service';
import { ControlsComponent } from 'src/app/controls/controls.component';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {
  boardHeight: number;
  boardWidth: number;
  disabled: boolean;
  @Input() controlsComponent: ControlsComponent;

  constructor(private optionsService: OptionsService) { }

  ngOnInit() {
    this.getSize();
    this.disabled = false;
  }

  getSize(): void {
    this.boardHeight = this.optionsService.boardHeight;
    this.boardWidth = this.optionsService.boardWidth;
  }

  setSize(): void {
    this.optionsService.boardHeight = this.boardHeight;
    this.optionsService.boardWidth = this.boardWidth;
    this.controlsComponent.reset();
  }
}
