import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})




export class ExperienciaComponent implements OnInit {

  expererienciaList:any;
  newExpForm: FormGroup;
 



 constructor(private datosPortfolio:PortfolioService,
             private formBuilder: FormBuilder) {
              
               this.newExpForm=this.formBuilder.group({
                puesto:[''], 
                descripcion:[''],
                empresa:[''],
                fechaInicio:['dd/mm/aaaa'],
                fechaFin:['dd/mm/aaaa']
               
               });
                 this.expererienciaList;
                
         
             }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
     console.log(data) 
     this.expererienciaList=data.experiencias;
    })
  }



  onSubmitNewExp(){
  
    this.datosPortfolio.agregarExperiencia(this.newExpForm.value).subscribe(data=>{
      console.log(this.newExpForm.value);
      this.ngOnInit();
      });   ;
  
  }
}
