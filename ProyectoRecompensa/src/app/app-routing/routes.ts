import { Routes } from "@angular/router";
import { MenuGenericoFormComponent } from "../menu/forms/menu-generico-form/menu-generico-form.component";
import { CDlcFormComponent } from "../menu/forms/dlc/c-dlc-form/c-dlc-form.component";
import { RDlcFormComponent } from "../menu/forms/dlc/r-dlc-form/r-dlc-form.component";
import { CJugadorFormComponent } from "../menu/forms/jugador/c-jugador-form/c-jugador-form.component";
import { RJugadorFormComponent } from "../menu/forms/jugador/r-jugador-form/r-jugador-form.component";
import { CVideojuegoFormComponent } from "../menu/forms/videojuego/c-videojuego-form/c-videojuego-form.component";
import { RVideojuegoFormComponent } from "../menu/forms/videojuego/r-videojuego-form/r-videojuego-form.component";
import { DVideojuegoFormComponent } from "../menu/forms/videojuego/d-videojuego-form/d-videojuego-form.component";
import { CRecompensaFormComponent } from "../menu/forms/recompensa/c-recompensa-form/c-recompensa-form.component";
import { RRecompensaFormComponent } from "../menu/forms/recompensa/r-recompensa-form/r-recompensa-form.component";
import { DRecompensaFormComponent } from "../menu/forms/recompensa/d-recompensa-form/d-recompensa-form.component";




export const routes: Routes = [
    
    { path: 'menu', component: MenuGenericoFormComponent },
    { path: 'cDLC', component: CDlcFormComponent },
    { path: 'rDLC', component: RDlcFormComponent },
    { path: 'cJugador', component: CJugadorFormComponent },
    { path: 'rJugador', component: RJugadorFormComponent },
    { path: 'cVideojuego', component: CVideojuegoFormComponent },
    { path: 'rVideojuego', component: RVideojuegoFormComponent },
    { path: 'dVideojuego', component: DVideojuegoFormComponent },
    { path: 'cRecompensa', component: CRecompensaFormComponent },
    { path: 'rRecompensa', component: RRecompensaFormComponent },
    { path: 'dRecompensa', component: DRecompensaFormComponent },
    { path: '', redirectTo: '/menu', pathMatch: 'full' }
];