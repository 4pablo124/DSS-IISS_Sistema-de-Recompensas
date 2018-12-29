import { Component } from '@angular/core';
import { iMenu } from '../iMenu';

@Component({
  selector: 'app-menu-generico',
  templateUrl: './menu-generico.component.html',
  styleUrls: ['./menu-generico.component.scss']
})
export class MenuGenericoComponent implements iMenu {
  protected name: string;
  protected route: string;
  protected options: iMenu[];

  constructor(){}

  getRoute(): string {
    return this.route;
  }

  setRoute(route: string) {
    this.route = route;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getOptions(): iMenu[] {
    return this.options;
  }

  setOptions(options: iMenu[]) {
    this.options = options;
  }

  action(): void {}
}