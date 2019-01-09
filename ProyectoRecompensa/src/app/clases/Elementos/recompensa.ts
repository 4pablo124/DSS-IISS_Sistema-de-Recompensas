import { Dificultad } from './enumerados';

export class Recompensa
{
    constructor(
        private _titulo: string,
        private _descripcion: string,
        private _dificultad: Dificultad
    )
    {}

    get titulo(): string {return this._titulo;}
    get descripcion(): string {return this._descripcion;}
    get dificultad(): Dificultad {return this._dificultad;}

    set titulo(titulo: string) {this.titulo = titulo;}
    set descripcion(descripcion: string) {this._descripcion = descripcion;}
    set dificultad(dificultad: Dificultad) {this._dificultad = dificultad;}
}