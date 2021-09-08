import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Skill, SkillDTO } from '../models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  apiURL = 'http://54.221.159.251:8090/skill';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getSkills(): Observable<Skill[]> {
    if(Number(localStorage.getItem('userId')) === 0 ){
      return this.httpClient.get<Skill[]>(this.apiURL + '/user/0');
    }else{
      return this.httpClient.get<Skill[]>(this.apiURL + '/user/' + localStorage.getItem('userId'));
    }
  }

  addSkill(bodyObject: SkillDTO): Observable<Skill> {
    return this.httpClient.post<Skill>(this.apiURL + '/add', bodyObject, this.httpOptions);
  }

  updateSkill(id: number, bodyObject: SkillDTO): Observable<Skill> {
    return this.httpClient.put<Skill>(this.apiURL + '/' + id, bodyObject, this.httpOptions);
  }

  deleteSkill(id: number): Observable<number> {
    return this.httpClient.delete<number>(this.apiURL + '/' + id);
  }

}
