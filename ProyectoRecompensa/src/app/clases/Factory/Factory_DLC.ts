import { iFactory } from "./iFactory";
import { DLC } from "../Elementos/dlc";

export class Factory_DLC implements iFactory{
    dlc: DLC;

    crear(datos: any){
        this.dlc = new DLC(datos.titulo, datos.descripcion, datos.videojuego);
        console.log(this.dlc);
        // meter en base de datos
    }
}