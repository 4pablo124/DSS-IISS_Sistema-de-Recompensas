import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iBD } from './iBD';
import { Videojuego } from 'src/app/clases/Elementos/videojuego';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService implements iBD{

  uri = 'http://localhost:4000/videojuego';

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
      .subscribe(res => console.log(videojuego, 'Ha sido creado con exito'));
  }

  findAll(): Observable<Videojuego[]>{
    return this.http.get<Videojuego[]>(`${this.uri}/findAll`)
  }
  update(videojuego: Videojuego) {
    this.http.put<Videojuego>(`${this.uri}/update/${videojuego._id}`,videojuego)
      .subscribe(res => console.log(videojuego, 'Ha sido actualizado con exito'));;
  }

  delete(videojuego: Videojuego) {
    this.http.delete<Videojuego>(`${this.uri}/delete/${videojuego._id}`)
      .subscribe(res => console.log(videojuego, 'Ha sido borrado con exito'));
  }
}