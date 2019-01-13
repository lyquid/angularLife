import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatSliderModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatSliderModule
  ]
})
export class AppCustomMaterialModule { }
