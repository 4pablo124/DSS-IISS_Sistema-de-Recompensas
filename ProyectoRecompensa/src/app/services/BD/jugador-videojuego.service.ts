import { Injectable } from '@angular/core';
import { JugadorVideojuego } from '../../clases/Elementos/jugador'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iBD } from './iBD';

@Injectable({
  providedIn: 'root'
})
export class JugadorVideojuegoService implements iBD{

  uri = 'http://localhost:4000/jugadorVideojuego';

  constructor(private http: HttpClient) { }

  add(jugadorVideojuego: JugadorVideojuego) 
  {
    const jugadorVideojuegoJSON = {
      jugador: jugadorVideojuego.jugador,
      videojuego: jugadorVideojuego.videojuego
    };
    this.http.post(`${this.uri}/add`, jugadorVideojuegoJSON)
      .subscribe(res => console.log(jugadorVideojuego));
  }

  findAll(){}
  find(jugador: Jugador){}
  update(jugador: Jugador){}
  delete(jugador: Jugador){}
}