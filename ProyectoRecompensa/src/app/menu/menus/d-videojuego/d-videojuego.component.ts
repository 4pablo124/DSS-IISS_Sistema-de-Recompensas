import { Component } from '@angular/core';
import { MenuEspecificoComponent } from "../menu-especifico/menu-especifico.component";

@Component({
  selector: 'app-d-videojuego',
  templateUrl: './d-videojuego.component.html',
  styleUrls: ['./d-videojuego.component.scss']
})

export class DVideojuegoComponent extends MenuEspecificoComponent {
  constructor() {
    super();
    this.name = "Eliminar Videojuego";
    this.route = "dVideojuego";
  }

  action() {
      // Usar command (?)
  }
}
