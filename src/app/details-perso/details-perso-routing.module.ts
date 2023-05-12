import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPersoPage } from './details-perso.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPersoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPersoPageRoutingModule {}
