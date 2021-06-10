import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category, CategoryDTO } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiURL = 'http://3.226.243.38:8081/category/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.apiURL);
  }

  addCategory(bodyObject: CategoryDTO): Observable<Category>{
    return this.httpClient.post<Category>(this.apiURL, bodyObject, this.httpOptions);
  }

  updateCategory(id: number, bodyObject: object): Observable<Category>{
    return this.httpClient.put<Category>(this.apiURL + id, bodyObject, this.httpOptions);
  }

  deleteCategory(id: number): Observable<number>{
    return this.httpClient.delete<number>(this.apiURL + id);
  }
}
