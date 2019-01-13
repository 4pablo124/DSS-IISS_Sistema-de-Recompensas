export class Jugador
{
    private id: string;
    constructor(
        private _nombre: string,
        private _apellidos: string,
        private _nickname: string,
        private _email: string,
        private _fechaNacimiento: string
    ){}

    get _id(): string {return this.id;}
    get nombre(): string {return this._nombre;}
    get apellidos(): string {return this._apellidos;}
    get nickname(): string {return this._nickname;}
    get email(): string {return this._email;}
    get fechaNacimiento(): string {return this._fechaNacimiento;}

    set _id(id: string) {this.id = id;}
    set nombre(nombre: string) {this._nombre = nombre;}
    set apellidos(apellidos: string) {this._apellidos = apellidos;}
    set nickname(nickname: string) {this._nickname = nickname;}
    set email(email: string) {this._email = email;}
    set fechaNacimiento(fechaNacimeinto: string) {this._fechaNacimiento = fechaNacimeinto;}
}