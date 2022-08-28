import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards/cards.component';
import { PwComponent } from './pw-gen/pw/pw.component';
import { CardComponent } from './cards/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    PwComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
