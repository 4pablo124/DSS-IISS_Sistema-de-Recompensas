import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recompensa } from '../clases/Elementos/recompensa'

@Injectable({
  providedIn: 'root'
})
export class AddRecompensaService {

  uri = 'http://localhost:4000/addRecompensa';

  constructor(private http: HttpClient) { }

  addRecompensa(recompensa: Recompensa) 
  {
    const recompensaJSON = {
      titulo: recompensa.titulo,
      descripcion: recompensa.descripcion,
      dificultad: recompensa.dificultad
    };
    this.http.post(`${this.uri}/add`, recompensaJSON)
      .subscribe(res => console.log('Done'));
  }
}