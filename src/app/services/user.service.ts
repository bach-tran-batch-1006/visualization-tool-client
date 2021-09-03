import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserDTO } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:UserDTO = {
    id: 0,
    email: ''
  }


  // apiURL = 'http://3.226.243.38:8081/category/';

  apiURL = 'http://localhost:8090/user';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  // getCategories(): Observable<Category[]>{
  //   return this.httpClient.get<Category[]>(this.apiURL);
  // }


  //MAKE SURE MATCHING ENDPOINTS FROM BACKEND
  register(first:string, last:string, email:string, pass:string): Observable<User> {
    return this.httpClient.post<User>(this.apiURL + 
      '/register', JSON.stringify({first,last,email,pass}), this.httpOptions);
  }
  //MAKE SURE MATCHING ENDPOINTS FROM BACKEND

  login(email:string, pass:string): Observable<User> {
    return this.httpClient.post<User>(this.apiURL + 
      '/login', JSON.stringify({email,pass}), this.httpOptions);
  }

  // updateCategory(id: number, bodyObject: object): Observable<Category>{
  //   return this.httpClient.put<Category>(this.apiURL + id, bodyObject, this.httpOptions);
  // }

  // deleteCategory(id: number): Observable<number>{
  //   return this.httpClient.delete<number>(this.apiURL + id);
  // }
}
