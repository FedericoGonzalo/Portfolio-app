import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HardSkill } from 'src/app/modelos/hardSkill';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

hardSkillsList:HardSkill[]=[];
hardSkillForm:FormGroup;

  constructor(private datosPortFolio:PortfolioService,
              private formBuilder: FormBuilder,
            ) {  this.hardSkillForm=this.formBuilder.group({
               
                porcentajeHardSkill: ['',[Validators.required]],
                nombreHardSkill:['',[Validators.required]],
              }) }

 
 
 
 
  ngOnInit(): void {
     this.datosPortFolio.obtenerHardSkills().subscribe(data=>{
       //console.log(data);
     this.hardSkillsList=data
    })
  }
  onSubmitHardSkill(){
    this.datosPortFolio.agregarHardSkill(this.hardSkillForm.value).subscribe(data=>{
      console.log(this.hardSkillForm.value);
      this.ngOnInit();
      });   ;
  }

borrarHardSkill(index:number){
  let hardSkill:HardSkill=this.hardSkillsList[index];
 
  if (confirm("¿Está seguro que desea borrar la HARD SKILL seleccionada?")){ this.datosPortFolio.borrarHardSkill(hardSkill.idHardSkill).subscribe((data)=>{
 
    this.ngOnInit();
    })}
 

}





}
