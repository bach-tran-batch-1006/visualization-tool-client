import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../models/Skill';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class VisualizationService {

  apiURL = 'http://3.226.243.38:8081';
  // apiURL = 'http://localhost:8081';

  constructor(private httpClient: HttpClient) { }

  getAllVisualizations(): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/visualization`);
  }

  getVisualizationById(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/visualization/${id}`);
  }

  addVisualization(name: string, cirriculaList: Array<any>): Observable<any> {
    const visualizationDTO = {
      visualizationName: name,
      curriculumList: cirriculaList
    };
    return this.httpClient.post(`${this.apiURL}/visualization`, visualizationDTO);
  }

  updateVisualization(id: number, name: string, cirriculaList: Array<any>): Observable<any> {
    const visualizationDTO = {
      visualizationId: id,
      visualizationName: name,
      curriculumList: cirriculaList
    };
    return this.httpClient.put(`${this.apiURL}/visualization/${id}`, visualizationDTO);
  }

  deleteVisualization(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiURL}/visualization/${id}`);
  }

  getAllUniqueSkillsByVisualization(id: number): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(`${this.apiURL}/visualization/${id}/skills`);
  }

  getAllUniqueCategoriesByVisualization(id: number): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.apiURL}/visualization/${id}/categories`);
  }

}
