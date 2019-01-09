import { iFactory } from "./iFactory";
import { DLC } from "../Elementos/dlc";

export class Factory_DLC implements iFactory{
    dlc: DLC;

    crear(datos: any){
        console.log("soy factoria de dlc con titulo " + datos.titulo );
        //this.dlc = new DLC(datos.titulo, datos.descripcion);
        // meter en base de datos
    }
}