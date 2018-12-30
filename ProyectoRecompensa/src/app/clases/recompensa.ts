import { enumerados } from 'enumerados';

export class Recompensa
{
    private titulo: string;
    private descripcion: string;
    private dificultad: Dificultad;

    constructor(titulo: string, descripcion: string, dificultad: Dificultad)
    {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.dificultad = dificultad;
    }

    get titulo(): string {return this.titulo;}
    get descripcion(): string {return this.descripcion;}
    get dificultad(): Dificultad {return this.dificultad = this.dificultad;}

    set titulo(titulo: string) {this.titulo = titulo;}
    set descripcion(descripcion: string) {this.descripcion = descripcion;}
    set dificultad(dificultad: Dificultad) {this.dificultad = dificultad;}
}