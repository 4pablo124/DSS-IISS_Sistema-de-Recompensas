import { Routes } from "@angular/router";
import { MenuGenericoFormComponent } from "../menu/forms/menu-generico-form/menu-generico-form.component";
import { CDlcFormComponent } from "../menu/forms/c-dlc-form/c-dlc-form.component";
import { RDlcFormComponent } from "../menu/forms/r-dlc-form/r-dlc-form.component";
import { CJugadorFormComponent } from "../menu/forms/c-jugador-form/c-jugador-form.component";
import { RJugadorFormComponent } from "../menu/forms/r-jugador-form/r-jugador-form.component";
import { CVideojuegoFormComponent } from "../menu/forms/c-videojuego-form/c-videojuego-form.component";
import { RVideojuegoFormComponent } from "../menu/forms/r-videojuego-form/r-videojuego-form.component";
import { UVideojuegoFormComponent } from "../menu/forms/u-videojuego-form/u-videojuego-form.component";
import { DVideojuegoFormComponent } from "../menu/forms/d-videojuego-form/d-videojuego-form.component";
import { CRecompensaFormComponent } from "../menu/forms/c-recompensa-form/c-recompensa-form.component";
import { RRecompensaFormComponent } from "../menu/forms/r-recompensa-form/r-recompensa-form.component";
import { URecompensaFormComponent } from "../menu/forms/u-recompensa-form/u-recompensa-form.component";
import { DRecompensaFormComponent } from "../menu/forms/d-recompensa-form/d-recompensa-form.component";




export const routes: Routes = [
    
    { path: 'menu', component: MenuGenericoFormComponent },
    { path: 'cDLC', component: CDlcFormComponent },
    { path: 'rDLC', component: RDlcFormComponent },
    { path: 'cJugador', component: CJugadorFormComponent },
    { path: 'rJugador', component: RJugadorFormComponent },
    { path: 'cVideojuego', component: CVideojuegoFormComponent },
    { path: 'rVideojuego', component: RVideojuegoFormComponent },
    { path: 'uVideojuego', component: UVideojuegoFormComponent },
    { path: 'dVideojuego', component: DVideojuegoFormComponent },
    { path: 'cRecompensa', component: CRecompensaFormComponent },
    { path: 'rRecompensa', component: RRecompensaFormComponent },
    { path: 'uRecompensa', component: URecompensaFormComponent },
    { path: 'dRecompensa', component: DRecompensaFormComponent },
    { path: '', redirectTo: '/menu', pathMatch: 'full' }
];