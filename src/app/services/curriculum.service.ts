import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curriculum, CurriculumDTO } from '../models/Curriculum';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  apiURL = 'http://3.226.243.38:8081/curriculum/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getAllCurriculum(): Observable<Curriculum[]> {
    return this.httpClient.get<Curriculum[]>(`${this.apiURL}`);
  }

  addCurriculum(bodyObject: CurriculumDTO): Observable<Curriculum>{
    return this.httpClient.post<Curriculum>(this.apiURL, bodyObject, this.httpOptions);
  }

  updateCurriculum(id: number, bodyObject: CurriculumDTO): Observable<Curriculum>{
    return this.httpClient.put<Curriculum>(this.apiURL + id, bodyObject, this.httpOptions);
  }

  deleteCurriculum(id: number): Observable<number>{
    return this.httpClient.delete<number>(this.apiURL + id);
  }

}
