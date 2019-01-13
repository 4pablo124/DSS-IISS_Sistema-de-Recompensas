import { Component, OnInit } from '@angular/core';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { MenuService } from 'src/app/services/menu.service';
import { VideojuegoService } from 'src/app/services/BD/videojuego.service';
import { JugadorVideojuegoService } from 'src/app/services/BD/jugador-videojuego.service';

@Component({
  selector: 'app-jugadores-por-videojuego',
  templateUrl: './jugadores-por-videojuego.component.html',
  styleUrls: ['./jugadores-por-videojuego.component.scss']
})
export class JugadoresPorVideojuegoComponent implements OnInit {

  menu: iMenu;

  jugadores: any[] = [];
  videojuegos: any[];
  selectedVideojuego: string;

  constructor(private menuService: MenuService,
              private bdJV: JugadorVideojuegoService,
              private bdV: VideojuegoService
  ) {}

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;

    //Aqui estamos añadiendo al formulario una responsabilidad que no deberia de tener.
    this.bdV.findAll().subscribe(res => this.videojuegos = res);
    //Para cumplir el patron command, esto deberia hacerse como
    //this.menuR.action()
    //el cual delegaría a un command_R que se encargaría de obtener un array de la BD
  }

  showJugadores(){
    console.log(this.selectedVideojuego);
    
    this.bdJV.find(this.selectedVideojuego).subscribe(res => this.jugadores = res);
    console.log(this.jugadores);
    
  }
}
