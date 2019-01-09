import { Injectable } from '@angular/core';

import { iMenu } from "../clases/Menus/iMenu";

import { Command_Crear } from "../clases/Command/Command_Crear";
import { Command_D_Recompensa } from "../clases/Command/Command_D_Recompensa";
import { Command_D_Videojuego } from "../clases/Command//Command_D_Videojuego";
import { Command_R_DLC } from "../clases/Command//Command_R_DLC";
import { Command_R_Jugador } from "../clases/Command//Command_R_Jugador";
import { Command_R_Recompensa } from "../clases/Command//Command_R_Recompensa";
import { Command_R_Videojuego } from "../clases/Command//Command_R_Videojuego";
import { Command_U_Recompensa } from "../clases/Command/Command_U_Recompensa";
import { Command_U_Videojuego } from "../clases/Command/Command_U_Videojuego";
import { Command_Nuevo_Juego } from "../clases/Command//Command_Nuevo_Juego";
import { Command_Nueva_Recompensa } from "../clases/Command//Command_Nueva_Recompensa";

import { Factory_DLC } from "../clases/Factory/Factory_DLC";
import { Factory_Jugador } from "../clases/Factory/Factory_Jugador";
import { Factory_Recompensa } from "../clases/Factory/Factory_Recompensa";
import { Factory_Videojuego } from "../clases/Factory/Factory_Videojuego";
import { MenuEspecifico } from '../clases/Menus/menuEspecifico';
import { MenuGenerico } from '../clases/Menus/menuGenerico';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuPrincipal: iMenu;
  selecetedMenu: iMenu;

  constructor() { 
    // DLC   
    let menu_c_dlc = new MenuEspecifico("Añadir nuevo DLC", "/cDLC", new Command_Crear(new Factory_DLC));
    let menu_r_dlc = new MenuEspecifico("Consultar datos de un DLC", "/rDLC", new Command_R_DLC());

    let menu_cr_dlc = new MenuGenerico("CR DLC", [menu_c_dlc, menu_r_dlc]);

    // JUGADOR
    let menu_c_jugador = new MenuEspecifico("Añadir nuevo jugador", "/cJugador", new Command_Crear(new Factory_Jugador));
    let menu_r_jugador = new MenuEspecifico("Consultar datos de un jugador", "/rJugador", new Command_R_Jugador());

    let menu_cr_jugador = new MenuGenerico("CR Jugador", [menu_c_jugador, menu_r_jugador]);

    // VIDEOJUEGO
    let menu_c_videojuego = new MenuEspecifico("Añadir nuevo videojuego", "/cVideojuego", new Command_Crear(new Factory_Videojuego));
    let menu_r_videojuego = new MenuEspecifico("Consultar datos de un videojuego", "/rVideojuego", new Command_R_Videojuego());
    let menu_u_videojuego = new MenuEspecifico("Editar datos de un videojuego", "/uVideojuego", new Command_U_Videojuego());
    let menu_d_videojuego = new MenuEspecifico("Eliminar videojuego", "/dVideojuego", new Command_D_Videojuego());

    let menu_crud_videojuego = new MenuGenerico("CRUD Videojuego", [menu_c_videojuego, menu_r_videojuego, menu_u_videojuego, menu_d_videojuego]);

    // RECOMPENSA
    let menu_c_recompensa = new MenuEspecifico("Añadir nueva recompensa", "/cRecompensa", new Command_Crear(new Factory_Recompensa));
    let menu_r_recompensa = new MenuEspecifico("Consultar datos de una recompensa", "/rRecompensa", new Command_R_Recompensa());
    let menu_u_recompensa = new MenuEspecifico("Editar datos de una recompensa", "/uRecompensa", new Command_U_Recompensa());
    let menu_d_recompensa = new MenuEspecifico("Eliminar recompensa", "/dRecompensa", new Command_D_Recompensa());

    let menu_crud_recompensa = new MenuGenerico("CRUD Recompensa", [menu_c_recompensa, menu_r_recompensa, menu_u_recompensa, menu_d_recompensa]);

    // MENU PRINCIPAL
    let menuPrincipal = new MenuGenerico("Menu Principal", [
      menu_cr_dlc,
      menu_crud_videojuego,
      menu_cr_jugador,
      menu_crud_recompensa
    ]);

    this.menuPrincipal = menuPrincipal;
  }

  getMenuPrincipal(): iMenu{
    return this.menuPrincipal;
  }

  setSelectedMenu(selecetedMenu: iMenu){
    this.selecetedMenu = selecetedMenu;
  }

  getSelectedMenu(): iMenu{
    return this.selecetedMenu;
  }
}

