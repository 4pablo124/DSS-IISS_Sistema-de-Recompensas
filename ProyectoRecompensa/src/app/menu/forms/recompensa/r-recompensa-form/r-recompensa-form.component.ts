import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import {FormControl} from '@angular/forms';
import { sDificultad } from 'src/app/clases/Elementos/enumerados';
import { RecompensaService } from 'src/app/services/BD/recompensa.service';

@Component({
  selector: 'app-r-recompensa-form',
  templateUrl: './r-recompensa-form.component.html',
  styleUrls: ['./r-recompensa-form.component.scss']
})
export class RRecompensaFormComponent implements OnInit {
  
  constructor(private menuService: MenuService,
              private bd: RecompensaService
  ){}

  menu: iMenu;

  modificable = new FormControl(false);

  dificultades = sDificultad;

  recompensas: any[];

  data = {_id: '', titulo: '', descripcion: '', dificultad: '', videojuego: ''}


  ngOnInit() {
    this.menu = this.menuService.selectedMenu;
    this.bd.findAll().subscribe(recompensas => this.recompensas = recompensas);
  }
}
