import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  apiURL: string = "http://3.226.243.38:8081";

  constructor(private httpClient: HttpClient) { }



}
