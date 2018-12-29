import { Component } from '@angular/core';
import { MenuEspecificoComponent } from "../menu-especifico/menu-especifico.component";

@Component({
  selector: 'app-r-dlc',
  templateUrl: './r-dlc.component.html',
  styleUrls: ['./r-dlc.component.scss']
})

export class RDLCComponent extends MenuEspecificoComponent {
  constructor() {
    super();
    this.name = "Consultar datos de un DLC";
    this.route = "rDLC";
  }

  action() {
      // Usar command (?)
  }
}
