import { Dificultad } from './enumerados';

export class Recompensa
{
    private id: string;
    constructor(
        private _titulo: string,
        private _descripcion: string,
        private _dificultad: Dificultad,
        private _videojuego: String
    )
    {}

    get _id(): string {return this.id;}
    get titulo(): string {return this._titulo;}
    get descripcion(): string {return this._descripcion;}
    get dificultad(): Dificultad {return this._dificultad;}
    get videojuego(): String {return this._videojuego;}

    set _id(id: string) {this.id = id;}
    set descripcion(descripcion: string) {this._descripcion = descripcion;}
    set dificultad(dificultad: Dificultad) {this._dificultad = dificultad;}
    set videojuego(videojuego: String) {this._videojuego = videojuego;}
}