import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DLC } from '../clases/Elementos/dlc'

@Injectable({
  providedIn: 'root'
})
export class AddDlcService {

  uri = 'http://localhost:4000/addDLC';

  constructor(private http: HttpClient) { }

  addDLC(dlc: DLC) 
  {
    const dlcJSON = {
      titulo: dlc.titulo,
      descripcion: dlc.descripcion
    };
    this.http.post(`${this.uri}/add`, dlcJSON)
      .subscribe(res => console.log('Done'));
  }
}