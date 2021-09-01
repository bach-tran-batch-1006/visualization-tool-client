import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Primer, PrimerDTO} from '../models/Primer';



@Injectable({
  providedIn: 'root'
})
export class PrimerService {
  apiURL = 'http://localhost:8081/primer/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) { }

  getAllPrimers(): Observable<Primer[]> {
    return this.httpClient.get<Primer[]>(this.apiURL);
  }


  addPrimer(bodyObject: PrimerDTO): Observable<Primer> {
    return this.httpClient.post<Primer>(this.apiURL, bodyObject, this.httpOptions);
  }

  updatePrimer(id: number, bodyObject: PrimerDTO): Observable<Primer> {
    return this.httpClient.put<Primer>(`${this.apiURL}${id}`, bodyObject, this.httpOptions);
  }

  deletePrimer(id: number): Observable<number> {
    return this.httpClient.delete<number>(`${this.apiURL}${id}`);
  }





}