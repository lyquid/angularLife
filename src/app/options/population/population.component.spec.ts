import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCustomMaterialModule } from '../../app-custom-material.module';
import { PopulationComponent } from './population.component';

describe('PopulationComponent', () => {
  let component: PopulationComponent;
  let fixture: ComponentFixture<PopulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationComponent ],
      imports: [AppCustomMaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
