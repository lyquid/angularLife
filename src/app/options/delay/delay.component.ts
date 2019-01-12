import { Component, OnInit, Input } from '@angular/core';

import { OptionsService } from '../options.service';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss']
})
export class DelayComponent implements OnInit {
  delay: number;

  constructor(private optionsService: OptionsService) { }

  ngOnInit() {
    this.getDelay();
  }

  getDelay(): void {
    this.delay = this.optionsService.delay;
  }

  setDelay(): void {
    this.optionsService.delay = this.delay;
  }
}
