import { Dificultad } from './enumerados';

export class Recompensa
{
    private _titulo: string;
    private _descripcion: string;
    private _dificultad: Dificultad;

    constructor(titulo: string, descripcion: string, dificultad: Dificultad)
    {
        this._titulo = titulo;
        this._descripcion = descripcion;
        this._dificultad = dificultad;
    }

    get titulo(): string {return this._titulo;}
    get descripcion(): string {return this._descripcion;}
    get dificultad(): Dificultad {return this._dificultad;}

    set titulo(titulo: string) {this.titulo = titulo;}
    set descripcion(descripcion: string) {this._descripcion = descripcion;}
    set dificultad(dificultad: Dificultad) {this._dificultad = dificultad;}
}