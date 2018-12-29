import { Component } from '@angular/core';
import { MenuEspecificoComponent } from "../menu-especifico/menu-especifico.component";

@Component({
  selector: 'app-c-recompensa',
  templateUrl: './c-recompensa.component.html',
  styleUrls: ['./c-recompensa.component.scss']
})

export class CRecompensaComponent extends MenuEspecificoComponent {
  constructor() {
    super();
    this.name = "Añadir nuevo Recompensa";
    this.route = "cRecompensa";
  }

  action() {
      // Usar command (?)
  }
}
