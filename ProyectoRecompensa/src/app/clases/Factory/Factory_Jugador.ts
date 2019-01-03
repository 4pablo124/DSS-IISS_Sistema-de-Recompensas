import { iFactory } from "./iFactory";
import { Jugador } from "../jugador";

export class Factory_Jugador implements iFactory{
    jugador: Jugador;
    
    crear(datos: any){
        this.jugador = new Jugador(datos.nombre, datos.apellidos,
                                   datos.nickname, datos.email,
                                   datos.fechaNanicimento);
        // meter en base de datos
    }
}