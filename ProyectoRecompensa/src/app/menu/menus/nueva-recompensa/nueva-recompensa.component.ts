import { Component, OnInit } from '@angular/core';
import { MenuEspecificoComponent } from "../menu-especifico/menu-especifico.component";

@Component({
  selector: 'app-nueva-recompensa',
  templateUrl: './nueva-recompensa.component.html',
  styleUrls: ['./nueva-recompensa.component.scss']
})
export class NuevaRecompensaComponent extends MenuEspecificoComponent {

  constructor() 
  { 
    super();
    this.name = "Seleccionar nueva recompensa";
    this.route = "nuevaRecompensa";
  }

  action() 
  {
    //Command
  }

}
