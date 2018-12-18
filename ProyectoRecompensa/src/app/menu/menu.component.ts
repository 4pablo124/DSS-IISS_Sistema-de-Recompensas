import { Component, OnInit} from '@angular/core';
import { iMenu } from "./menus/iMenu";
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: iMenu;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menu = this.menuService.getMenu();
  }
}