import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { sDispositivo, sGenero } from 'src/app/clases/Elementos/enumerados';
import { FormControl} from '@angular/forms';
import { VideojuegoService } from 'src/app/services/BD/videojuego.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';



@Component({
  selector: 'app-rud-videojuego-form',
  templateUrl: './rud-videojuego-form.component.html',
  styleUrls: ['./rud-videojuego-form.component.scss']
})
export class RUDVideojuegoFormComponent implements OnInit {

  constructor(private menuService: MenuService, 
              private bd: VideojuegoService,
              public snackBar: MatSnackBar,
              private router: Router  
  ) { }

  menu: iMenu;

  menuR: iMenu;
  menuU: iMenu;
  menuD: iMenu;

  modificable = new FormControl(false);

  dispositivos = sDispositivo;
  generos = sGenero;

  videojuegos: any[];

  data = {titulo: '', descripcion: '', genero: '', dispositivo: ''};

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;
    this.menuR = this.menu.options[0];  
    this.menuU = this.menu.options[1];
    this.menuD = this.menu.options[2];  

    //Aqui estamos añadiendo al formulario una responsabilidad que no deberia de tener.
    this.bd.findAll().subscribe(res => this.videojuegos = res); 
    //Para cumplir el patron command, esto deberia hacerse como
    //this.menuR.action()
    //el cual delegaría a un command_R que se encargaría de obtener un array de la BD
  }

  borrar(){
    this.menuD.action(this.data,this.bd);
    this.router.navigate(['/menu']);
    this.snackBar.open('Videojuego borrado correctamente :)', '', { duration: 2000, });
  }

  onSubmit(){
    this.menuU.action(this.data, this.bd);
    this.router.navigate(['/menu']);
    this.snackBar.open('Videojuego actualizado correctamente :)', '', { duration: 2000, });
  }
}
