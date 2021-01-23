import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//servicio
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista: any = {};
  
  topTracks: any = [];

  loading: boolean;

  constructor(private router: ActivatedRoute,
                private spotify:SpotifyService) {

    this.loading = true;

    this.router.params.subscribe(params => {

      setTimeout(()=>{
        this.loading = false;
        this.getArtista( params ['id']);
        this.getTopTracks( params ['id']);

      });

    });
  }

  getArtista( id: string){
    this.loading = true;

    this.spotify.getArtista(id)
          .subscribe( artista =>{

            setTimeout(()=>{
              this.loading = false;
              this.artista= artista;
            },1000);
        
          });
  }


  getTopTracks(id:string){
    this.spotify.getTopTracks( id)
              .subscribe(topTracks =>{
                console.log(topTracks);
                this.topTracks=topTracks;
              });
  }



}
