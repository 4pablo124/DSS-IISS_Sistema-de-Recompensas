import { Component } from '@angular/core';
import { MenuEspecificoComponent } from "../menu-especifico/menu-especifico.component";

@Component({
  selector: 'app-r-jugador',
  templateUrl: './r-jugador.component.html',
  styleUrls: ['./r-jugador.component.scss']
})
export class RJugadorComponent extends MenuEspecificoComponent {
  constructor() {
    super();
    this.name = "Consultar datos de un Jugador";
    this.route = "rJugador";
  }

  action() {
      // Usar command (?)
  }
}
