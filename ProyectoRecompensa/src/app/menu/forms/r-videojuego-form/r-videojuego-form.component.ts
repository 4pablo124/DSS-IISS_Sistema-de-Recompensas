import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { sDispositivo, sGenero } from 'src/app/clases/Elementos/enumerados';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-r-videojuego-form',
  templateUrl: './r-videojuego-form.component.html',
  styleUrls: ['./r-videojuego-form.component.scss']
})
export class RVideojuegoFormComponent implements OnInit {
  
  menu: iMenu;

  modificable = new FormControl(false);

  dispositivos = sDispositivo;
  generos = sGenero;

  videojuegos = [
    {
      titulo: 'pepe',
      descripcion: 'flautas',
      genero: 'Accion',
      dispositivo: 'PS4'
    },
    {
      titulo: 'jose',
      descripcion: 'pacheco',
      genero: 'Accion',
      dispositivo: 'PS3'
    },
    {
      titulo: 'anonimo',
      descripcion: 'gonzalez',
      genero: 'Accion',
      dispositivo: 'PS3'
    }
  ];

  data = {titulo: '', descripcion: '', genero: '', dispositivo: ''};

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;
  }
}
