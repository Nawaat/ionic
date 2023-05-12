import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPersoPageRoutingModule } from './details-perso-routing.module';

import { DetailsPersoPage } from './details-perso.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPersoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [DetailsPersoPage]
})
export class DetailsPersoPageModule {}
