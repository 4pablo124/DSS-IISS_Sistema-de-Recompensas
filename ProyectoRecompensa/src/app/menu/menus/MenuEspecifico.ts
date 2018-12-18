import { iMenu } from "./iMenu";

export class MenuEspecifico implements iMenu{
    private name: string;
    private options: iMenu[];
  
    constructor(name: string) {
      this.name = name;
      this.options = [];  // Un Menu_Especifico no tiene opciones
    }
  
    public getName(): string {
      return this.name;
    }
  
    // Es un menu hoja, no tiene submenus
    public getOptions(): iMenu[]{
      return this.options;
    }
  
    public action() {
        // Implementacion por defecto vacia
    }
}