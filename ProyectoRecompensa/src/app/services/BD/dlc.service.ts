import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DLC } from '../../clases/Elementos/dlc';
import { Observable } from 'rxjs';
import { iBD } from './iBD';

@Injectable({
  providedIn: 'root'
})
export class DlcService implements iBD{

  uri = 'http://localhost:4000/addDLC';

  constructor(private http: HttpClient) { }

  add(dlc: DLC) 
  {
    const dlcJSON = {
      titulo: dlc.titulo,
      descripcion: dlc.descripcion,
      videojuego: dlc.videojuego
    };
    this.http.post(`${this.uri}/add`, dlcJSON)
      .subscribe(res => console.log(dlc));
  }

  findAll(): Observable<DLC[]>{
    return this.http.get<DLC[]>(`${this.uri}/findAll`);
  }

  find(dlc: DLC): Observable<DLC>{
    return this.http.get<DLC>(`${this.uri}/find/${dlc._id}`);
  }

  findAll(){}
  update(dlc: DLC){}
  delete(dlc: DLC){}
}