import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { iMenu } from 'src/app/clases/Menus/iMenu';

@Component({
  selector: 'app-c-dlc-form',
  templateUrl: './c-dlc-form.component.html',
  styleUrls: ['./c-dlc-form.component.scss']
})
export class CDlcFormComponent implements OnInit {

  dlc = {titulo: ' ', descripcion: ' ', videojuego: ' '};

  menu: iMenu;

  constructor(private menuService: MenuService) { }

  ngOnInit() {     
    this.menu = this.menuService.getSelectedMenu();
    console.log(this.menu);
  }

  onSubmit(){
    this.menu.action(this.dlc);
  }

}
