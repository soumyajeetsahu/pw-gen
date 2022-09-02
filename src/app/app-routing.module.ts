import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards/cards.component';
import { PwComponent } from './pw-gen/pw/pw.component';
import { WsearchComponent } from './search/wsearch/wsearch.component';

const routes: Routes = [
  { path: '', component: PwComponent },
  { path: 'pwGen', component: PwComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'search', component: WsearchComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
