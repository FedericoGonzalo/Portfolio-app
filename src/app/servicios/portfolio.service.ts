import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia';
import { Persona } from '../modelos/persona';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
URL='http://localhost:8080/';



constructor(private http:HttpClient) { }






obtenerDatos():Observable<any>{
    return this.http.get<any>(this.URL+'api/personas/persona/ver/1');
 
 
  
  }

editPersona(persona:Persona):Observable<any>{
 return this.http.put<any>(this.URL+ 'api/personas/persona/editar/1',persona);
}


//experiencia
agregarExperiencia(experiencia:Experiencia):Observable<any>{
  return this.http.post<any>(this.URL+ 'api/personas/persona/ver/1/newExperiencia',experiencia);
}
 


  



}