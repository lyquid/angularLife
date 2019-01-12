import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent implements OnInit {
  @Input() populationSlider: number;
  @Output() populationChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  onChange(): void {
    this.populationChange.emit(this.populationSlider);
  }

  formatLabel(value: number | null): string {
    if (!value) {
      return null;
    }
    return value.toString() + '%';
  }
}
