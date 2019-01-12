import { Component, OnInit } from '@angular/core';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-r-jugador-form',
  templateUrl: './r-jugador-form.component.html',
  styleUrls: ['./r-jugador-form.component.scss']
})
export class RJugadorFormComponent implements OnInit {
  
  menu: iMenu;

  jugadores = [
    {
      nombre: 'pepe',
      apellidos: 'flautas',
      nickname: '123user',
      email: 'el_mejor@email.ru',
      fechaNacimiento: Date
    },
    {
      nombre: 'jose',
      apellidos: 'pacheco',
      nickname: 'coolGuy_84',
      email: 'el_peor@email.jp',
      fechaNacimiento: Date
    },
    {
      nombre: 'anonimo',
      apellidos: 'gonzalez',
      nickname: 'mario_Jump',
      email: 'yahoo@email.org',
      fechaNacimiento: Date
    }
  ];

  data = {nombre: '', apellidos: '', nickname: '', email: '', fechaNacimiento: Date};

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;
  }
}
