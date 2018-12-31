import { Genero, Dispositivo } from './enumerados';

export class Videojuego
{
    private _titulo: string;
    private _descripcion: string;
    private _genero: Genero;
    private _dispositivo: Dispositivo;

    constructor(titulo: string, descripcion: string, genero: Genero, dispositivo: Dispositivo)
    {
        this._titulo = titulo;
        this._descripcion = descripcion;
        this._genero = genero;
        this._dispositivo = dispositivo;
    }

    get titulo(): string {return this._titulo;}
    get descripcion(): string {return this._descripcion;}
    get genero(): Genero {return this._genero;}
    get dispositivo(): Dispositivo {return this._dispositivo;}
    
    set titulo(titulo: string) {this._titulo = titulo;}
    set descripcion(descripcion: string) {this._descripcion = descripcion;}
    set genero(genero: Genero) {this._genero = genero;}
    set dispositivo(dispositivo: Dispositivo) {this._dispositivo = dispositivo;} 
}