import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Maps para filtrar data
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query:string){
    
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDtXWBJg3uizGOrwB9YxO8w8v1JEpm4qSynOQ9tQa8KRbjdotKQn9zhbOmfEKgbplvo9ePoMgQc9HZCNuI'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
              .pipe(map((data:any)=>{
                return data.albums.items;
              }));

  }



    getArtista(termino: string){

      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQDtXWBJg3uizGOrwB9YxO8w8v1JEpm4qSynOQ9tQa8KRbjdotKQn9zhbOmfEKgbplvo9ePoMgQc9HZCNuI'
      });
  
      return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
                  .pipe(map((data:any)=>{
                    return data.artists.items;
                  }));

    }
}
