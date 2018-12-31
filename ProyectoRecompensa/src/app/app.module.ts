import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { MatTabsModule}  from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';







import { MenuService } from './services/menu.service';
import { CDLCComponent } from './menu/menus/c-dlc/c-dlc.component';
import { CJugadorComponent } from './menu/menus/c-jugador/c-jugador.component';
import { CRecompensaComponent } from './menu/menus/c-recompensa/c-recompensa.component';
import { CVideojuegoComponent } from './menu/menus/c-videojuego/c-videojuego.component';
import { DRecompensaComponent } from './menu/menus/d-recompensa/d-recompensa.component';
import { DVideojuegoComponent } from './menu/menus/d-videojuego/d-videojuego.component';
import { RDLCComponent } from './menu/menus/r-dlc/r-dlc.component';
import { RJugadorComponent } from './menu/menus/r-jugador/r-jugador.component';
import { RRecompensaComponent } from './menu/menus/r-recompensa/r-recompensa.component';
import { RVideojuegoComponent } from './menu/menus/r-videojuego/r-videojuego.component';
import { URecompensaComponent } from './menu/menus/u-recompensa/u-recompensa.component';
import { UVideojuegoComponent } from './menu/menus/u-videojuego/u-videojuego.component';
import { MenuEspecificoComponent } from './menu/menus/menu-especifico/menu-especifico.component';
import { MenuGenericoComponent } from './menu/menus/menu-generico/menu-generico.component';



import { AppRoutingModule } from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CDLCComponent,
    CJugadorComponent,
    CRecompensaComponent,
    CVideojuegoComponent,
    DRecompensaComponent,
    DVideojuegoComponent,
    RDLCComponent,
    RJugadorComponent,
    RRecompensaComponent,
    RVideojuegoComponent,
    URecompensaComponent,
    UVideojuegoComponent,
    MenuEspecificoComponent,
    MenuGenericoComponent
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatTabsModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
