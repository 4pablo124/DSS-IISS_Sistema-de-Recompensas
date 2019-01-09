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
    let menu_r_dlc = new MenuEspecifico("Leer DLC", "/rDLC", new Command_R_DLC());

    let menu_cr_dlc = new MenuGenerico("CR DLC", "/crDLC", [menu_c_dlc, menu_r_dlc]);

    //VIDEOJUEGO
    let menu_c_videojuego = new MenuEspecifico("Añadir nuevo videojuego", "/cVideojuego", new Command_Crear(new Factory_Videojuego));

    // MENU PRINCIPAL
    let menuPrincipal = new MenuGenerico("Menu Principal","/menu",[
      menu_cr_dlc
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

