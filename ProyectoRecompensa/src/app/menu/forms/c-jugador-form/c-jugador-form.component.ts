import { Component, OnInit } from '@angular/core';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { MenuService } from 'src/app/services/menu.service';
import { AddJugadorService } from 'src/app/services/add-jugador.service';

@Component({
  selector: 'app-c-jugador-form',
  templateUrl: './c-jugador-form.component.html',
  styleUrls: ['./c-jugador-form.component.scss']
})
export class CJugadorFormComponent implements OnInit {

  data = {nombre: '', apellidos: '', nickname: '', email: '', fNacimiento: ''}

  menu: iMenu;

  constructor(private menuService: MenuService,
              private addJugadorService: AddJugadorService
  ){}

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;
  }

  onSubmit(){
    let jugador = this.menu.action(this.data);
    this.addJugadorService.addJugador(jugador);
  }
}
