import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";

import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { MenuService } from './services/menu.service';

import { MenuComponent } from './menu/menu.component';
import { CDlcFormComponent } from './menu/forms/c-dlc-form/c-dlc-form.component';
import { CJugadorFormComponent } from './menu/forms/c-jugador-form/c-jugador-form.component';
import { CRecompensaFormComponent } from './menu/forms/c-recompensa-form/c-recompensa-form.component';
import { CVideojuegoFormComponent } from './menu/forms/c-videojuego-form/c-videojuego-form.component';
import { RDlcFormComponent } from './menu/forms/r-dlc-form/r-dlc-form.component';
import { RJugadorFormComponent } from './menu/forms/r-jugador-form/r-jugador-form.component';
import { MenuGenericoFormComponent } from './menu/forms/menu-generico-form/menu-generico-form.component';
import { RVideojuegoFormComponent } from './menu/forms/r-videojuego-form/r-videojuego-form.component';
import { DVideojuegoFormComponent } from './menu/forms/d-videojuego-form/d-videojuego-form.component';
import { RRecompensaFormComponent } from './menu/forms/r-recompensa-form/r-recompensa-form.component';
import { DRecompensaFormComponent } from './menu/forms/d-recompensa-form/d-recompensa-form.component';
import { AddDlcService } from './services/BD/add-dlc.service';
import { AddJugadorService } from './services/BD/add-jugador.service';
import { AddRecompensaService } from './services/BD/add-recompensa.service';
import { AddVideojuegoService } from './services/BD/add-videojuego.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CDlcFormComponent,
    CJugadorFormComponent,
    CRecompensaFormComponent,
    CVideojuegoFormComponent,
    RDlcFormComponent,
    RJugadorFormComponent,
    MenuGenericoFormComponent,
    RVideojuegoFormComponent,
    DVideojuegoFormComponent,
    RRecompensaFormComponent,
    DRecompensaFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MenuService,
    AddDlcService,
    AddJugadorService,
    AddRecompensaService,
    AddVideojuegoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
