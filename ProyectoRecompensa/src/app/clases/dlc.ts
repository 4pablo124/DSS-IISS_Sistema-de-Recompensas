import { enumerados } from 'enumerados';

export class DLC
{
    private titulo: string;
    private descripcion: string;

    constructor(titulo: string, descripcion: string)
    {
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    get titulo(): string {return this.titulo;}
    get descripcion(): string {return this.descripcion;}

    set titulo(titulo: string) {this.titulo = titulo;}
    set descripcion(descripcion: string) {this.descripcion = descripcion;}
}