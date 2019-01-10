import { iMenu } from "./iMenu";

export class MenuGenerico implements iMenu {
  protected _route: string;

  constructor(
    protected _name: string,
    protected _options: iMenu[]
  ){
    this._route = '/menu';
  }

  get route(): string { return this._route; }
  get name(): string { return this._name; }
  get options(): iMenu[] { return this._options; }

  action(): void {}
}