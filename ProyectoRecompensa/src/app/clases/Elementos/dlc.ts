export class DLC
{
    private _titulo: string;
    private _descripcion: string;

    constructor(titulo: string, descripcion: string)
    {
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    get titulo(): string {return this._titulo;}
    get descripcion(): string {return this._descripcion;}

    set titulo(titulo: string) {this._titulo = titulo;}
    set descripcion(descripcion: string) {this._descripcion = descripcion;}
}