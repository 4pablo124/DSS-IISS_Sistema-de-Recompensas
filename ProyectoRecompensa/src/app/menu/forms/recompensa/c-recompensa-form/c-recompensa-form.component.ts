import { Component, OnInit } from '@angular/core';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { MenuService } from 'src/app/services/menu.service';
import { sDificultad } from "src/app/clases/Elementos/enumerados";
import { RecompensaService } from 'src/app/services/BD/recompensa.service';
import { VideojuegoService } from 'src/app/services/BD/videojuego.service';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-c-recompensa-form',
  templateUrl: './c-recompensa-form.component.html',
  styleUrls: ['./c-recompensa-form.component.scss']
})
export class CRecompensaFormComponent implements OnInit {

  dificultades = sDificultad;

  data = {titulo: '', descripcion: '', dificultad: '', videojuego: ''}

  menu: iMenu;

  videojuegos: any[];

  constructor(private menuService: MenuService,
              private bd: RecompensaService,
              private bdV: VideojuegoService,
              public snackBar: MatSnackBar  
  ) {}

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;
    //Aqui estamos añadiendo al formulario una responsabilidad que no deberia de tener.
    this.bdV.findAll().subscribe(res => this.videojuegos = res);
    //Para cumplir el patron command, esto deberia hacerse como
    //this.menuR.action()
    //el cual delegaría a un command_R que se encargaría de obtener un array de la BD
  }

  onSubmit(){
    this.menu.action(this.data,this.bd);
    this.snackBar.open('Recompensa creada correctamente :)', '', { duration: 2000, });
  }
}
