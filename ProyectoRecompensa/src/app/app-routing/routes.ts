import { Routes } from "@angular/router";

import { MenuGenericoComponent } from '../menu/menus/menu-generico/menu-generico.component';
import { MenuEspecificoComponent } from '../menu/menus/menu-especifico/menu-especifico.component';
import { CDLCComponent } from '../menu/menus/c-dlc/c-dlc.component';
import { RDLCComponent } from '../menu/menus/r-dlc/r-dlc.component';
import { CJugadorComponent } from '../menu/menus/c-jugador/c-jugador.component';
import { RJugadorComponent } from '../menu/menus/r-jugador/r-jugador.component';
import { CVideojuegoComponent } from '../menu/menus/c-videojuego/c-videojuego.component';
import { RVideojuegoComponent } from '../menu/menus/r-videojuego/r-videojuego.component';
import { UVideojuegoComponent } from '../menu/menus/u-videojuego/u-videojuego.component';
import { DVideojuegoComponent } from '../menu/menus/d-videojuego/d-videojuego.component';
import { CRecompensaComponent } from '../menu/menus/c-recompensa/c-recompensa.component';
import { RRecompensaComponent } from '../menu/menus/r-recompensa/r-recompensa.component';
import { URecompensaComponent } from '../menu/menus/u-recompensa/u-recompensa.component';
import { DRecompensaComponent } from '../menu/menus/d-recompensa/d-recompensa.component';
import { NuevoJuegoComponent } from '../menu/menus/nuevo-juego/nuevo-juego.component';
import { NuevaRecompensaComponent } from '../menu/menus/nueva-recompensa/nueva-recompensa.component';

export const routes: Routes = [
    
    { path: 'menu', component: MenuGenericoComponent },
    { path: 'crJugador', component: MenuGenericoComponent },
    { path: 'crDLC', component: MenuGenericoComponent },
    { path: 'crudVideojuego', component: MenuGenericoComponent },
    { path: 'crudRecompensa', component: MenuGenericoComponent },
    { path: 'notificarNuevoJuego', component: MenuGenericoComponent },
    { path: 'notificarNuevaRecompensa', component: MenuGenericoComponent },
    { path: 'cDLC', component: CDLCComponent },
    { path: 'rDLC', component: RDLCComponent },
    { path: 'cJugador', component: CJugadorComponent },
    { path: 'rJugador', component: RJugadorComponent },
    { path: 'cVideojuego', component: CVideojuegoComponent },
    { path: 'rVideojuego', component: RVideojuegoComponent },
    { path: 'uVideojuego', component: UVideojuegoComponent },
    { path: 'dVideojuego', component: DVideojuegoComponent },
    { path: 'cRecompensa', component: CRecompensaComponent },
    { path: 'rRecompensa', component: RRecompensaComponent },
    { path: 'uRecompensa', component: URecompensaComponent },
    { path: 'dRecompensa', component: DRecompensaComponent },
    { path: 'nuevoJuego', component: NuevoJuegoComponent},
    { path: 'nuevaRecompensa', component: NuevaRecompensaComponent },
    { path: '', redirectTo: '/menu', pathMatch: 'full' }
];