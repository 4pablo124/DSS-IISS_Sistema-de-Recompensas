import { iFactory } from "./iFactory";
import { DLC } from "../Elementos/dlc";

export class Factory_DLC implements iFactory{
    crear(datos: any): DLC{
        return new DLC(datos.titulo, datos.descripcion, datos.videojuego);
    }
}