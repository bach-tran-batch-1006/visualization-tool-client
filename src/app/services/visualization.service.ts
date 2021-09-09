import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Visualization, VisualizationDTO} from '../models/Visualization';
import { Skill } from '../models/Skill';
import { Category } from '../models/Category';
import { Curriculum } from '../models/Curriculum';


@Injectable({
  providedIn: 'root'
})
export class VisualizationService {
  apiURL = 'http://54.221.159.251:8090/visualization/visualization/';
  //apiURL = 'http://localhost:8080/visualization/visualization';
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

  deleteVisualization(id: number): Observable<number> {
    return this.httpClient.delete<number>(`${this.apiURL}${id}`);
  }

  getCurriculumById(id: number): Observable<Curriculum[]>{
    return this.httpClient.get<Curriculum[]>(`${this.apiURL}${id}`);
  }

  getSkillsById(id: number):  Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(`${this.apiURL}${id}`);
  }

  getCategoriesById(id: number): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.apiURL}${id}`);
  }

  getPrimerById(id: number): Observable<number>{
    return this.httpClient.get<number>(`${this.apiURL}${id}`);
  }

  // getAllUniqueSkillsByVisualization(id: number): Observable<Skill[]> {
  //   return this.httpClient.get<Skill[]>(`${this.apiURL}${id}/skills`);
  // }

  // getAllUniqueCategoriesByVisualization(id: number): Observable<Category[]> {
  //   return this.httpClient.get<Category[]>(`${this.apiURL}${id}/categories`);
  // }

}
