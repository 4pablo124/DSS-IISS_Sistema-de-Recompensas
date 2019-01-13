import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { DlcService } from 'src/app/services/BD/dlc.service';
import { VideojuegoService } from 'src/app/services/BD/videojuego.service';

@Component({
  selector: 'app-r-dlc-form',
  templateUrl: './r-dlc-form.component.html',
  styleUrls: ['./r-dlc-form.component.scss']
})
export class RDlcFormComponent implements OnInit {

  constructor(private menuService: MenuService,
              private bd: DlcService,
              private bdV: VideojuegoService,
  ) { }

  menu: iMenu;

  dlcs: any[];
  videojuegos: any[];

  data = {_id: '', titulo: '', descripcion: '', videojuego: ''};

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;
    
    //Aqui estamos añadiendo al formulario una responsabilidad que no deberia de tener.
    this.bd.findAll().subscribe(dlcs => this.dlcs = dlcs);
    this.bdV.findAll().subscribe(res => this.videojuegos = res);
    //Para cumplir el patron command, esto deberia hacerse como
    //this.menuR.action()
    //el cual delegaría a un command_R que se encargaría de obtener un array de la BD
  }

}
