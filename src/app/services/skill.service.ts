import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  apiURL = 'http://3.226.243.38:8081';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getSkills():Observable<[]>{
    return this.httpClient.get<[]>(this.apiURL+"/allSkills");
  }

  addSkill(bodyObject: object):Observable<object>{
    return this.httpClient.post<object>(this.apiURL+"/skill",bodyObject, this.httpOptions);
  }

  updateSkill(id: number, bodyObject: object):Observable<object>{
    return this.httpClient.put<object>(this.apiURL+"/skill/"+id,bodyObject, this.httpOptions);
  }

  deleteSkill(id: number){
    return this.httpClient.delete(this.apiURL+"/skill/"+id);
  }

}
