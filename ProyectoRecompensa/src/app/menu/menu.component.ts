import { Component, OnInit} from '@angular/core';
import { iMenu } from "../clases/Menus/iMenu";
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: iMenu;

  constructor(private menuService: MenuService) {}

  selectMenu(selectMenu: iMenu){
    this.menuService.selectedMenu = selectMenu;
  }

  ngOnInit() {
    this.menu = this.menuService.menuPrincipal;
  }
}