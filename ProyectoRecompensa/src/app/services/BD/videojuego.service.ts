import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Videojuego } from 'src/app/clases/Elementos/videojuego'
import { Observable } from 'rxjs';
import { iBD } from './iBD';

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
      .subscribe(res => console.log(videojuego));
  }

  findAll(): Observable<Videojuego[]>{
    return this.http.get<Videojuego[]>(`${this.uri}/findAll`);
  }

  find(videojuego: Videojuego): Observable<Videojuego>{
    return this.http.get<Videojuego>(`${this.uri}/find/${videojuego._id}`);
  }

  update(videojuego: Videojuego): Observable<Videojuego>{
    return this.http.put<Videojuego>(`${this.uri}/update/${videojuego._id}`,videojuego);
  }

  delete(videojuego: Videojuego): Observable<Videojuego>{
    return this.http.delete<Videojuego>(`${this.uri}/delete/${videojuego._id}`);
  }

  findAll(){}
  update(videojuego: Videojuego){}
  delete(videojuego: Videojuego){}
}