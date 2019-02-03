import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SolarSystemComponent } from './demos/solar-system/solar-system.component';

@NgModule({
  declarations: [
    AppComponent,
    SolarSystemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
