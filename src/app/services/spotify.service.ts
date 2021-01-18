import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {


    console.log('servicio funciona');
  }


  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCQSRM1Zb9qzVqVE5hQBy1nVVVCPO18Py9vvCU3P_7zzDtRm9hLwRW_kHdrmKzBn6vHmy9mwBL6ir51xZk'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
              .subscribe((data:any)=>{
                console.log(data);
              });
  }
}
