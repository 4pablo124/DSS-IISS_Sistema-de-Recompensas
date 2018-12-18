import { iMenu } from "./iMenu";

// Declaracion del tipo menu generico
export class MenuGenerico implements iMenu{
    private name: string;
    private options: iMenu[];
  
    constructor(name: string, options: iMenu[] = []) {
      this.name = name;
      this.options = options;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getOptions(): iMenu[]{
      return this.options;
    }
  
    public action() {}
}