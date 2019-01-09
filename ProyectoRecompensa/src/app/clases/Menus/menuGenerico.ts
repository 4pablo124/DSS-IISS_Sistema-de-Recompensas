import { iMenu } from "./iMenu";

export class MenuGenerico implements iMenu {
  protected route: string;

  constructor(
    protected name: string,
    protected options: iMenu[]
  ){
    this.route = ' ';
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

  action(): void {}
}