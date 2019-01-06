import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCustomMaterialModule } from '../app-custom-material.module';
import { BoardComponent } from './board.component';
// import { InfoBarComponent } from '../info-bar/info-bar.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

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
    // component.infoBarComponent = new InfoBarComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
