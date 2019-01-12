import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Videojuego } from '../../clases/Elementos/videojuego'
import { iBD } from './iBD';

@Injectable({
  providedIn: 'root'
})
export class AddVideojuegoService implements iBD{

  uri = 'http://localhost:4000/addVideojuego';

  constructor(private http: HttpClient) { }

  add(videojuego: Videojuego) 
  {
    const videojuegoJSON = {
      titulo: videojuego.titulo,
      descripcion: videojuego.descripcion,
      genero: videojuego.genero,
      dispositivo: videojuego.dispositivo
    };
    this.http.post(`${this.uri}/add`, videojuegoJSON)
      .subscribe(res => console.log('Done'));
  }
}