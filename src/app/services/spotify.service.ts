import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {


    console.log('servicio funciona');
  }


  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA47ZXzgZ779cpbR262atKyAbIUYuLfoqvwP-85xs7rlB-7mUCBbpyaocN1gK37lq87NEeltGRx77Oil7Q'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }



    getArtista(termino: string){

      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQA47ZXzgZ779cpbR262atKyAbIUYuLfoqvwP-85xs7rlB-7mUCBbpyaocN1gK37lq87NEeltGRx77Oil7Q'
      });
  
      return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });

    }
}
