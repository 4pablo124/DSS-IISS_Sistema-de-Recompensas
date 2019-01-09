import { iMenu } from "./iMenu";

export class MenuGenerico implements iMenu {

  constructor(
    protected name: string,
    protected route: string,
    protected options: iMenu[]
  ){}

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