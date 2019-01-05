import { Component, OnInit } from '@angular/core';
import { ControlService } from './control.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  private isPaused: boolean;

  constructor(private control: ControlService) { }

  ngOnInit() {
    this.isPaused = true;
  }

  play() {}
  pause() {}
  reset() {}
}
