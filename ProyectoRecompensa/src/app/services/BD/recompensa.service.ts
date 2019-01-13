import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iBD } from './iBD';
import { Recompensa } from 'src/app/clases/Elementos/recompensa';


@Injectable({
  providedIn: 'root'
})
export class RecompensaService implements iBD{

  uri = 'http://localhost:4000/recompensa';

  constructor(private http: HttpClient) { }

  add(recompensa: Recompensa) {
    const recompensaJSON = {
      titulo: recompensa.titulo,
      descripcion: recompensa.descripcion,
      dificultad: recompensa.dificultad,
      videojuego: recompensa.videojuego
    };
    this.http.post(`${this.uri}/add`, recompensaJSON)
      .subscribe(res => console.log(recompensa, 'Ha sido creada con exito'));

  }

  findAll(): Observable<Recompensa[]>{
    return this.http.get<Recompensa[]>(`${this.uri}/findAll`)
  }

  update(recompensa: Recompensa) {
    this.http.put<Recompensa>(`${this.uri}/update/${recompensa._id}`,recompensa)
      .subscribe(res => console.log(recompensa, 'Ha sido actualizada con exito'));;
  }

  delete(recompensa: Recompensa) {
    this.http.delete<Recompensa>(`${this.uri}/delete/${recompensa._id}`)
      .subscribe(res => console.log(recompensa, 'Ha sido borrada con exito'));
  }
}