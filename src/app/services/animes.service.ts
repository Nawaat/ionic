import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private http: HttpClient) { }

  getAllAnimes() {
    return this.http.get(`${environment.baseUrl}/Anime/AfficheAllAnimes`)
  }

}
