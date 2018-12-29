import { Component } from '@angular/core';
import { MenuEspecificoComponent } from "../menu-especifico/menu-especifico.component";


@Component({
  selector: 'app-d-recompensa',
  templateUrl: './d-recompensa.component.html',
  styleUrls: ['./d-recompensa.component.scss']
})

export class DRecompensaComponent extends MenuEspecificoComponent {
  constructor() {
    super();
    this.name = "Eliminar Recompensa";
    this.route = "dRecompensa";
  }

  action() {
      // Usar command (?)
  }
}
