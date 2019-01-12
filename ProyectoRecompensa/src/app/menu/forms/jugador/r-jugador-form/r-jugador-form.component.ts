import { Component, OnInit } from '@angular/core';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { MenuService } from 'src/app/services/menu.service';
import { JugadorService } from 'src/app/services/BD/jugador.service';

@Component({
  selector: 'app-r-jugador-form',
  templateUrl: './r-jugador-form.component.html',
  styleUrls: ['./r-jugador-form.component.scss']
})
export class RJugadorFormComponent implements OnInit {
  
  constructor(private menuService: MenuService, private bd: JugadorService) { }

  menu: iMenu;

  jugadores: any[];

  data = {_id: '', nombre: '', apellidos: '', nickname: '', email: '', fechaNacimiento: Date};


  ngOnInit() {
    this.menu = this.menuService.selectedMenu;
    this.bd.findAll().subscribe(jugadores => this.jugadores = jugadores);
  }
}
