import { Component } from '@angular/core';
import { MenuEspecificoComponent } from "../menu-especifico/menu-especifico.component";

@Component({
  selector: 'app-r-videojuego',
  templateUrl: './r-videojuego.component.html',
  styleUrls: ['./r-videojuego.component.scss']
})
export class RVideojuegoComponent extends MenuEspecificoComponent {
  constructor() {
    super();
    this.name = "Consultar datos de un Videojuego";
    this.route = "rVideojuego";
  }

  action() {
      // Usar command (?)
  }
}
