import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsComponent } from './controls.component';
import { BoardComponent } from '../board/board.component';
import { InfoBarComponent } from '../info-bar/info-bar.component';
import { OptionsComponent } from '../options/options.component';

describe('ControlsComponent', () => {
  let component: ControlsComponent;
  let fixture: ComponentFixture<ControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ControlsComponent,
        BoardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsComponent);
    component = fixture.componentInstance;
    component.boardComponent = new BoardComponent;
    component.infoBarComponent = new InfoBarComponent;
    component.optionsComponent = new OptionsComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
