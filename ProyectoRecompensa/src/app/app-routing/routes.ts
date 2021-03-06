import { Routes } from "@angular/router";
import { MenuGenericoFormComponent } from "../menu/forms/menu-generico-form/menu-generico-form.component";
import { CDlcFormComponent } from "../menu/forms/dlc/c-dlc-form/c-dlc-form.component";
import { RDlcFormComponent } from "../menu/forms/dlc/r-dlc-form/r-dlc-form.component";
import { CJugadorFormComponent } from "../menu/forms/jugador/c-jugador-form/c-jugador-form.component";
import { RJugadorFormComponent } from "../menu/forms/jugador/r-jugador-form/r-jugador-form.component";
import { CVideojuegoFormComponent } from "../menu/forms/videojuego/c-videojuego-form/c-videojuego-form.component";
import { RUDVideojuegoFormComponent } from "../menu/forms/videojuego/rud-videojuego-form/rud-videojuego-form.component";
import { CRecompensaFormComponent } from "../menu/forms/recompensa/c-recompensa-form/c-recompensa-form.component";
import { RUDRecompensaFormComponent } from "../menu/forms/recompensa/rud-recompensa-form/rud-recompensa-form.component";
import { NotifJugadorFormComponent } from "../menu/forms/notificar/notif-jugador-form/notif-jugador-form.component";
import { NotifRecompensaFormComponent } from "../menu/forms/notificar/notif-recompensa-form/notif-recompensa-form.component";
import { JugadoresPorVideojuegoComponent } from "../menu/forms/stats/jugadores-por-videojuego/jugadores-por-videojuego.component";
import { RecompensasPorVideojuegoComponent } from "../menu/forms/stats/recompensas-por-videojuego/recompensas-por-videojuego.component";
import { JugadoresVideojuego100Component } from "../menu/forms/stats/jugadores-videojuego100/jugadores-videojuego100.component";




export const routes: Routes = [
    
    { path: 'menu', component: MenuGenericoFormComponent },
    { path: 'cDLC', component: CDlcFormComponent },
    { path: 'rDLC', component: RDlcFormComponent },
    { path: 'cJugador', component: CJugadorFormComponent },
    { path: 'rJugador', component: RJugadorFormComponent },
    { path: 'cVideojuego', component: CVideojuegoFormComponent },
    { path: 'rudVideojuego', component: RUDVideojuegoFormComponent },
    { path: 'cRecompensa', component: CRecompensaFormComponent },
    { path: 'rudRecompensa', component: RUDRecompensaFormComponent },
    { path: 'notifJugador', component:  NotifJugadorFormComponent},
    { path: 'notifRecompensa', component: NotifRecompensaFormComponent },
    { path: 'statJugVid', component: JugadoresPorVideojuegoComponent },
    { path: 'statJugRec', component: RecompensasPorVideojuegoComponent },
    { path: 'statJugVid100', component: JugadoresVideojuego100Component },
    { path: '', redirectTo: '/menu', pathMatch: 'full' }
];