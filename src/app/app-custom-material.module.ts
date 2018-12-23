import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import {  MatToolbarModule,
          MatButtonModule,
          MatSidenavModule,
          MatIconModule,
          MatListModule,
          MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    // CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule
  ]
})
export class AppCustomMaterialModule { }
