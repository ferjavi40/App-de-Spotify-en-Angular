import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Maps para filtrar data
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA4YI1H8v60VCETRYGWUxEn3I2eWbm0IUbgiT5gWl-oepjIx_6Aa606DxDjv8h8OghBy8a0Q8q0sF--6-E'
    });

    return this.http.get(url, { headers })
  }

  getNewReleases() {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQB1_MNh0lnFEfVajjn8aPlZiW1FAhXwcc8pvaqOmTPzVcJ-A0KfmgV9YBrx9FRdjtB_rN__OvxgTisNP3A'
    // });
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));

  }



  getArtista(termino: string) {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQB1_MNh0lnFEfVajjn8aPlZiW1FAhXwcc8pvaqOmTPzVcJ-A0KfmgV9YBrx9FRdjtB_rN__OvxgTisNP3A'
    // });

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));

  }
}
