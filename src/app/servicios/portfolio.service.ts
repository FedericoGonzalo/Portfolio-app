import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get<any>('https://argprogbackend.herokuapp.com/api/personas/persona/ver/1');
  }


  getUsers():Observable<any>{
   return this.http.get<any>('https://reqres.in/api/users?page=2');  
  }
 
 /* editUserNombre(user: any): Observable<any>{
    return this.http.put('localhost:8080/api/personas/persona/editar/{{miPorfolio.idPersona}}/nombre', user);
  }
      */

  editNombre(nombre:any):Observable<any>{
    return this.http.put<any>('https://argprogbackend.herokuapp.com/api/personas/persona/editar/1/nombre',nombre);  
   }


   editApellido(data:any):Observable<any>{
    return this.http.put<any>('https://argprogbackend.herokuapp.com/api/personas/persona/editar/1/apellido',data);  
   }
   editNacimiento(data:any):Observable<any>{
    return this.http.put<any>('https://argprogbackend.herokuapp.com/api/personas/persona/editar/1/nac',data);  
   }

   editFotoUrl(data:any):Observable<any>{
    return this.http.put<any>('https://argprogbackend.herokuapp.com/api/personas/persona/editar/1/foto',data);  
   }

   editImgHeader(data:any):Observable<any>{
    return this.http.put<any>('https://argprogbackend.herokuapp.com/api/personas/persona/editar/1/img',data);  
   }

   editAcercaTexto(data:any):Observable<any>{
    return this.http.put<any>('https://argprogbackend.herokuapp.com/api/personas/persona/editar/1/acercaTXT',data);  
   }

   editResidencia(data:any):Observable<any>{
    return this.http.put<any>('https://argprogbackend.herokuapp.com/api/personas/persona/editar/1/residencia',data);  
   }

   editUrlResidencia(data:any):Observable<any>{
    return this.http.put<any>('https://argprogbackend.herokuapp.com/api/personas/persona/editar/1/urlResidencia',data);  
   }
   
   /*  acerca de  */

   editAcercaPersona(data:any):Observable<any>{
    return this.http.post<any>('https://argprogbackend.herokuapp.com/api/personas/persona/ver/1/edit/AcercaPersona',data);  
   }
   



}