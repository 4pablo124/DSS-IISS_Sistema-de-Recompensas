import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recompensa } from 'src/app/clases/Elementos/recompensa';
import { Observable } from 'rxjs';
import { iBD } from './iBD';


@Injectable({
  providedIn: 'root'
})
export class RecompensaService implements iBD{

  uri = 'http://localhost:4000/recompensa';

  constructor(private http: HttpClient) { }

  add(recompensa: Recompensa) {
    this.http.post(`${this.uri}/add`, recompensa)
      .subscribe(res => console.log(recompensa, 'Done'));
  }

  findAll(): Observable<Recompensa[]>{
    return this.http.get<Recompensa[]>(`${this.uri}/findAll`);
  }

  find(recompensa: Recompensa): Observable<Recompensa>{
    return this.http.get<Recompensa>(`${this.uri}/find/${recompensa._id}`);
  }

  update(recompensa: Recompensa): Observable<Recompensa>{
    return this.http.put<Recompensa>(`${this.uri}/update/${recompensa._id}`,recompensa);
  }

  delete(recompensa: Recompensa): Observable<Recompensa>{
    return this.http.delete<Recompensa>(`${this.uri}/delete/${recompensa._id}`);
  }
}