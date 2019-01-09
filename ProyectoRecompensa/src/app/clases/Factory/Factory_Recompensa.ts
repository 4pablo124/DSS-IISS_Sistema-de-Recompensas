import { iFactory } from "./iFactory";
import { Recompensa } from "../Elementos/recompensa";

export class Factory_Recompensa implements iFactory{
    recompensa: Recompensa;
    
    crear(datos: any){
        this.recompensa = new Recompensa(datos.titulo, datos.string,
                                         datos.dificultad);
        // meter en base de datos
    }
}