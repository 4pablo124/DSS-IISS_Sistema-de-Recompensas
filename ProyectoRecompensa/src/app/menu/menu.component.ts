import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{
  menu: MenuHandler = Menu_Principal; // Dependencia con Menu_Principal, mas tarde se inyectará (services o algo asi)
}

/// De momento esta todo en este fichero, ya veremos como lo organizamos ///

// Interfaz con la que trabaja el cliente (menu.component.html)
export interface MenuHandler {
  name: string;
  options: MenuHandler[];
  action();
}

// Declaracion del tipo menu
export class Menu implements MenuHandler{
  name: string;
  options: MenuHandler[];

  constructor(name: string, options: MenuHandler[] = []) {
    this.name = name;
    this.options = options;
  }

  action() {} // No usa action (mejorable?)
}

// El resto de los menus heredan de Menu (los diferenciamos para sobreescribir action())
// No usan options[] (mejorable?)

export class Menu_C extends Menu{
  constructor(name: string){
    super(name);
  }

  action() {
    // llamar a funcion para crear elemento
  }
}

export class Menu_R extends Menu{
  constructor(name: string){
    super(name);
  }

  action() {
    // llamar a funcion para leer elemento
  }
}

export class Menu_U extends Menu{
  constructor(name: string){
    super(name);
  }

  action() {
    // llamar a funcion para editar elemento
  }
}

export class Menu_D extends Menu{
  constructor(name: string){
    super(name);
  }

  action() {
    // llamar a funcion para borrar elemento
  }
}

/// Definicion de los distintos objetos Menu ///

// De momento los objetos se crean aqui, pero habra que buscarle sitio

// DLC
export const Menu_C_DLC = new Menu_C("Añadir nuevo DLC");
export const Menu_R_DLC = new Menu_R ("Consultar datos de un DLC");
export const Menu_CR_DLC = new Menu ("CR DLC", [Menu_C_DLC, Menu_R_DLC]);

// Jugador
export const Menu_C_Jugador = new Menu_C ("Añadir nuevo Jugador");
export const Menu_R_Jugador = new Menu_R ("Consultar datos de un Jugador");
export const Menu_CR_Jugador = new Menu ("CR Jugador", [Menu_C_Jugador, Menu_R_Jugador]);

// Videojuego
export const Menu_C_Videojuego = new Menu_C ("Añadir nuevo Videojuego");
export const Menu_R_Videojuego = new Menu_R ("Consultar datos de un Videojuego");
export const Menu_U_Videojuego = new Menu_U ("Editar datos de un Videojuego");
export const Menu_D_Videojuego = new Menu_D ("Eliminar Videojuego");
export const Menu_CRUD_Videojuego = new Menu ("CRUD Videojuego", [Menu_C_Videojuego, Menu_R_Videojuego, Menu_U_Videojuego, Menu_D_Videojuego]);

// Recompensa
export const Menu_C_Recompensa = new Menu_C ("Añadir nueva Recompensa");
export const Menu_R_Recompensa = new Menu_R ("Consultar datos de una Recompensa");
export const Menu_U_Recompensa = new Menu_U ("Editar datos de una Recompensa",);
export const Menu_D_Recompensa = new Menu_D ("Eliminar Recompensa");
export const Menu_CRUD_Recompensa = new Menu ("CRUD Recompensa", [Menu_C_Recompensa, Menu_R_Recompensa, Menu_U_Recompensa, Menu_D_Recompensa]);

// Menu Principal
export const Menu_Principal = new Menu ("Menu Principal", [Menu_CR_Jugador, Menu_CRUD_Videojuego, Menu_CRUD_Recompensa, Menu_CR_DLC]);



// Si se añanden elementos (DLC, Jugador, ...) al sistema basta con crear sus respectivos objetos (CRUD) y "engancharlo" de su menu padre
// Si se añaden nuevas funcionalidades (Crear, leer, ...) al sistema basta con crear la clase, implementar action() y crear sus respetivos objetos
// De esta manera estamos respetando el OCP