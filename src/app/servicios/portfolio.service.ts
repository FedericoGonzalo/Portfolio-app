import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
URL='http://localhost:8080/';


constructor(private http:HttpClient) { }

  obtenerDatos():Observable<Persona>{
    return this.http.get<Persona>(this.URL+'api/personas/persona/ver/1');
 
 
  
  }

editPersona(persona:Persona):Observable<Persona>{
 return this.http.put<any>(this.URL+ 'api/personas/persona/editar/1',persona);
}


getUsers():Observable<any>{
   return this.http.get<any>('https://reqres.in/api/users?page=2');  
  }
 


  



}