import { Component, OnInit } from '@angular/core';
import { PersoService } from '../services/perso.service';
import { Perso } from "../models/Perso";
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details-perso',
  templateUrl: './details-perso.page.html',
  styleUrls: ['./details-perso.page.scss'],
})

export class DetailsPersoPage implements OnInit {

  perso = null;
  image: any
  name: any
  result: any
  animes: any
  add: any
  id: any
  id_anime: any

  constructor(private PersoService: PersoService, private routeur: ActivatedRoute, private alertController: AlertController) { }

  ngOnInit() {
    const id: any = this.routeur.snapshot.paramMap.get('id')
    this.PersoService.getPersoDetails(id).subscribe((res) => {
      this.perso = res;
    });
  }


  deletePerso(id: any) {
    this.PersoService.deletePerso(id).subscribe(del => {
      location.replace('/tabs/persos');
    });
  }

}