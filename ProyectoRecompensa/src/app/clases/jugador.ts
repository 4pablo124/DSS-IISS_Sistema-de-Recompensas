export class Jugador
{
    private nombre: string;
    private apellidos: string;
    private nickname: string;
    private email: string;
    private fechaNacimiento: Date;

    constructor(nombre: string, apellidos: string, nickname: string, email: string, fechaNacimeinto: Date)
    {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nickname = nickname;
        this.email = email;
        this.fechaNacimiento = fechaNacimeinto;
    }

    get nombre(): string {return this.nombre;}
    get apellidos(): string {return this.apellidos;}
    get nickname(): string {return this.nickname;}
    get email(): string {return this.email;}
    get fechaNacimiento(): Date {return this.fechaNacimiento;}

    set nombre(nombre: string) {this.nombre = nombre;}
    set apellidos(apellidos: string) {this.apellidos = apellidos;}
    set nickname(nickname: string) {this.nickname = nickname;}
    set email(email: string) {this.email = email;}
    set fechaNacimiento(fechaNacimeinto: Date) {this.fechaNacimiento = fechaNacimeinto;}
}