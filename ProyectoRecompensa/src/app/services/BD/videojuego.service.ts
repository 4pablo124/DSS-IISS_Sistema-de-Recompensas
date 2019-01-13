import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iBD } from './iBD';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService implements iBD{

  uri = 'http://localhost:4000/videojuego';

  constructor(private http: HttpClient) { }

  add(videojuego: any) 
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

  findAll(): Observable<any[]>{
    return this.http.get<any[]>(`${this.uri}/findAll`)
  }

  update(videojuego: any) {
    this.http.put<any>(`${this.uri}/update/${videojuego._id}`,videojuego)
      .subscribe(res => console.log(videojuego, 'Ha sido actualizado con exito'));;
  }

  delete(videojuego: any) {
    this.http.delete<any>(`${this.uri}/delete/${videojuego._id}`)
      .subscribe(res => console.log(videojuego, 'Ha sido borrado con exito'));
  }
}