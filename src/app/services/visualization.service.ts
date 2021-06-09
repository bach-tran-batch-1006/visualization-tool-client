import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Visualization, VisualizationDTO} from '../models/Visualization';
import { Skill } from '../models/Skill';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class VisualizationService {

  apiURL = 'http://3.226.243.38:8081/visualization/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getAllVisualizations(): Observable<Visualization[]> {
    return this.httpClient.get<Visualization[]>(this.apiURL);
  }

  getVisualizationById(id: number): Observable<Visualization> {
    return this.httpClient.get<Visualization>(`${this.apiURL}${id}`);
  }

  addVisualization(bodyObject: VisualizationDTO): Observable<Visualization> {
    return this.httpClient.post<Visualization>(this.apiURL, bodyObject, this.httpOptions);
  }

  updateVisualization(id: number, bodyObject: VisualizationDTO): Observable<Visualization> {
    return this.httpClient.put<Visualization>(`${this.apiURL}${id}`, bodyObject, this.httpOptions);
  }

  deleteVisualization(id: number) {
    return this.httpClient.delete(`${this.apiURL}${id}`);
  }

  getAllUniqueSkillsByVisualization(id: number): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(`${this.apiURL}${id}/skills`);
  }

  getAllUniqueCategoriesByVisualization(id: number): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.apiURL}${id}/categories`);
  }

}
