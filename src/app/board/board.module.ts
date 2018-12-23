import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCustomMaterialModule } from '../app-custom-material.module';
import { BoardComponent } from './board.component';

@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    AppCustomMaterialModule
  ]
})
export class BoardModule { }
