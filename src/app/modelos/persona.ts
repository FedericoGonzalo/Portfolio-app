import { Experiencia } from "./experiencia";
import { HardSkill } from "./hardSkill";
import { Proyecto } from "./proyecto";
import { Skill } from "./skill";
import { Formacion } from "./formacion";

export interface Persona{
 
    idPersona?: number;
    nombre: String;
    apellido: String;
    residencia: String;
    urlResidencia: String;
    nacimiento:String;
    fotoUrl: String;
    imgHeaderUrl: String;
    acercaTexto:String;
    acercaPersona: {
        idAcercaPersona: number;
        textoAcerca: String;
       };
    experiencias:Experiencia[];
    proyectos:Proyecto [ ];
    skills: Skill [];
    hardSkills: HardSkill[ ];
    formaciones: Formacion  [ ];

}