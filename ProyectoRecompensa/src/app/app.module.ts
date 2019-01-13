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
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { MenuService } from './services/menu.service';
import { DlcService } from './services/BD/dlc.service';
import { JugadorService } from './services/BD/jugador.service';
import { RecompensaService } from './services/BD/recompensa.service';
import { VideojuegoService } from './services/BD/videojuego.service';

import { MenuComponent } from './menu/menu.component';
import { MenuGenericoFormComponent } from './menu/forms/menu-generico-form/menu-generico-form.component';
import { CDlcFormComponent } from './menu/forms/dlc/c-dlc-form/c-dlc-form.component';
import { RDlcFormComponent } from './menu/forms/dlc/r-dlc-form/r-dlc-form.component';
import { CJugadorFormComponent } from './menu/forms/jugador/c-jugador-form/c-jugador-form.component';
import { RJugadorFormComponent } from './menu/forms/jugador/r-jugador-form/r-jugador-form.component';
import { CVideojuegoFormComponent } from './menu/forms/videojuego/c-videojuego-form/c-videojuego-form.component';
import { RUDVideojuegoFormComponent } from './menu/forms/videojuego/rud-videojuego-form/rud-videojuego-form.component';
import { CRecompensaFormComponent } from './menu/forms/recompensa/c-recompensa-form/c-recompensa-form.component';
import { RUDRecompensaFormComponent } from './menu/forms/recompensa/rud-recompensa-form/rud-recompensa-form.component';
import { NotifJugadorFormComponent } from './menu/forms/notificar/notif-jugador-form/notif-jugador-form.component';
import { NotifRecompensaFormComponent } from './menu/forms/notificar/notif-recompensa-form/notif-recompensa-form.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuGenericoFormComponent,
    CDlcFormComponent,
    RDlcFormComponent,
    CJugadorFormComponent,
    RJugadorFormComponent,
    CVideojuegoFormComponent,
    RUDVideojuegoFormComponent,
    CRecompensaFormComponent,
    RUDRecompensaFormComponent,
    NotifJugadorFormComponent,
    NotifRecompensaFormComponent
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
    MatSnackBarModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MenuService,
    DlcService,
    JugadorService,
    RecompensaService,
    VideojuegoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
