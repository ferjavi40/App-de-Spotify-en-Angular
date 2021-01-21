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

  loadingArtist: boolean;

  constructor(private router: ActivatedRoute,
                private spotify:SpotifyService) {

    this.loadingArtist = true;

    this.router.params.subscribe(params => {

      setTimeout(()=>{
        this.loadingArtist = false;
        this.getArtista( params ['id']);
        this.getTopTracks( params ['id']);

      });

    });
  }

  getArtista( id: string){
    this.loadingArtist = true;

    this.spotify.getArtista(id)
          .subscribe( artista =>{

            setTimeout(()=>{
              this.loadingArtist = false;
              this.artista= artista;
              console.log(this.artista);
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
