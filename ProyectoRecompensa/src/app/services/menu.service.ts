import { Injectable } from '@angular/core';

import { iMenu } from "../clases/Menus/iMenu";
import { MenuEspecifico } from '../clases/Menus/menuEspecifico';
import { MenuGenerico } from '../clases/Menus/menuGenerico';


import { Command_C } from "../clases/Command/Command_C";
import { Command_R } from "../clases/Command/Command_R";
import { Command_U } from '../clases/Command/Command_U';
import { Command_D } from "../clases/Command/Command_D";
import { Command_Notif } from '../clases/Command/Command_Notif';

import { Factory_DLC } from "../clases/Factory/Factory_DLC";
import { Factory_Jugador } from "../clases/Factory/Factory_Jugador";
import { Factory_Recompensa } from "../clases/Factory/Factory_Recompensa";
import { Factory_Videojuego } from "../clases/Factory/Factory_Videojuego";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _menuPrincipal: iMenu;
  private _selectedMenu: iMenu;

  constructor() { 
    // DLC   
    let menu_c_dlc = new MenuEspecifico("Añadir nuevo DLC", "/cDLC", new Command_C(new Factory_DLC));
    let menu_r_dlc = new MenuEspecifico("Consultar datos de un DLC", "/rDLC", new Command_R());

    let menu_cr_dlc = new MenuGenerico("CR DLC", [menu_c_dlc, menu_r_dlc]);

    // JUGADOR
    let menu_c_jugador = new MenuEspecifico("Añadir nuevo jugador", "/cJugador", new Command_C(new Factory_Jugador));
    let menu_r_jugador = new MenuEspecifico("Consultar datos de un jugador", "/rJugador", new Command_R());

    let menu_cr_jugador = new MenuGenerico("CR Jugador", [menu_c_jugador, menu_r_jugador]);

    // VIDEOJUEGO
    let menu_c_videojuego = new MenuEspecifico("Añadir nuevo videojuego", "/cVideojuego", new Command_C(new Factory_Videojuego));
    let menu_r_videojuego = new MenuEspecifico("Consultar datos de un videojuego", "/rVideojuego", new Command_R());
    let menu_u_videojuego = new MenuEspecifico("Editar datos de un videojuego", "/uVideojuego", new Command_U());
    let menu_d_videojuego = new MenuEspecifico("Eliminar videojuego", "/dVideojuego", new Command_D());

    let menu_rud_videojuego = new MenuGenerico("RUD videojuego", [menu_r_videojuego, menu_u_videojuego, menu_d_videojuego], "/rudVideojuego");

    let menu_crud_videojuego = new MenuGenerico("CRUD Videojuego", [menu_c_videojuego, menu_rud_videojuego]);
    
    // RECOMPENSA
    let menu_c_recompensa = new MenuEspecifico("Añadir nueva recompensa", "/cRecompensa", new Command_C(new Factory_Recompensa));
    let menu_r_recompensa = new MenuEspecifico("Consultar datos de una recompensa", "/rRecompensa", new Command_R());
    let menu_u_recompensa = new MenuEspecifico("Editar datos de una recompensa", "/uRecompensa", new Command_U());
    let menu_d_recompensa = new MenuEspecifico("Eliminar recompensa", "/dRecompensa", new Command_D());
    
    let menu_rud_recompensa = new MenuGenerico("RUD recompensa", [menu_r_recompensa, menu_u_recompensa, menu_d_recompensa], "/rudRecompensa");

    let menu_crud_recompensa = new MenuGenerico("CRUD Recompensa", [menu_c_recompensa, menu_rud_recompensa]);


    // Notificaciones
    let menu_notif_jugador = new MenuEspecifico("Notificar nuevo jugador de un videojuego", "/notifJugador", new Command_Notif());
    let menu_notif_recompensa = new MenuEspecifico("Notificar obtencion de recompensa de un videojuego", "/notifRecompensa", new Command_Notif());
    let menu_notificar = new MenuGenerico("Notificar", [menu_notif_jugador, menu_notif_recompensa]);

    // MENU PRINCIPAL
    let menuPrincipal = new MenuGenerico("Menu Principal", [
      menu_cr_dlc,
      menu_crud_videojuego,
      menu_cr_jugador,
      menu_crud_recompensa,
      menu_notificar
    ]);

    this._menuPrincipal = menuPrincipal;
  }

  get menuPrincipal(): iMenu{
    return this._menuPrincipal;
  }

  set selectedMenu(selecetedMenu: iMenu){
    this._selectedMenu = selecetedMenu;
  }

  get selectedMenu(): iMenu{
    return this._selectedMenu;
  }
}

