import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCustomMaterialModule } from '../../app-custom-material.module';
import { OptionsService } from '../options.service';
import { SpeedComponent } from './speed.component';

describe('DelayComponent', () => {
  const defaultDelay = 480;
  let component: SpeedComponent;
  let fixture: ComponentFixture<SpeedComponent>;
  let optionsService: OptionsService;
  let optionsServiceStub: Partial<OptionsService>;

  beforeEach(() => {
    optionsServiceStub = {
      delay: defaultDelay
    };

    TestBed.configureTestingModule({
      declarations: [ SpeedComponent ],
      imports: [ AppCustomMaterialModule ],
      providers: [{
        provide: OptionsService,
        useValue: optionsServiceStub
      }]
    });

    fixture = TestBed.createComponent(SpeedComponent);
    component = fixture.componentInstance;
    optionsService = TestBed.get(OptionsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('delayToSpeed() should convert numbers to valid percents', () => {
    expect(component.delayToSpeed(100)).toBeCloseTo(100);
    expect(component.delayToSpeed(2000)).toBeCloseTo(1);
  });

  it('speedToDelay() should convert percents to valid numbers', () => {
    expect(component.speedToDelay(1)).toBeCloseTo(2000);
    expect(component.speedToDelay(100)).toBeCloseTo(100);
  });

  it('getDelay() should retrieve the delay from options service and save it as a %speed', () => {
    component.getDelay();
    expect(component.speed).toBe(component.delayToSpeed(defaultDelay));
  });

  it('setDelay() should save the %speed as a delay in options service', () => {
    component.speed = 1;
    component.setDelay();
    expect(optionsService.delay).toBe(component.speedToDelay(component.speed));
  });

  it('formatLabel() should return correctly formated strings or null', () => {
    expect(component.formatLabel(null)).toBeNull();
    expect(typeof component.formatLabel(defaultDelay)).toBe('string');
    expect(component.formatLabel(defaultDelay)).toBe(defaultDelay.toString() + '%');
  });
});
