import { Component } from '@angular/core';
import { MenuEspecificoComponent } from "../menu-especifico/menu-especifico.component";

@Component({
  selector: 'app-nuevo-juego',
  templateUrl: './nuevo-juego.component.html',
  styleUrls: ['./nuevo-juego.component.scss']
})
export class NuevoJuegoComponent extends MenuEspecificoComponent{

  constructor() 
  { 
    super();
    this.name = "Notificar nuevo jugador de un videojuego";
    this.route = "/nuevoJuego";
  }

  action() 
  {
    //Command
  }

}