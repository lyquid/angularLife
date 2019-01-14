import { Component, OnInit } from '@angular/core';

import { OptionsService } from '../options.service';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.scss']
})
export class SpeedComponent implements OnInit {
  speed: number;

  /**
   * Creates a new SpeedComponent.
   * @param optionsService A singleton DI service for writing and retrieving current options for the game.
   */
  constructor(private optionsService: OptionsService) { }

  ngOnInit() {
    this.getDelay();
  }

  /**
   * Converts a delay unit (ms.) to a % speed. Used for retrieving current
   * delay and show it as a percent speed slider in the UI.
   * @param delay A number representing a delay to be converted into a % speed. Currently: 100<=delay<=2000.
   * @returns A number representing a % based on the delay supplied.
   */
  delayToSpeed(delay: number): number {
    return Math.round(1.206688733 * Math.pow(10, -19) * Math.pow(delay, 2) - 5.210526316 * Math.pow(10, -2) * delay + 105.2105263);
  }

  /**
   * Composes a string with the number supplied concatenated with a '%' symbol.
   * @param value The number to be used in the composition.
   * @returns A string composed with the value supplied concatenated with a '%' symbol. Returns null if no value supplied.
   */
  formatLabel(value: number | null): string {
    if (!value) {
      return null;
    }
    return value.toString() + '%';
  }

  /**
   * Gets the current delay from the options service, transforms it to a %speed and saves it to attribute speed.
   */
  getDelay(): void {
    this.speed = this.delayToSpeed(this.optionsService.delay);
  }

  /**
   * Transforms the current speed attribute to a delay and sets it to the options service.
   */
  setDelay(): void {
    this.optionsService.delay = this.speedToDelay(this.speed);
  }

  /**
   * Converts a % speed unit to a delay in milliseconds.
   * @param speed A number representing a % speed to be converted into milliseconds. Currently: 1<=speed<=100.
   * @returns A number representing a % based on the delay supplied.
   */
  speedToDelay(speed: number): number {
    return Math.round(-9.65582256 * Math.pow(10, -16) * Math.pow(speed, 2) - 19.19191919 * speed + 2019.191919);
  }
}
