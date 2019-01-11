import { iFactory } from "./iFactory";
import { Recompensa } from "../Elementos/recompensa";

export class Factory_Recompensa implements iFactory{
    
    crear(datos: any): Recompensa{
        return new Recompensa(datos.titulo, datos.string, datos.dificultad, datos.videojuego);
    }
}