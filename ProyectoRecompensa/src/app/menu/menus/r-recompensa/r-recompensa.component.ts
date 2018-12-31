import { Component } from '@angular/core';
import { MenuEspecificoComponent } from "../menu-especifico/menu-especifico.component";

@Component({
  selector: 'app-r-recompensa',
  templateUrl: './r-recompensa.component.html',
  styleUrls: ['./r-recompensa.component.scss']
})
export class RRecompensaComponent extends MenuEspecificoComponent {
  constructor() {
    super();
    this.name = "Consultar datos de una Recompensa";
    this.route = "rRecompensa";
  }

  action() {
      // Usar command (?)
  }
}
