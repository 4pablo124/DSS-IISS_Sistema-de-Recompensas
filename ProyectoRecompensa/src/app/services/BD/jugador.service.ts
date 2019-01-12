import { Injectable } from '@angular/core';
import { Jugador } from '../../clases/Elementos/jugador'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
      .subscribe(res => console.log(jugador));
  }

  findAll(): Observable<Jugador[]>{
    return this.http.get<Jugador[]>(`${this.uri}/findAll`);
  }

  find(jugador: Jugador): Observable<Jugador>{
    return this.http.get<Jugador>(`${this.uri}/find/${jugador._id}`);
  }
}
