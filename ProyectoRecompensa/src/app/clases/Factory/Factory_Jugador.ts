import { iFactory } from "./iFactory";
import { Jugador } from "../Elementos/jugador";

export class Factory_Jugador implements iFactory{
    
    crear(datos: any): Jugador{
        return new Jugador(datos.nombre, datos.apellidos,
                           datos.nickname, datos.email,
                           datos.fechaNanicimento);
    }
}