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

import { Command_Crear } from "../clases/Command/Commands/Command_Crear";
import { Command_D_Recompensa } from "../clases/Command/Commands/Command_D_Recompensa";
import { Command_D_Videojuego } from "../clases/Command/Commands/Command_D_Videojuego";
import { Command_R_DLC } from "../clases/Command/Commands/Command_R_DLC";
import { Command_R_Jugador } from "../clases/Command/Commands/Command_R_Jugador";
import { Command_R_Recompensa } from "../clases/Command/Commands/Command_R_Recompensa";
import { Command_R_Videojuego } from "../clases/Command/Commands/Command_R_Videojuego";
import { Command_U_Recompensa } from "../clases/Command/Commands/Command_U_Recompensa";
import { Command_U_Videojuego } from "../clases/Command/Commands/Command_U_Videojuego";

import { Factory_DLC } from "../clases/Factory/Factory_DLC";
import { Factory_Jugador } from "../clases/Factory/Factory_Jugador";
import { Factory_Recompensa } from "../clases/Factory/Factory_Recompensa";
import { Factory_Videojuego } from "../clases/Factory/Factory_Videojuego";

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

      //comands
    let menu_c_dlc = new CDLCComponent();
    menu_c_dlc.setCommand(new Command_Crear(new Factory_DLC()));
    let menu_r_dlc = new RDLCComponent();
    menu_r_dlc.setCommand(new Command_R_DLC());

      //options
    menu_cr_dlc.setOptions([
      menu_c_dlc,
      menu_r_dlc
    ]);

    // JUGADOR
    let menu_cr_jugador = new MenuGenericoComponent();
    menu_cr_jugador.setName("CR Jugador");
    menu_cr_jugador.setRoute("/crJugador");

      //comands
    let menu_c_jugador = new CJugadorComponent();
    menu_c_jugador.setCommand(new Command_Crear(new Factory_Jugador()));
    let menu_r_jugador = new RJugadorComponent();
    menu_r_jugador.setCommand(new Command_R_Jugador());

     //opciones
    menu_cr_jugador.setOptions([
      menu_c_jugador,
      menu_r_jugador
    ]);

    // Videojuego
    let menu_crud_videojuego = new MenuGenericoComponent();
    menu_crud_videojuego.setName("CRUD Videojuego");
    menu_crud_videojuego.setRoute("/crudVideojuego");
      
      //comands
    let menu_c_videojuego = new CVideojuegoComponent();
    menu_c_videojuego.setCommand(new Command_Crear(new Factory_Videojuego()));
    let menu_r_videojuego = new RVideojuegoComponent();
    menu_r_videojuego.setCommand(new Command_R_Videojuego());
    let menu_u_videojuego = new UVideojuegoComponent();
    menu_u_videojuego.setCommand(new Command_U_Videojuego());
    let menu_d_videojuego = new DVideojuegoComponent();
    menu_d_videojuego.setCommand(new Command_D_Videojuego());

      //options
    menu_crud_videojuego.setOptions([
      menu_c_videojuego,
      menu_r_videojuego,
      menu_u_videojuego,
      menu_d_videojuego
    ]);

    // RECOMPENSA
    let menu_crud_recompensa = new MenuGenericoComponent();
    menu_crud_recompensa.setName("CRUD Recompensa");
    menu_crud_recompensa.setRoute("/crudRecompensa");

      //commands
    let menu_c_recompensa = new CRecompensaComponent();
    menu_c_recompensa.setCommand(new Command_Crear(new Factory_Recompensa()));
    let menu_r_recompensa = new RRecompensaComponent();
    menu_r_recompensa.setCommand(new Command_R_Recompensa());
    let menu_u_recompensa = new URecompensaComponent();
    menu_u_recompensa.setCommand(new Command_U_Recompensa());
    let menu_d_recompensa = new DRecompensaComponent();
    menu_d_recompensa.setCommand(new Command_D_Recompensa());

      //opciones
    menu_crud_recompensa.setOptions([
      menu_c_recompensa,
      menu_r_recompensa,
      menu_u_recompensa,
      menu_d_recompensa
    ]);


    // MENU PRINCIPAL
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

