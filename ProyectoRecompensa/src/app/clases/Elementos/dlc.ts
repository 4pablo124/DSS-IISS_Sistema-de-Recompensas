export class DLC
{
    private id: string;
    constructor(
        private _titulo: string,
        private _descripcion: string,
        private _videojuego: string
    ){}

    get _id(): string {return this.id;}
    get titulo(): string {return this._titulo;}
    get descripcion(): string {return this._descripcion;}
    get videojuego(): string {return this._videojuego;}

    set _id(id: string) {this.id = id;}
    set titulo(titulo: string) {this._titulo = titulo;}
    set descripcion(descripcion: string) {this._descripcion = descripcion;}
    set videojuego(videojuego: string) {this._videojuego = videojuego;}
}