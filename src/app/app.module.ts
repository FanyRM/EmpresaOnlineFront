import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './modules/componentes/error404/error404.component';
import { AccederComponent } from './modules/componentes/acceder/acceder.component';
import { CrearUsuarioComponent } from './modules/componentes/crear-usuario/crear-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    AccederComponent,
    CrearUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
