import { Component, OnInit } from '@angular/core';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { MenuService } from 'src/app/services/menu.service';
import { JugadorService } from 'src/app/services/BD/jugador.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-c-jugador-form',
  templateUrl: './c-jugador-form.component.html',
  styleUrls: ['./c-jugador-form.component.scss']
})
export class CJugadorFormComponent implements OnInit {

  data = {nombre: '', apellidos: '', nickname: '', email: '', fechaNacimiento: ''}

  menu: iMenu;

  constructor(private menuService: MenuService,
              private bd: JugadorService,
              public snackBar: MatSnackBar  
  ){}

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;
  }

  onSubmit(){
    this.menu.action(this.data, this.bd);
    this.snackBar.open('Jugador creado correctamente :)', '', { duration: 2000, });
  }
}
