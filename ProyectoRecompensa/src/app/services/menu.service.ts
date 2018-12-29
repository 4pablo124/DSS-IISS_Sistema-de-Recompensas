import { Injectable } from '@angular/core';

import { iMenu } from "../menu/menus/iMenu";
import { MenuGenericoComponent } from "../menu/menus/menu-generico/menu-generico.component";
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


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenu(): iMenu{
    /// Definicion de los distintos objetos Menu ///

    // DLC
    let menu_cr_dlc = new MenuGenericoComponent();
    menu_cr_dlc.setName("CR DLC");
    menu_cr_dlc.setRoute("/crDLC");
    menu_cr_dlc.setOptions([
      new CDLCComponent(),
      new RDLCComponent()
    ]);

    // Jugador
    let menu_cr_jugador = new MenuGenericoComponent();
    menu_cr_jugador.setName("CR Jugador");
    menu_cr_jugador.setRoute("/crJugador");
    menu_cr_jugador.setOptions([
      new CJugadorComponent(),
      new RJugadorComponent()
    ]);

    // Videojuego
    let menu_crud_videojuego = new MenuGenericoComponent();
    menu_crud_videojuego.setName("CRUD Videojuego");
    menu_crud_videojuego.setRoute("/crudVideojuego");
    menu_crud_videojuego.setOptions([
      new CVideojuegoComponent(),
      new RVideojuegoComponent(),
      new UVideojuegoComponent(),
      new DVideojuegoComponent()
    ]);

    // Recompensa
    let menu_crud_recompensa = new MenuGenericoComponent();
    menu_crud_recompensa.setName("CRUD Recompensa");
    menu_crud_recompensa.setRoute("/crudRecompensa");
    menu_crud_recompensa.setOptions([
      new CRecompensaComponent(),
      new RRecompensaComponent(),
      new URecompensaComponent(),
      new DRecompensaComponent()
    ]);
    // Menu Principal
    let menuPrincipal = new MenuGenericoComponent();
    menuPrincipal.setName("Menu Principal");
    menuPrincipal.setRoute("menu");
    menuPrincipal.setOptions([
      menu_cr_jugador,
      menu_crud_videojuego,
      menu_crud_recompensa,
      menu_cr_dlc
    ]);

    return menuPrincipal;
  }
}

