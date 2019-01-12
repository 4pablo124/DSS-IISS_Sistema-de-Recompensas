import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import {FormControl} from '@angular/forms';
import { sDificultad } from 'src/app/clases/Elementos/enumerados';

@Component({
  selector: 'app-r-recompensa-form',
  templateUrl: './r-recompensa-form.component.html',
  styleUrls: ['./r-recompensa-form.component.scss']
})
export class RRecompensaFormComponent implements OnInit {
  
  menu: iMenu;

  modificable = new FormControl(false);

  dificultades = sDificultad;

  recompensas = [
    {
      titulo: 'pepe',
      descripcion: 'flautas',
      dificultad: 'Facil',
      videojuego: 'efsff'
    },
    {
      titulo: 'jose',
      descripcion: 'pacheco',
      dificultad: 'Medio',
      videojuego: 'efsff'
    },
    {
      titulo: 'anonimo',
      descripcion: 'gonzalez',
      dificultad: 'Dificil',
      videojuego: 'efsff'
    }
  ];

  data = {titulo: '', descripcion: '', dificultad: '', videojuego: ''}

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;
  }
}
