import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia';
import { Formacion } from '../modelos/formacion';
import { HardSkill } from '../modelos/hardSkill';
import { Persona } from '../modelos/persona';
import { Proyecto } from '../modelos/proyecto';
import { Skill } from '../modelos/skill';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
URL='https://tpobackendargprog.herokuapp.com/';



constructor(private http:HttpClient) { }



//Persona si da tiempo hago que reciba solo dto


obtenerDatos():Observable<any>{
    return this.http.get<Persona>(this.URL+'api/personas/persona/ver/1');
 
 
  
  }

editPersona(persona:Persona):Observable<any>{
 return this.http.put<any>(this.URL+ 'api/personas/persona/editar/1',persona);
}


//experiencia
obtenerExperiencias():Observable<any>{
  return this.http.get<any>(this.URL+'api/personas/persona/ver/1/listExperiencia')
}

agregarExperiencia(experiencia:Experiencia):Observable<Experiencia>{
  return this.http.post<Experiencia>(this.URL+ 'api/personas/persona/ver/1/newExperiencia',experiencia);
}
 editarExperiencia(experiencia:Experiencia):Observable<Experiencia>{
   return this.http.put<Experiencia>(this.URL+ 'api/personas/persona/ver/1/editExpe',experiencia);
 }

borrarExperiencia(idExperiencia:number){
  return this.http.delete<any>(this.URL+ 'api/personas/persona/ver/delExp/'+idExperiencia);
}
  
//HARD SKILLS

obtenerHardSkills():Observable<any>{
  return  this.http.get<any>(this.URL+'api/personas/persona/ver/1/listahSkill')
}
agregarHardSkill(hardSkill:HardSkill):Observable<Experiencia>{
  return this.http.post<Experiencia>(this.URL+ 'api/personas/persona/ver/1/newHSkill',hardSkill);
}
borrarHardSkill(idHardSkill:number){
  return this.http.delete<any>(this.URL+ 'api/personas/persona/ver/delHSkill/'+idHardSkill);
}
//SOFT SKILLS
obtenerSoftSkills():Observable<any>{
  return this.http.get<any>(this.URL+'api/personas/persona/ver/1/listSkill')
}
agregarSoftSkill(softSkill:Skill):Observable<Skill>{
  return this.http.post<Skill>(this.URL+ 'api/personas/persona/ver/1/newSkill',softSkill);
}
borrarSoftSkill(idSkill:number){
  return this.http.delete<any>(this.URL+ 'api/personas/persona/ver/delSkill/'+idSkill);
}
//PROYECTOS
obtenerProyectos():Observable<any>{
  return this.http.get<any>(this.URL+ 'api/personas/persona/ver/1/listaProyecto');
}
agregarProyecto(proyecto:Proyecto):Observable<Proyecto>{
  return this.http.post<Proyecto>(this.URL+'api/personas/persona/ver/1/newProyecto',proyecto);
}
borrarProyecto(idProyecto:number){
  return this.http.delete<any>(this.URL+ 'api/personas/persona/ver/delProyecto/'+idProyecto);
}
editarProyecto(proyecto:Proyecto):Observable<Proyecto>{
  return this.http.put<Proyecto>(this.URL+ 'api/personas/persona/ver/1/listaProyectoEdit',proyecto);
}

//FORMACION
obternerFormaciones():Observable<any>{
  return  this.http.get<any>(this.URL+ 'api/personas/persona/ver/1/listFormacion');
}

agregarFormacion(formacion:Formacion):Observable<Formacion>{
  return this.http.post<Formacion>(this.URL+'api/personas/persona/ver/1/newFormacion',formacion);

}
borrarFormacion(idFormacion:number):Observable<any>{
  return this.http.delete<any>(this.URL+'api/personas/persona/ver/delFormacion/'+idFormacion);
}
editarFormacion(formacion:Formacion):Observable<Formacion>{
  return this.http.put<Formacion>(this.URL+'api/personas/persona/ver/1/editFormacion',formacion)
}



}
