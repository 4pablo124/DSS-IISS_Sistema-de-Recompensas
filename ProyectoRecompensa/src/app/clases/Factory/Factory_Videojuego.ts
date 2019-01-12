import { iFactory } from "./iFactory";
import { Videojuego } from "../Elementos/videojuego";

export class Factory_Videojuego implements iFactory{

    crear(datos: any): Videojuego{
        return new Videojuego(datos.titulo, datos.descripcion,
                              datos.genero, datos.dispositivo);
    }
}