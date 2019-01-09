export class Jugador
{
    constructor(
        private _nombre: string,
        private _apellidos: string,
        private _nickname: string,
        private _email: string,
        private _fechaNacimiento: Date
    ){}

    get nombre(): string {return this._nombre;}
    get apellidos(): string {return this._apellidos;}
    get nickname(): string {return this._nickname;}
    get email(): string {return this._email;}
    get fechaNacimiento(): Date {return this._fechaNacimiento;}

    set nombre(nombre: string) {this._nombre = nombre;}
    set apellidos(apellidos: string) {this._apellidos = apellidos;}
    set nickname(nickname: string) {this._nickname = nickname;}
    set email(email: string) {this._email = email;}
    set fechaNacimiento(fechaNacimeinto: Date) {this._fechaNacimiento = fechaNacimeinto;}
}