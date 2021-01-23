import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;


  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error   = false;

    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        
        setTimeout(()=>{
          this.nuevasCanciones = data;
          this.loading = false;
        },1000)

      }, (errorServicio)=>{
        this.loading = false;
        this.error= true;
        this.mensajeError = errorServicio.error.error.message;
      });


  }



}
