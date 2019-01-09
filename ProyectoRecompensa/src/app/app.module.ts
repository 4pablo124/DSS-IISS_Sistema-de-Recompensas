import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";

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

import { MenuComponent } from './menu/menu.component';
import { MenuService } from './services/menu.service';

import { CDlcFormComponent } from './menu/forms/c-dlc-form/c-dlc-form.component';
import { CJugadorFormComponent } from './menu/forms/c-jugador-form/c-jugador-form.component';
import { CRecompensaFormComponent } from './menu/forms/c-recompensa-form/c-recompensa-form.component';
import { CVideojuegoFormComponent } from './menu/forms/c-videojuego-form/c-videojuego-form.component';
import { RDlcFormComponent } from './menu/forms/r-dlc-form/r-dlc-form.component';
import { RJugadorFormComponent } from './menu/forms/r-jugador-form/r-jugador-form.component';
import { RudRecompensaFormComponent } from './menu/forms/rud-recompensa-form/rud-recompensa-form.component';
import { RudVideojuegoFormComponent } from './menu/forms/rud-videojuego-form/rud-videojuego-form.component';
import { MenuGenericoFormComponent } from './menu/forms/menu-generico-form/menu-generico-form.component';
import { RVideojuegoFormComponent } from './menu/forms/r-videojuego-form/r-videojuego-form.component';




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
    RudRecompensaFormComponent,
    RudVideojuegoFormComponent,
    MenuGenericoFormComponent,
    RVideojuegoFormComponent 
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
    AppRoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
