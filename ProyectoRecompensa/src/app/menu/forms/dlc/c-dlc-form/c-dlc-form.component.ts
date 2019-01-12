import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { iMenu } from 'src/app/clases/Menus/iMenu';
import { DlcService } from 'src/app/services/BD/dlc.service';

@Component({
  selector: 'app-c-dlc-form',
  templateUrl: './c-dlc-form.component.html',
  styleUrls: ['./c-dlc-form.component.scss']
})
export class CDlcFormComponent implements OnInit {

  data = {titulo: '', descripcion: '', videojuego: ''};

  menu: iMenu;

  constructor(private menuService: MenuService,
              private bd: DlcService  
  ) { }

  ngOnInit() {     
    this.menu = this.menuService.selectedMenu;
  }

  onSubmit(){
    this.menu.action(this.data,this.bd);
  }

}