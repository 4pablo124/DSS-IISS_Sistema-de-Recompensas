import { iFactory } from "./iFactory";
import { Videojuego } from "../videojuego";

export class Factory_Videojuego implements iFactory{
    videojuego: Videojuego;
    
    crear(datos: any){
        this.videojuego = new Videojuego(datos.titulo, datos.string,
                                  datos.genero, datos.dispositivo);
        // meter en base de datos
    }
}