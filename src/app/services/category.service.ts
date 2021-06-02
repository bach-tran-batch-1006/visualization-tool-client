import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiURL = 'http://3.226.243.38:8081/category/';

  constructor(private httpClient: HttpClient) { }

  getCategories(){
    return this.httpClient.get<Object[]>(this.apiURL);
  }

  addCategory(bodyObject: object){
    return this.httpClient.post<Object[]>(this.apiURL,
    bodyObject);
  }

  updateCategory(id: number, bodyObject: object){
    return this.httpClient.put<Object[]>(this.apiURL+id,
    bodyObject);
  }

  deleteCategory(id: number, bodyObject: object){
    return this.httpClient.delete<Object[]>(this.apiURL+id,
    bodyObject);
  }
}
