import { Genero, Dispositivo } from './enumerados';
import { DLC } from './dlc';
import { Recompensa } from './recompensa';
import { Jugador } from './jugador';

export class Videojuego
{
    jugadores: Set<Jugador>;
    private id: string;
    constructor(
        private _titulo: string,
        private _descripcion: string,
        private _genero: Genero,
        private _dispositivo: Dispositivo
    )
    {}

    get _id(): string {return this.id;}
    get titulo(): string {return this._titulo;}
    get descripcion(): string {return this._descripcion;}
    get genero(): Genero {return this._genero;}
    get dispositivo(): Dispositivo {return this._dispositivo;}
    
    set _id(id: string) {this.id = id;}
    set titulo(titulo: string) {this._titulo = titulo;}
    set descripcion(descripcion: string) {this._descripcion = descripcion;}
    set genero(genero: Genero) {this._genero = genero;}
    set dispositivo(dispositivo: Dispositivo) {this._dispositivo = dispositivo;} 
}