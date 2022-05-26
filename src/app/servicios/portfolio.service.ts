import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia';
import { HardSkill } from '../modelos/hardSkill';
import { Persona } from '../modelos/persona';
import { Skill } from '../modelos/skill';



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
//

}