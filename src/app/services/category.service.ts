import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiURL = 'http://3.226.243.38:8081/category/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<[]>{
    return this.httpClient.get<[]>(this.apiURL);
  }

  addCategory(bodyObject: object):Observable<object>{
    return this.httpClient.post<object>(this.apiURL,bodyObject, this.httpOptions);
  }

  updateCategory(id: number, bodyObject: object):Observable<object>{
    return this.httpClient.put<object>(this.apiURL+id,bodyObject, this.httpOptions);
  }

  deleteCategory(id: number){
    return this.httpClient.delete(this.apiURL+id);
  }
}
