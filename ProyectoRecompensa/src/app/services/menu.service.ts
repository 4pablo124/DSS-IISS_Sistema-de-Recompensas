import { Injectable } from '@angular/core';

import { iMenu } from "../menu/menus/iMenu";
import { MenuGenerico } from "../menu/menus//MenuGenerico";
import { Menu_C_DLC } from '../menu/menus/Menu_C_DLC';
import { Menu_R_DLC } from '../menu/menus/Menu_R_DLC';
import { Menu_C_Jugador } from '../menu/menus/Menu_C_Jugador';
import { Menu_R_Jugador } from '../menu/menus/Menu_R_Jugador';
import { Menu_C_Videojuego } from '../menu/menus/Menu_C_Videojuego';
import { Menu_R_Videojuego } from '../menu/menus/Menu_R_Videojuego';
import { Menu_U_Videojuego } from '../menu/menus/Menu_U_Videojuego';
import { Menu_D_Videojuego } from '../menu/menus/Menu_D_Videojuego';
import { Menu_C_Recompensa } from '../menu/menus/Menu_C_Recompensa';
import { Menu_R_Recompensa } from '../menu/menus/Menu_R_Recompensa';
import { Menu_U_Recompensa } from '../menu/menus/Menu_U_Recompensa';
import { Menu_D_Recompensa } from '../menu/menus/Menu_D_Recompensa';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenu(): iMenu{
    /// Definicion de los distintos objetos Menu ///

    // DLC
    const menu_c_dlc = new Menu_C_DLC;
    const menu_r_dlc = new Menu_R_DLC;
    const menu_cr_dlc = new MenuGenerico("CR DLC", [menu_c_dlc,
                                                    menu_r_dlc]);

    // Jugador
    const menu_c_jugador = new Menu_C_Jugador;
    const menu_r_jugador = new Menu_R_Jugador;
    const menu_cr_jugador = new MenuGenerico ("CR Jugador", [menu_c_jugador,
                                                             menu_r_jugador]);

    // Videojuego
    const menu_c_videojuego = new Menu_C_Videojuego;
    const menu_r_videojuego = new Menu_R_Videojuego;
    const menu_u_videojuego = new Menu_U_Videojuego;
    const menu_d_videojuego = new Menu_D_Videojuego;
    const menu_crud_videojuego = new MenuGenerico ("CRUD Videojuego", [menu_c_videojuego,
                                                                       menu_r_videojuego,
                                                                       menu_u_videojuego,
                                                                       menu_d_videojuego]);

    // Recompensa
    const menu_c_recompensa = new Menu_C_Recompensa;
    const menu_r_recompensa = new Menu_R_Recompensa;
    const menu_u_recompensa = new Menu_U_Recompensa;
    const menu_d_recompensa = new Menu_D_Recompensa;
    const menu_crud_recompensa = new MenuGenerico ("CRUD Recompensa", [menu_c_recompensa,
                                                                       menu_r_recompensa,
                                                                       menu_u_recompensa,
                                                                       menu_d_recompensa]);

    // Menu Principal
    const menuPrincipal = new MenuGenerico ("Menu Principal", [menu_cr_jugador,
                                                               menu_crud_videojuego,
                                                               menu_crud_recompensa,
                                                               menu_cr_dlc]);

    return menuPrincipal;
  }
}

