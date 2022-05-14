import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/personas/persona/ver/1');
  }


  getUsers():Observable<any>{
   return this.http.get<any>('https://reqres.in/api/users?page=2');  
  }
 
 
      
}