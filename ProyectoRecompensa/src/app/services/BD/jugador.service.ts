import { Injectable } from '@angular/core';
import { Jugador } from '../../clases/Elementos/jugador'
import { HttpClient } from '@angular/common/http';
import { iBD } from './iBD';

@Injectable({
  providedIn: 'root'
})
export class JugadorService implements iBD{

  uri = 'http://localhost:4000/addJugador';

  constructor(private http: HttpClient) { }

  add(jugador: Jugador) 
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

  findAll(){}
  update(jugador: Jugador){}
  delete(jugador: Jugador){}
}
