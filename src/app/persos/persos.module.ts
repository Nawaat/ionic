import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { PersosPageRoutingModule } from './persos-routing.module';

import { PersosPage } from './persos.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersosPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [PersosPage]
})
export class PersosPageModule {}
