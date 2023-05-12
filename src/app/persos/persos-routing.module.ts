import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersosPage } from './persos.page';
import { DetailsPersoPage } from '../details-perso/details-perso.page';

const routes: Routes = [
  {
    path: '',
    component: PersosPage
  },
  {
    path: 'persos/:id',
    component: DetailsPersoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersosPageRoutingModule {}
