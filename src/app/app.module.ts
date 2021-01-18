import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Peticiones Http
import { HttpClientModule } from '@angular/common/http';


//rutas
import { APP_ROUTING } from './app.routes';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
