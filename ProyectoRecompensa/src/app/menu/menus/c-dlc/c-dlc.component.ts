import { Component } from '@angular/core';
import { MenuEspecificoComponent } from "../menu-especifico/menu-especifico.component";


@Component({
  selector: 'app-c-dlc',
  templateUrl: './c-dlc.component.html',
  styleUrls: ['./c-dlc.component.scss']
})

export class CDLCComponent extends MenuEspecificoComponent {
  dlc = {titulo: '', descripcion: '', videojuego: ''};
  constructor() {
    super();
    this.name = "Añadir nuevo DLC";
    this.route = "cDLC";
  }

  action() {
      
  }

  onSubmit(){

  }
} 
