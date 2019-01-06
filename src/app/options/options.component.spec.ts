import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCustomMaterialModule } from '../app-custom-material.module';
import { OptionsComponent } from './options.component';
import { ControlsComponent } from '../controls/controls.component';
import { OptionsService } from './options.service';

describe('OptionsComponent', () => {
  let component: OptionsComponent;
  let optionsService: OptionsService;
  let fixture: ComponentFixture<OptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsComponent ],
      imports: [ AppCustomMaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsComponent);
    component = fixture.componentInstance;
    optionsService = new OptionsService;
    component.controlsComponent = new ControlsComponent(optionsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
