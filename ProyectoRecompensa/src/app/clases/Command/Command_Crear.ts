import { iCommand } from './iCommand';
import { iFactory } from "../Factory/iFactory";
import { iBD } from 'src/app/services/BD/iBD';


export class Command_Crear implements iCommand
{
    factory: iFactory;

    constructor(factory: iFactory){
        this.factory = factory;
    }

    execute(datos: any, bd: iBD): any {
        console.log(bd);
        let elemento = this.factory.crear(datos);
        bd.add(elemento);
    }
}