import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { DlcService } from 'src/app/services/BD/dlc.service';

@Component({
  selector: 'app-r-dlc-form',
  templateUrl: './r-dlc-form.component.html',
  styleUrls: ['./r-dlc-form.component.scss']
})
export class RDlcFormComponent implements OnInit {

  constructor(private menuService: MenuService, private bd: DlcService) { }

  menu: iMenu;

  dlcs: any[];

  data = {_id: '', titulo: '', descripcion: '', videojuego: ''};

  

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;
    this.bd.findAll().subscribe(dlcs => this.dlcs = dlcs);
  }

}
