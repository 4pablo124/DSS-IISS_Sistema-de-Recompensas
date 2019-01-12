import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { iMenu } from 'src/app/clases/Menus/iMenu';

@Component({
  selector: 'app-r-dlc-form',
  templateUrl: './r-dlc-form.component.html',
  styleUrls: ['./r-dlc-form.component.scss']
})
export class RDlcFormComponent implements OnInit {

  menu: iMenu;

  dlcs = [
    {
      titulo: 'pack de mapas 1',
      descripcion: 'ta un monton de chulo',
      videojuego: 'bioimpacto'
    },
    {
      titulo: 'pack de mapas 2',
      descripcion: 'es puta mierda',
      videojuego: 'campo de batalla'
    },
    {
      titulo: 'pack de mapas 3',
      descripcion: 'ta oc',
      videojuego: 'llamada del deber: operacion negra'
    }
  ];

  data = {titulo: '', descripcion: '', videojuego: ''};

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;
  }

}
