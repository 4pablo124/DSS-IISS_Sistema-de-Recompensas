import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iBD } from './iBD';


@Injectable({
  providedIn: 'root'
})
export class RecompensaService implements iBD{

  uri = 'http://localhost:4000/recompensa';

  constructor(private http: HttpClient) { }

  add(recompensa: any) {
    const recompensaJSON = {
      titulo: recompensa.titulo,
      descripcion: recompensa.descripcion,
      dificultad: recompensa.dificultad,
      videojuego: recompensa.videojuego
    };
    this.http.post(`${this.uri}/add`, recompensaJSON)
      .subscribe(res => console.log(recompensa, 'Ha sido creada con exito'));

  }

  findAll(): Observable<any[]>{
    return this.http.get<any[]>(`${this.uri}/findAll`)
  }

  update(recompensa: any): Observable<any>{
    return this.http.put<any>(`${this.uri}/update/${recompensa._id}`,recompensa)
      .subscribe(res => console.log(recompensa, 'Ha sido actualizada con exito'));;
  }

  delete(recompensa: any): Observable<any>{
    return this.http.delete<any>(`${this.uri}/delete/${recompensa._id}`)
      .subscribe(res => console.log(recompensa, 'Ha sido borrada con exito'));
  }
}