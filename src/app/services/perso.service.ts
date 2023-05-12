import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Perso } from "../models/Perso";

@Injectable({

  providedIn: 'root'

})

export class PersoService {

  constructor(private http: HttpClient) { }

  getAllPersos() {
    return this.http.get(`${environment.baseUrl}/Perso/afficheLesPersos`)
  }

  AddPerso(data: any) {

    return this.http.post(`${environment.baseUrl}/Perso/createPerso`, data)
  }

  getPersoDetails(id: any) {
    return this.http.get(`${environment.baseUrl}/Perso/GetOne/${id}`)
  }

  deletePerso(id: any) {
    return this.http.delete(`${environment.baseUrl}/Perso/deletePerso/${id}`)
  }

  updatePerso(id: any, data: any) {
    return this.http.put(`${environment.baseUrl}/Perso/updatePerso/${id}`, data)
  }

}
