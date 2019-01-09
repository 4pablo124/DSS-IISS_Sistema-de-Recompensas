import { iCommand } from './iCommand';
import { iFactory } from "../Factory/iFactory";


export class Command_Crear implements iCommand
{
    factory: iFactory;

    constructor(factory: iFactory){
        this.factory = factory;
    }

    execute(datos: any):void {
        console.log('soy command crear con titulo '+ datos.titulo)
        this.factory.crear(datos);
    }
}