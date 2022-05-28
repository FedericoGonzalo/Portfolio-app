import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Formacion } from 'src/app/modelos/formacion';

import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})






export class EducacionComponent implements OnInit {
 formacionList:Formacion[]=[];
 newFormacionForm:FormGroup;
 editFormacionForm:FormGroup;

  constructor(private datosPortfolio:PortfolioService,
              private newFormacionBuilder:FormBuilder,
              private editFormacionBuilder:FormBuilder,) { 
                
                
                this.newFormacionForm=this.newFormacionBuilder.group({
                  nombreTitulo:['TITULO', [Validators.required]],
                  nombreInstituto: ['INSTIUTO', [Validators.required]],
                  fechaInicio:['10/10/22', [Validators.required]],
                  fechaFin: ['10/10/22', [Validators.required]],
                  finalizado: ['', [Validators.required]],
                });
                this.editFormacionForm=this.editFormacionBuilder.group({
                  idFormacion: ['', [Validators.required]],
                  nombreTitulo:['', [Validators.required]],
                  nombreInstituto: ['', [Validators.required]],
                  fechaInicio:['', [Validators.required]],
                  fechaFin: ['', [Validators.required]],
                  finalizado: ['', [Validators.required]],
                  
                })



              }

  ngOnInit(): void {
    this.datosPortfolio.obternerFormaciones().subscribe(data=>{
      console.log(data)
      this.formacionList=data;
    })
  }

onSubmitFormacion(){
  this.datosPortfolio.agregarFormacion(this.newFormacionForm.value).subscribe(data=>{
    console.log(this.newFormacionForm.value),
    location.reload();
 })

}
onSubmitEditFormacion(){
  this.datosPortfolio.editarFormacion(this.editFormacionForm.value).subscribe(data=>{
    console.log(this.newFormacionForm.value),
    location.reload();
 })

}

mostrarDatosFormacion(index:number){
  this.editFormacionForm.get("idFormacion")?.setValue(this.formacionList[index].idFormacion);
  this.editFormacionForm.get("nombreTitulo")?.setValue(this.formacionList[index].nombreTitulo);
  this.editFormacionForm.get("nombreInstituto")?.setValue(this.formacionList[index].nombreInstituto);
  this.editFormacionForm.get("fechaInicio")?.setValue(this.formacionList[index].fechaInicio);
  this.editFormacionForm.get("fechaFin")?.setValue(this.formacionList[index].fechaFin);
  this.editFormacionForm.get("finalizado")?.setValue(this.formacionList[index].finalizado);
}

borrarFormacion(index:number){
  let formacion:Formacion=this.formacionList[index];
  if(confirm("¿Está seguro que desea borrar la Formacion seleccionado?")){
    this.datosPortfolio.borrarFormacion(formacion.idFormacion).subscribe((data) => {

      location.reload();
    })
  }

}







}
