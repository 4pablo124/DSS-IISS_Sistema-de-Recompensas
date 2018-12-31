import { Component } from '@angular/core';
import { MenuEspecificoComponent } from "../menu-especifico/menu-especifico.component";
import { sGenero, sDispositivo } from '../../../clases/enumerados'

@Component({
  selector: 'app-c-videojuego',
  templateUrl: './c-videojuego.component.html',
  styleUrls: ['./c-videojuego.component.scss']
})

export class CVideojuegoComponent extends MenuEspecificoComponent {
  generos = sGenero;
  dispositivos = sDispositivo;
  constructor() {
    super();
    this.name = "Añadir nuevo Videojuego";
    this.route = "cVideojuego";
  }
  

  action() {
      // Usar command (?)
  }
}
