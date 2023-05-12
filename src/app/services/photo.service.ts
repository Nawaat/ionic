import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

/**
 * Camera = acces camera
 * Source= source camera(selfie ou derriere)
 */
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { UserPhoto } from '../interfaces/user-photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: UserPhoto[] = [];
  private PHOTO_STORAGE: string = 'photos';

  constructor(private http: HttpClient) { }

  getAllImages() {
    return this.http.get(`${environment.baseUrl}/Gallery/GetAllImage`)
  }

  //methode getPhoto nous permet de prendre une photo
  public async TakePhoto() {
    const photoTaken = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    const savedImageFile = await this.savePicture(photoTaken);
    this.photos.unshift(savedImageFile);

    //creer objet clee valeur, preferences avec nos photo 
    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }

  private async savePicture(photo: Photo) {
    // Convertir la photo au format base64, requis par l'API du système de fichiers pour enregistrer
    const base64Data = await this.readAsBase64(photo);

    // Écrire le fichier dans le répertoire de données
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });


    // Utilisez webPath pour afficher la nouvelle image au lieu de base64 car c'est
    //déjà chargé en mémoire
    return {
      filepath: fileName,
      webviewPath: photo.webPath
    };
  }


  private async readAsBase64(photo: Photo) {
    // Récupérez la photo, lisez-la comme un blob, puis convertissez-la au format base64
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }


  /**instancie nouvel objet */

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });


  public async loadSaved() {
    // Récupérer les données de la matrice de photos en cache
    const photoList = await Preferences.get({ key: this.PHOTO_STORAGE });

    //recuperer la photp format json sinon tableau vide
    this.photos = JSON.parse(photoList.value) || [];

    // Affichez la photo en lisant au format base64
    for (let photo of this.photos) {
      // Lire les données de chaque photo enregistrée à partir du système de fichiers
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });

      // Plate-forme Web uniquement : chargez la photo en tant que données base64
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }

  }


}
