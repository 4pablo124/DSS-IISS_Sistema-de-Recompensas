import { Component, OnInit } from '@angular/core';
import { RecompensaService } from 'src/app/services/BD/recompensa.service';
import { MenuService } from 'src/app/services/menu.service';
import { VideojuegoService } from 'src/app/services/BD/videojuego.service';
import { MatSnackBar } from '@angular/material';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notif-recompensa-form',
  templateUrl: './notif-recompensa-form.component.html',
  styleUrls: ['./notif-recompensa-form.component.scss']
})
export class NotifRecompensaFormComponent implements OnInit {

  data = {jugador: '', videojuego: ''}

  menu: iMenu;

  recompensas: any[];
  videojuegos: any[];

  constructor(private menuService: MenuService,
              private bdR: RecompensaService,
              private bdV: VideojuegoService,
             // private bdN: RecompensaVideojuegoService,
              public snackBar: MatSnackBar,
              private router: Router
  ) {}

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;

    //Aqui estamos añadiendo al formulario una responsabilidad que no deberia de tener.
    this.bdR.findAll().subscribe(res => this.recompensas = res);
    this.bdV.findAll().subscribe(res => this.videojuegos = res);
    //Para cumplir el patron command, esto deberia hacerse como
    //this.menuR.action()
    //el cual delegaría a un command_R que se encargaría de obtener un array de la BD
  }

  onSubmit(){
   // this.menu.action(this.data,this.bdN);
    this.router.navigate(['/menu']);
    this.snackBar.open('Jugador notificado correctamente :)', '', { duration: 2000, });
  }
}
