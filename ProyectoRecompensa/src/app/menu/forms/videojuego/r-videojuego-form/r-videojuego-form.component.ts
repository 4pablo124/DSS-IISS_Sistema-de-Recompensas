import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { sDispositivo, sGenero } from 'src/app/clases/Elementos/enumerados';
import {FormControl} from '@angular/forms';
import { VideojuegoService } from 'src/app/services/BD/videojuego.service';


@Component({
  selector: 'app-r-videojuego-form',
  templateUrl: './r-videojuego-form.component.html',
  styleUrls: ['./r-videojuego-form.component.scss']
})
export class RVideojuegoFormComponent implements OnInit {

  constructor(private menuService: MenuService, private bd: VideojuegoService) { }

  menu: iMenu;

  modificable = new FormControl(false);

  dispositivos = sDispositivo;
  generos = sGenero;

  videojuegos: any[];

  data = {_id: '', titulo: '', descripcion: '', genero: '', dispositivo: ''};

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;
    this.bd.findAll().subscribe(videojuegos => this.videojuegos = videojuegos);
  }
}
