import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
 // url=" http://localhost:8080/api/auth/login";
  url=" https://beargprog.herokuapp.com/api/auth/login";
  currentUsersSubject:BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
  //  console.log("el servicio de no se que esta no se que");
    this.currentUsersSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }
  IniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUsersSubject.next(data);
      return data;
    }))
  }
  get UsuarioAutenticado(){
    return this.currentUsersSubject.value;
  }
}
