import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards/cards.component';
import { PwComponent } from './pw-gen/pw/pw.component';
import { CardComponent } from './cards/card/card.component';
import { WsearchComponent } from './search/wsearch/wsearch.component';
import { SearchBarComponent } from './search/search-bar/search-bar.component';
import { PageListComponent } from './search/page-list/page-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    PwComponent,
    CardComponent,
    WsearchComponent,
    SearchBarComponent,
    PageListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
