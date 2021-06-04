import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Curriculum } from '../models/Curriculum';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  apiURL = 'http://3.226.243.38:8081';

  constructor(private httpClient: HttpClient) { }


  getAllCurriculum(): Observable<Curriculum[]> {
    return this.httpClient.get<Curriculum[]>(`${this.apiURL}/curriculum`);
  }

}
