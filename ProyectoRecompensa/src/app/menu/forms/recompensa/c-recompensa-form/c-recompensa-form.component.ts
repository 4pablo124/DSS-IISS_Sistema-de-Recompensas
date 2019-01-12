import { Component, OnInit } from '@angular/core';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { MenuService } from 'src/app/services/menu.service';
import { sDificultad } from "src/app/clases/Elementos/enumerados";
import { RecompensaService } from 'src/app/services/BD/recompensa.service';


@Component({
  selector: 'app-c-recompensa-form',
  templateUrl: './c-recompensa-form.component.html',
  styleUrls: ['./c-recompensa-form.component.scss']
})
export class CRecompensaFormComponent implements OnInit {

  dificultades = sDificultad;

  data = {titulo: '', descripcion: '', dificultad: '', videojuego: ''}

  menu: iMenu;

  constructor(private menuService: MenuService,
              private bd: RecompensaService 
  ) {}

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;
  }

  onSubmit(){
    this.menu.action(this.data,this.bd);
  }
}
