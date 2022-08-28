import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards/cards.component';
import { PwComponent } from './pw-gen/pw/pw.component';

const routes: Routes = [
  { path: '', component: PwComponent },
  { path: 'cards', component: CardsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
