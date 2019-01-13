import { iMenu } from "./iMenu";

export class MenuGenerico implements iMenu {
  
  constructor(
    protected _name: string,
    protected _options: iMenu[],
    protected _route?: string
  ){
      this._route = _route ? _route : '/menu';  // si no se le asigna ruta, por defecto es /menu
  }

  get route(): string { return this._route; }
  get name(): string { return this._name; }
  get options(): iMenu[] { return this._options; }

  action(): void {}
}