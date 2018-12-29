import { Component } from '@angular/core';
import { MenuEspecificoComponent } from "../menu-especifico/menu-especifico.component";

@Component({
  selector: 'app-c-videojuego',
  templateUrl: './c-videojuego.component.html',
  styleUrls: ['./c-videojuego.component.scss']
})

export class CVideojuegoComponent extends MenuEspecificoComponent {
  constructor() {
    super();
    this.name = "Añadir nuevo Videojuego";
    this.route = "cVideojuego";
  }

  action() {
      // Usar command (?)
  }
}
