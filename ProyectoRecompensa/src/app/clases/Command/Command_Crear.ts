import { iCommand } from './iCommand';
import { iFactory } from "../Factory/iFactory";


export class Command_Crear implements iCommand
{
    factory: iFactory;

    constructor(factory: iFactory){
        this.factory = factory;
    }

    execute(datos: any): any {
        this.factory.crear(datos);
    }
}