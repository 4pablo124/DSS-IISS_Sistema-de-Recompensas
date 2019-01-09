import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jugador } from '../clases/Elementos/jugador'
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddJugadorService {

  uri = 'http://localhost:4000/addJugador';

  constructor(private http: HttpClient) { }

  addJugador(jugador: Jugador) 
  {
    const jugadorJSON = {
      nombre: jugador.nombre,
      apellidos: jugador.apellidos,
      nickname: jugador.nickname,
      email: jugador.email,
      fechaNacimiento: jugador.fechaNacimiento
    };
    this.http.post(`${this.uri}/add`, jugadorJSON)
      .subscribe(res => console.log('Done'));
  }

  onSubmit() {

  }
}
