import { iFactory } from "./iFactory";
import { DLC } from "../dlc";

export class Factory_DLC implements iFactory{
    dlc: DLC;

    crear(datos: any){
        this.dlc = new DLC(datos.titulo, datos.descripcion);
        // meter en base de datos
    }
}