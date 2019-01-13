import { Component, OnInit } from '@angular/core';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { MenuService } from 'src/app/services/menu.service';
import { sDispositivo } from "src/app/clases/Elementos/enumerados";
import { sGenero } from "src/app/clases/Elementos/enumerados";
import { VideojuegoService } from 'src/app/services/BD/videojuego.service';
import { MatSnackBar } from '@angular/material';




@Component({
  selector: 'app-c-videojuego-form',
  templateUrl: './c-videojuego-form.component.html',
  styleUrls: ['./c-videojuego-form.component.scss']
})
export class CVideojuegoFormComponent implements OnInit {

  dispositivos = sDispositivo;
  generos = sGenero;

  data = {titulo: '', descripcion: '', genero: '', dispositivo: ''};

  menu: iMenu;

  constructor(private menuService: MenuService,
              private bd: VideojuegoService,
              public snackBar: MatSnackBar  
  ) { }

  ngOnInit() {     
    this.menu = this.menuService.selectedMenu;
  }

  onSubmit(){
    this.menu.action(this.data, this.bd);
    this.snackBar.open('Videojuego creado correctamente :)', '', { duration: 2000, });
  }
}
