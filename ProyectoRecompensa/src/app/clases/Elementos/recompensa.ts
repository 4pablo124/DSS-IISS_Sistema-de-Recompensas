import { Dificultad } from './enumerados';

export class Recompensa
{
    constructor(
        private _titulo: string,
        private _descripcion: string,
        private _dificultad: Dificultad,
        private _videojuego: String
    )
    {}

    get titulo(): string {return this._titulo;}
    get descripcion(): string {return this._descripcion;}
    get dificultad(): Dificultad {return this._dificultad;}
    get videojuego(): String {return this._videojuego;}

    set titulo(titulo: string) {this.titulo = titulo;}
    set descripcion(descripcion: string) {this._descripcion = descripcion;}
    set dificultad(dificultad: Dificultad) {this._dificultad = dificultad;}
    set videojuego(videojuego: String) {this._videojuego = videojuego;}
}