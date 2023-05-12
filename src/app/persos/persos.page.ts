import { Component, OnInit, ViewChild } from '@angular/core';
import { PersoService } from '../services/perso.service';
import { AnimesService } from '../services/animes.service'


@Component({
  selector: 'app-persos',
  templateUrl: './persos.page.html',
  styleUrls: ['./persos.page.scss'],
})
export class PersosPage implements OnInit {

  name: string;
  persos: any;
  animes: any;


  constructor(private PersoService: PersoService, private AnimeService: AnimesService) { }

  //A l'initialisation de la page appeler la methode qui recupere tout les persos
  ngOnInit() {

    this.loadPersos()
  }

  //methode qui recupere tout les persos
  loadPersos() {

    this.PersoService.getAllPersos().subscribe(res => {
      this.persos = res;

      this.AnimeService.getAllAnimes().subscribe(res => {
        this.animes = res;

      });

    });

  }


}
