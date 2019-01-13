import { Component, OnInit } from '@angular/core';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { MenuService } from 'src/app/services/menu.service';
import { JugadorService } from 'src/app/services/BD/jugador.service';
import { VideojuegoService } from 'src/app/services/BD/videojuego.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notif-jugador-form',
  templateUrl: './notif-jugador-form.component.html',
  styleUrls: ['./notif-jugador-form.component.scss']
})
export class NotifJugadorFormComponent implements OnInit {

  data = {jugador: '', videojuego: ''}

  menu: iMenu;

  jugadores: any[];
  videojuegos: any[];

  constructor(private menuService: MenuService,
              private bdJ: JugadorService,
              private bdV: VideojuegoService,
              private bdN: JugadorVideojuegoService,
              public snackBar: MatSnackBar,
              private router: Router 
  ) {}

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;

    //Aqui estamos añadiendo al formulario una responsabilidad que no deberia de tener.
    this.bdJ.findAll().subscribe(res => this.jugadores = res);
    this.bdV.findAll().subscribe(res => this.videojuegos = res);
    //Para cumplir el patron command, esto deberia hacerse como
    //this.menuR.action()
    //el cual delegaría a un command_R que se encargaría de obtener un array de la BD
  }

  onSubmit(){
    this.menu.action(this.data,this.bdN);
    this.router.navigate(['/menu']);
    this.snackBar.open('Jugador notificado correctamente :)', '', { duration: 2000, });
  }
}
