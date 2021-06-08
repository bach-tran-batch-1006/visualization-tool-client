import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Skill, SkillDTO} from '../models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  apiURL = 'http://3.226.243.38:8081';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getSkills():Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.apiURL+"/allSkills");
  }

  addSkill(bodyObject: SkillDTO):Observable<object>{
    return this.httpClient.post<Skill>(this.apiURL+"/skill",bodyObject, this.httpOptions);
  }

  updateSkill(id: number, bodyObject: SkillDTO):Observable<object>{
    return this.httpClient.put<Skill>(this.apiURL+"/skill/"+id,bodyObject, this.httpOptions);
  }

  deleteSkill(id: number){
    return this.httpClient.delete(this.apiURL+"/skill/"+id);
  }

}
