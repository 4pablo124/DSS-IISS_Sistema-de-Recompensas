export class JugadorVideojuego
{
    private id: string;
    constructor(
        private _jugador: string,
        private _videojuego: string
    ){}

    get _id(): string {return this.id;}
    get jugador(): string {return this._jugador;}
    get videojuego(): string {return this._videojuego;}

    set _id(id: string) {this.id = id;}
    set jugador(jugador: string) {this._jugador = jugador;}
    set videojuego(videojuego: string) {this._videojuego = videojuego;}
}