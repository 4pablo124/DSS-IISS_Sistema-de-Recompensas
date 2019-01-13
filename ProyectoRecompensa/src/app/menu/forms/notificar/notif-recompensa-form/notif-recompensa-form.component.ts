import { Component, OnInit } from '@angular/core';
import { RecompensaService } from 'src/app/services/BD/recompensa.service';
import { MenuService } from 'src/app/services/menu.service';
import { MatSnackBar } from '@angular/material';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { Router } from '@angular/router';
import { JugadorRecompensaService } from 'src/app/services/BD/jugador-recompensa.service';
import { JugadorService } from 'src/app/services/BD/jugador.service';

@Component({
  selector: 'app-notif-recompensa-form',
  templateUrl: './notif-recompensa-form.component.html',
  styleUrls: ['./notif-recompensa-form.component.scss']
})
export class NotifRecompensaFormComponent implements OnInit {

  data = {jugador: '', recompensa: ''}

  menu: iMenu;

  jugadores: any[];
  recompensas: any[];

  constructor(private menuService: MenuService,
              private bdR: RecompensaService,
              private bdJ: JugadorService,
              private bdN: JugadorRecompensaService,
              public snackBar: MatSnackBar,
              private router: Router
  ) {}

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;

    //Aqui estamos añadiendo al formulario una responsabilidad que no deberia de tener.
    this.bdJ.findAll().subscribe(res => this.jugadores = res);
    this.bdR.findAll().subscribe(res => this.recompensas = res);
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
