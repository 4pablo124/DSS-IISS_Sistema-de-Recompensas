import { Component } from '@angular/core';
import { MenuEspecificoComponent } from "../menu-especifico/menu-especifico.component";

@Component({
  selector: 'app-c-jugador',
  templateUrl: './c-jugador.component.html',
  styleUrls: ['./c-jugador.component.scss']
})
export class CJugadorComponent extends MenuEspecificoComponent {
  jugador = {nombre:'', apelllidos:'', nickname:'', email:'', fNacimiento:'' };

  constructor() {
    super();
    this.name = "Añadir nuevo Jugador";
    this.route = "cJugador";
  }

  action() {
      this.command.execute(this.jugador);
  }
}
