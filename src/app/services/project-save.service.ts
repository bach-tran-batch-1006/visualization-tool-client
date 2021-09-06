import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project, ProjectDTO } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectSaveService {

  apiURL = 'http://localhost:8081/project/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

   constructor(private httpClient: HttpClient) { }
   getAllCurriculum(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.apiURL}`);
  }

  addProject(bodyObject: ProjectDTO): Observable<Project>{
    return this.httpClient.post<Project>(this.apiURL, bodyObject, this.httpOptions);
  }

  register(projectName:string, projectId?:number ): Observable<Project> {
    return this.httpClient.post<Project>(this.apiURL + 
      '/project', JSON.stringify({projectId,projectName}), this.httpOptions);
  }

  updateProject(id: number, bodyObject: ProjectDTO): Observable<Project>{
    return this.httpClient.put<Project>(this.apiURL + id, bodyObject, this.httpOptions);
  }

  deleteProject(id: number): Observable<number>{
    return this.httpClient.delete<number>(this.apiURL + id);
  }

}
