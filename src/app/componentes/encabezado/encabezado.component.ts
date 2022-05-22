
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
              private formBuilder: FormBuilder ) {
             this.personaForm=this.formBuilder.group({
              idPersona: [''],
              nombre:  [''],
              apellido:  [''],
              residencia:  [''],
              urlResidencia:  [''],
            nacimiento:  [''],
              fotoUrl:  [''],
              imgHeaderUrl:  [''],
              acercaTexto:  [''],
              textoUsuario:  [''],
              experiencias: [''],
              proyectos:  [''],
              skills:  [''],
              hardSkills:  [''],
              formaciones:  [''],
             });
               }
 

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
     // console.log(data);
      this.miPortfolio=data;
    });  
  }

  private reloadData() {
    this.datosPorfolio.obtenerDatos().subscribe(
      (data) => {
        this.miPortfolio = data;
      }
    );
  }

  

  private loadForm(persona:Persona) {
    this.personaForm.setValue({
     
      nombre:persona.nombre,
      apellido: persona.apellido,
      foto: persona.fotoUrl,
      residencia:persona.residencia,
     urlResidencia: persona.urlResidencia,
     acercaTexto:persona.acercaTexto,
     textoUsuario:persona.textoUsuario,

    })
  }

 
  
  

}





