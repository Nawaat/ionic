import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCUPageRoutingModule } from './form-cu-routing.module';

import { FormCUPage } from './form-cu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCUPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [FormCUPage]
})
export class FormCUPageModule { }
