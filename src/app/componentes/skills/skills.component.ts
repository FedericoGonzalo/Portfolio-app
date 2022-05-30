import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HardSkill } from 'src/app/modelos/hardSkill';
import { Skill } from 'src/app/modelos/skill';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  hardSkillsList: HardSkill[] = [];
  hardSkillForm: FormGroup;
  softSkillsList: Skill[] = [];
  softSkillForm: FormGroup;

  constructor(private datosPortFolio: PortfolioService,
              private formBuilder: FormBuilder,
             private formBuilder2: FormBuilder,
              ) {
     
      this.hardSkillForm = this.formBuilder.group({
      porcentajeHardSkill: ['', [Validators.required, Validators.max(100)]],
      nombreHardSkill: ['', [Validators.required]],
      });
      this.softSkillForm=this.formBuilder2.group({
        nombreSkill:['', [Validators.required]],
      })
     
  }





  ngOnInit(): void {
    this.datosPortFolio.obtenerHardSkills().subscribe(data => {
      //console.log(data);
      this.hardSkillsList = data
    });
    this.datosPortFolio.obtenerSoftSkills().subscribe(data => {
      //console.log(data);
      this.softSkillsList = data
    })
  }
  
  //Hard Skill
  
  onSubmitHardSkill() {
    this.datosPortFolio.agregarHardSkill(this.hardSkillForm.value).subscribe(data => {
      console.log(this.hardSkillForm.value);
      this.ngOnInit();
    })
  }

  borrarHardSkill(index: number) {
    let hardSkill: HardSkill = this.hardSkillsList[index];

    if (confirm("¿Está seguro que desea borrar la HARD SKILL seleccionada?")) {
      this.datosPortFolio.borrarHardSkill(hardSkill.idHardSkill).subscribe((data) => {

        this.ngOnInit();
      })
    }


  }

//Soft Skill

onSubmitSoftSkill() {
  this.datosPortFolio.agregarSoftSkill(this.softSkillForm.value).subscribe(data => {
    console.log(this.softSkillForm.value);
    this.ngOnInit();
  })
}
borrarSoftSkill(index:number){
  let softSkill: Skill = this.softSkillsList[index];

  if (confirm("¿Está seguro que desea borrar la SOFT SKILL seleccionada?")) {
    this.datosPortFolio.borrarSoftSkill(softSkill.idSkill).subscribe((data) => {

      this.ngOnInit();
    })
  }
}

}
