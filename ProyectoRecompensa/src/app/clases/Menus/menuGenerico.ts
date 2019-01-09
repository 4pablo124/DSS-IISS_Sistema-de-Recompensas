import { iMenu } from "./iMenu";

export class MenuGenerico implements iMenu {
  protected route: string;

  constructor(
    protected name: string,
    protected options: iMenu[]
  ){
    this.route = '/menu';
  }

  getRoute(): string {
    return this.route;
  }

  getName(): string {
    return this.name;
  }

  getOptions(): iMenu[] {
    return this.options;
  }

  action(data: any): any {}
}