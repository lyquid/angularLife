import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent implements OnInit {
  paused: boolean;
  currentTurn: number;
  currentPopulation: number;

  constructor() { }

  ngOnInit() { }
}
