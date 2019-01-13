import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsComponent } from './controls.component';
import { BoardComponent } from '../board/board.component';
import { InfoBarComponent } from '../info-bar/info-bar.component';

describe('ControlsComponent', () => {
  let component: ControlsComponent;
  let fixture: ComponentFixture<ControlsComponent>;
  const height = 40;
  const width = 60;
  const population = 35;
  const totalBoxes = height * width;
  const requestedPopulation = Math.floor((totalBoxes * population) / 100);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ControlsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsComponent);
    component = fixture.componentInstance;
    component.boardComponent = new BoardComponent;
    component.infoBarComponent = new InfoBarComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isPaused() should return true on init', () => {
    expect(component.isPaused()).toBe(true);
  });

  it('isPaused() should return false while palying', () => {
    component.play();
    expect(component.isPaused()).toBe(false);
    component.pause();
  });

  it('pause() should set paused to true', () => {
    component.play();
    component.pause();
    expect(component.isPaused()).toBe(true);
  });

  it('play() should set paused to false', () => {
    component.play();
    expect(component.isPaused()).toBe(false);
    component.pause();
  });

  it('reset() should set paused to true', () => {
    component.play();
    component.reset();
    expect(component.isPaused()).toBe(true);
  });

  it('reset() should reset the board', () => {
    component.play();
    component.reset();
    expect(component.boardComponent.getCurrentTurn()).toBe(0);
    expect(component.boardComponent.getCurrentPopulation()).toBe(requestedPopulation);
  });

  it('updateInfoBar() should update infoBarComponent attributes', () => {
    expect(component.infoBarComponent.currentPopulation).toBe(component.boardComponent.getCurrentPopulation());
    expect(component.infoBarComponent.currentTurn).toBe(component.boardComponent.getCurrentTurn());
    expect(component.infoBarComponent.paused).toBe(component.isPaused());
  });
});
