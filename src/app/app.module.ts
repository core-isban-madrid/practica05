import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { NumeroPipe } from './pipesPropios/numero.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    NumeroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
