import { enumerados } from 'enumerados';

export class Videojuego
{
    private titulo: string;
    private descripcion: string;
    private genero: Genero;
    private dispositivo: Dispositivo;

    constructor(titulo: string, descripcion: string, genero: Genero, dispositivo: Dispositivo)
    {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.genero = genero;
        this.dispositivo = dispositivo;
    }

    get titulo(): string {return this.titulo;}
    get descripcion(): string {return this.descripcion;}
    get genero(): Genero {return this.genero;}
    get dispositivo(): Dispositivo {return this.dispositivo;}
    
    set titulo(titulo: string) {this.titulo = titulo;}
    set descripcion(descripcion: string) {this.descripcion = descripcion;}
    set genero(genero: Genero) {this.genero = genero;}
    set dispositivo(dispositivo: Dispositivo) {this.dispositivo = dispositivo;} 
}