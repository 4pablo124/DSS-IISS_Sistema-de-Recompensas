export class JugadorRecompensa
{
    private id: string;
    constructor(
        private _jugador: string,
        private _recompensa: string
    ){}

    get _id(): string {return this.id;}
    get jugador(): string {return this._jugador;}
    get recompensa(): string {return this._recompensa;}

    set _id(id: string) {this.id = id;}
    set jugador(jugador: string) {this._jugador = jugador;}
    set recompensa(recompensa: string) {this._recompensa = recompensa;}
}