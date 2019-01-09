import { Routes } from "@angular/router";
import { MenuGenericoFormComponent } from "../menu/forms/menu-generico-form/menu-generico-form.component";
import { CDlcFormComponent } from "../menu/forms/c-dlc-form/c-dlc-form.component";
import { RDlcFormComponent } from "../menu/forms/r-dlc-form/r-dlc-form.component";
import { CJugadorFormComponent } from "../menu/forms/c-jugador-form/c-jugador-form.component";
import { RJugadorFormComponent } from "../menu/forms/r-jugador-form/r-jugador-form.component";
import { CVideojuegoFormComponent } from "../menu/forms/c-videojuego-form/c-videojuego-form.component";


export const routes: Routes = [
    
    { path: 'menu', component: MenuGenericoFormComponent },
    { path: 'cDLC', component: CDlcFormComponent },
    { path: 'rDLC', component: RDlcFormComponent },
    { path: 'cJugador', component: CJugadorFormComponent },
    { path: 'rJugador', component: RJugadorFormComponent },
    { path: '', redirectTo: '/menu', pathMatch: 'full' }
];