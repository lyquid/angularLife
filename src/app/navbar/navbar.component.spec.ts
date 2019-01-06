import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppCustomMaterialModule } from '../app-custom-material.module';
import { NavbarComponent } from './navbar.component';
import { BoardComponent } from '../board/board.component';
import { ControlsComponent } from '../controls/controls.component';
import { InfoBarComponent } from '../info-bar/info-bar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent,
        BoardComponent,
        ControlsComponent,
        InfoBarComponent
      ],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        AppCustomMaterialModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
