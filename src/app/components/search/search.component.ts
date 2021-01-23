import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;



  constructor(private spotify: SpotifyService) { 
    this.loading = true;
  }
  
  buscar(termino: string) {
    
    this.spotify.getArtistas(termino)
      .subscribe((data) => {

        setTimeout(() => {
          this.artistas = data;
          this.loading = false;
        }, 1000)

      });
  }
}
