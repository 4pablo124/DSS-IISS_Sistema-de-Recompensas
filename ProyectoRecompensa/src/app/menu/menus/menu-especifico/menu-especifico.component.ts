import { Component } from '@angular/core';
import { iMenu } from "../iMenu";
import { iCommand } from "../../../clases/Command/iCommand"


@Component({
  selector: 'app-menu-especifico',
  templateUrl: './menu-especifico.component.html',
  styleUrls: ['./menu-especifico.component.scss']
})


export class MenuEspecificoComponent implements iMenu {
  protected name: string;
  protected options: iMenu[];
  protected route: string;
  protected command: iCommand;

  constructor() {};

  getRoute(): string {
    return this.route;
  }

  setRoute(route: string): void {
    this.route = route;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getOptions(): iMenu[] {
    return this.options;
  }

  setOptions(options: iMenu[]): void {
    this.options = options;
  }

  setCommand(command: iCommand): void {
    this.command = command;
  }

  action(){}
}
