import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category, CategoryDTO } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiURL = 'http://54.221.159.251:8090/category';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]>{
    if(Number(localStorage.getItem('userId')) === 0){
      return this.httpClient.get<Category[]>(this.apiURL+"/user/0");
    }else{
      return this.httpClient.get<Category[]>(this.apiURL+"/user/"+localStorage.getItem('userId'));//needs to be fixed to local storage userId
    }
  }

  addCategory(bodyObject: CategoryDTO): Observable<Category>{
    return this.httpClient.post<Category>(this.apiURL+"/add", bodyObject, this.httpOptions);
  }

  updateCategory(id: number, bodyObject: object): Observable<Category>{
    return this.httpClient.put<Category>(this.apiURL + '/' +id, bodyObject, this.httpOptions);
  }

  deleteCategory(id: number): Observable<number>{
    return this.httpClient.delete<number>(this.apiURL + '/' + id);
  }
}
