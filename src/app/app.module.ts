import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Peticiones Http
import { HttpClientModule } from '@angular/common/http';


//services
import { SpotifyService } from './services/spotify.service';

//pipes
import { NoimagePipe } from './pipes/noimage.pipe';



//rutas
import { APP_ROUTING } from './app.routes';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { LoadingComponent } from './shared/loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetaComponent,
    LoadingComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
    
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
