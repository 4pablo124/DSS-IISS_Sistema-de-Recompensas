import { Component } from '@angular/core';
import { MenuEspecificoComponent } from "../menu-especifico/menu-especifico.component";

@Component({
  selector: 'app-u-videojuego',
  templateUrl: './u-videojuego.component.html',
  styleUrls: ['./u-videojuego.component.scss']
})
export class UVideojuegoComponent extends MenuEspecificoComponent {
  constructor() {
    super();
    this.name = "Editar datos de un Videojuego";
    this.route = "uRecompensa";
  }

  action() {
      // Usar command (?)
  }
}
