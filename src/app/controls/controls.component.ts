import { Component, OnInit, Input } from '@angular/core';

import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input() boardComponent: BoardComponent;

  constructor() { }

  ngOnInit() { }

  play() {
    this.boardComponent.play();
  }

  pause() {
    this.boardComponent.pause();
  }

  reset() {
    this.boardComponent.reset();
  }
}
