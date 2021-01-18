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
      'Authorization': 'Bearer BQC-KmVUQHxxvvtJ7fbLczUxLyebI-0atWs4TvDxajIoRdhPijJKEbKb0aCiVBucMWRD4xq2jpQMPZmsxYU'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }
}
