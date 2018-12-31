import { Component } from '@angular/core';
import { MenuEspecificoComponent } from "../menu-especifico/menu-especifico.component";
import { sDificultad } from '../../../clases/enumerados';

@Component({
  selector: 'app-c-recompensa',
  templateUrl: './c-recompensa.component.html',
  styleUrls: ['./c-recompensa.component.scss']
})

export class CRecompensaComponent extends MenuEspecificoComponent {
  dificultades = sDificultad;
  constructor() {
    super();
    this.name = "Añadir nueva Recompensa";
    this.route = "cRecompensa";
  }

  action() {
      // Usar command (?)
  }
}
