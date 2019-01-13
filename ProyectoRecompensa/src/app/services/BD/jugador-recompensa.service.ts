import { Injectable } from '@angular/core';
import { JugadorRecompensa } from '../../clases/Elementos/jugadorRecompensa'
import { HttpClient } from '@angular/common/http';
import { iBD } from './iBD';

@Injectable({
  providedIn: 'root'
})
export class JugadorRecompensaService implements iBD{

  uri = 'http://localhost:4000/jugadorRecompensa';

  constructor(private http: HttpClient) { }

  add(jugadorRecompensa: JugadorRecompensa) 
  {
    const jugadorRecompensaJSON = {
      jugador: jugadorRecompensa.jugador,
      recompensa: jugadorRecompensa.recompensa
    };
    this.http.post(`${this.uri}/add`, jugadorRecompensaJSON)
      .subscribe(res => console.log(jugadorRecompensa));
  }

  findAll(){}
  find(jugadorRecompensa: JugadorRecompensa){}
  update(jugadorRecompensa: JugadorRecompensa){}
  delete(jugadorRecompensa: JugadorRecompensa){}
}