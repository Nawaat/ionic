import { Component, OnInit } from '@angular/core';
import { PersoService } from '../services/perso.service';
import { Router, ActivatedRoute } from "@angular/router";
import { AnimesService } from '../services/animes.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { registerLocaleData } from '@angular/common';


@Component({
  selector: 'app-form-cu',
  templateUrl: './form-cu.page.html',
  styleUrls: ['./form-cu.page.scss'],
})

export class FormCUPage implements OnInit {

  perso: any
  animes: any;
  id: any
  id_anime: any
  image: any
  name: any
  Form: FormGroup
  updating: boolean

  constructor(private PersoService: PersoService, private route: ActivatedRoute, private AnimeService: AnimesService, private formBuilder: FormBuilder, private router: Router) {
    this.Form = new FormGroup({
      image: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      id_anime: new FormControl('', Validators.required),
    });
  }

  /**A l'initialisation de la page on recupere la liste des animes, le Form Group 
   * et le details des utilisateur si c'est pour editer
  */
  ngOnInit() {

    this.AnimeService.getAllAnimes().subscribe(res => {
      this.animes = res;
    });
    
    this.getValue()
  }

  //methode permettant de recuperer les valeur du perso afin de le modifier 
  getValue() {
    //etablir parametre de route de l'id 
    this.id = this.route.snapshot.paramMap.get('id');

    /**Lorque on a des parametre id alors on appel le service des Perso pour obtenir les details afin de préremplir le formulaire
     * ensuite la variable updating est sur true
    */

    if (this.id) {
      this.PersoService.getPersoDetails(this.id).subscribe((res) => {

        this.perso = res;

        this.Form = this.formBuilder.group({
          image: new FormControl(this.perso.Perso.image, Validators.required),
          name: new FormControl(this.perso.Perso.name, Validators.required),
          id_anime: new FormControl(this.perso.Perso.id_anime, Validators.required),
        });

        this.updating = true;

      });

    };
  }

  //methode pour ajouter un perso via formulaire

  AddPerso() {

    this.PersoService.AddPerso(this.Form.value).subscribe(() => {

      console.log(this.Form.value);
      location.replace('/tabs/persos');

    });

  }

  UpdatePerso() {
    this.PersoService.updatePerso(this.id, this.Form.value).subscribe(() => {
      location.replace('/tabs/persos/' + this.id);
    });
  }

  customActionSheetOptions = {
    header: 'Selectionne un animé'
  };
}

