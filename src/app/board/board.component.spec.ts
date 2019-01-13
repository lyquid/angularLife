import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCustomMaterialModule } from '../app-custom-material.module';
import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  const height = 40;
  const width = 60;
  const population = 35;
  const totalBoxes = height * width;
  const requestedPopulation = Math.floor((totalBoxes * population) / 100);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardComponent ],
      imports: [AppCustomMaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('createBoard() should create a Board with a layout[][]', () => {
    component.createBoard(height, width, population);
    expect(component.layout).toBeTruthy();
  });

  it(`createBoard() should create a layout[][] of ${totalBoxes} boxes`, () => {
    let count = 0;
    component.createBoard(height, width, population);
    for (let i = 0; i < component.layout.length; i++) {
      for (let j = 0; j < component.layout[i].length; j++) {
        count++;
      }
    }
    expect(count).toBe(totalBoxes);
  });

  it(`getCurrentPopulation() should return a population of ${requestedPopulation} cells`, () => {
    component.createBoard(height, width, population);
    expect(component.getCurrentPopulation()).toBe(requestedPopulation);
  });

  it('getCurrentTurn() should return 0 on init', () => {
    component.createBoard(height, width, population);
    expect(component.getCurrentTurn()).toBe(0);
  });

  it('nextTurn() should advance the current turn by 1', () => {
    component.createBoard(height, width, population);
    component.nextTurn();
    expect(component.getCurrentTurn()).toBe(1);
  });

  it('resetBoard() should set board and layout[][] to null', () => {
    component.createBoard(height, width, population);
    component.resetBoard();
    // expect(component.getCurrentTurn()).toBeUndefined();
    expect(component.layout).toBeNull();
  });
});
