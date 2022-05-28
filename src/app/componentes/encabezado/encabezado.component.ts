import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/modelos/persona';

import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
   miPortfolio:any;
   personaForm: FormGroup;
  
   
  constructor(private datosPorfolio:PortfolioService,
              private formBuilder: FormBuilder,
              ) {
             this.personaForm=this.formBuilder.group({
              
              nombre:  ['',[Validators.required]],
              apellido:  ['',[Validators.required]],
              residencia:  ['',[Validators.required]],
              urlResidencia:  ['',[Validators.required,Validators.pattern('https?://.+')]],
              nacimiento:  ['DATE',[Validators.required]],
              fotoUrl:  ['',[Validators.required,Validators.pattern('https?://.+')]],
              imgHeaderUrl:  ['',[Validators.required,Validators.pattern('https?://.+')]],
              acercaTexto:  ['',[Validators.required]],
              textoUsuario:  ['',[Validators.required]],
              
             });
          
      
            }
 

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
    // console.log(data);
      this.miPortfolio=data;
    });  
  }
  mostrarDatosEncabezado(){
    this.personaForm.get("nombre")?.setValue(this.miPortfolio.nombre);
    this.personaForm.get("apellido")?.setValue(this.miPortfolio.apellido);
    this.personaForm.get("residencia")?.setValue(this.miPortfolio.residencia);
    this.personaForm.get("urlResidencia")?.setValue(this.miPortfolio.urlResidencia);
    this.personaForm.get("fotoUrl")?.setValue(this.miPortfolio.fotoUrl);
    this.personaForm.get("imgHeaderUrl")?.setValue(this.miPortfolio.imgHeaderUrl);
    this.personaForm.get("acercaTexto")?.setValue(this.miPortfolio.acercaTexto);
    this.personaForm.get("textoUsuario")?.setValue(this.miPortfolio.textoUsuario);
    this.personaForm.get("nacimiento")?.setValue(this.miPortfolio.nacimiento);
    
   
  }

  onSubmit() { 
   
   
 this.datosPorfolio.editPersona(this.personaForm.value) .subscribe(data=>{
  console.log(this.personaForm.value);
  this.ngOnInit();
  });   ;
    }
  
 

  


 
  
  

}





