import { Component } from '@angular/core';
import { MenuEspecificoComponent } from "../menu-especifico/menu-especifico.component";

@Component({
  selector: 'app-u-recompensa',
  templateUrl: './u-recompensa.component.html',
  styleUrls: ['./u-recompensa.component.scss']
})
export class URecompensaComponent extends MenuEspecificoComponent {

  constructor() {
    super();
    this.name = "Editar datos de un Recompensa";
    this.route = "uRecompensa";
  }

  action() {
      // Usar command (?)
  }
}
