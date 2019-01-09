import { Component, OnInit } from '@angular/core';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-c-jugador-form',
  templateUrl: './c-jugador-form.component.html',
  styleUrls: ['./c-jugador-form.component.scss']
})
export class CJugadorFormComponent implements OnInit {

  data = {nombre: '', apellidos: '', nickname: '', email: '', fNacimiento: ''}

  menu: iMenu;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;
  }

  onSubmit(){
    this.menu.action(this.data);
  }
}
