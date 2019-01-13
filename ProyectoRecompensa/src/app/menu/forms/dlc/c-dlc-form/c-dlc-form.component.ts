import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { DlcService } from 'src/app/services/BD/dlc.service';
import { VideojuegoService } from 'src/app/services/BD/videojuego.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-c-dlc-form',
  templateUrl: './c-dlc-form.component.html',
  styleUrls: ['./c-dlc-form.component.scss']
})
export class CDlcFormComponent implements OnInit {

  data = {titulo: '', descripcion: '', videojuego: ''};

  menu: iMenu;

  videojuegos: any[];

  constructor(private menuService: MenuService,
              private bd: DlcService,
              private bdV: VideojuegoService,
              public snackBar: MatSnackBar 
  ) { }

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
    this.snackBar.open('DLC creado correctamente :)', '', { duration: 2000, });
  }

}
