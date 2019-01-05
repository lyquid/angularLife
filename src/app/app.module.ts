import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AppCustomMaterialModule } from './app-custom-material.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BoardComponent } from './board/board.component';
import { ControlsComponent } from './controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoardComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppCustomMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
