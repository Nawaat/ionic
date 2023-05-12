import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCUPage } from './form-cu.page';

const routes: Routes = [
  {
    path: '',
    component: FormCUPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCUPageRoutingModule { }
