import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/modelos/experiencia';


import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})




export class ExperienciaComponent implements OnInit {

  experienciaList:Experiencia[]=[];

  expeNewForm: FormGroup;
  expeEditForm: FormGroup;

  constructor(private datosPortfolio: PortfolioService,
    private newExperienciaBuilder: FormBuilder,
    private editExperienciaBuilder: FormBuilder,) {


    this.expeNewForm = this. newExperienciaBuilder.group({
     
      puesto: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],

      logoEmpresa: ['', [Validators.required]]


    });

    this.expeEditForm=this.editExperienciaBuilder.group({
    idExperiencia: [''],
    puesto: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    empresa: ['', [Validators.required]],
    fechaInicio: ['', [Validators.required]],
    fechaFin: ['', [Validators.required]],
    logoEmpresa: ['', [Validators.required]]
});
   


  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerExperiencias().subscribe(
      (data) => {
        this.experienciaList = data;
      }
    );
  }



  
  cargarEditForm(index:number) {
    
    this.expeEditForm.get("idExperiencia")?.setValue(this.experienciaList[index].idExperiencia);
    this.expeEditForm.get("puesto")?.setValue(this.experienciaList[index].puesto);
    this.expeEditForm.get("descripcion")?.setValue(this.experienciaList[index].descripcion);
    this.expeEditForm.get("empresa")?.setValue(this.experienciaList[index].empresa);
    this.expeEditForm.get("fechaInicio")?.setValue(this.experienciaList[index].fechaInicio);
    this.expeEditForm.get("fechaFin")?.setValue(this.experienciaList[index].fechaFin);
    this.expeEditForm.get("logoEmpresa")?.setValue(this.experienciaList[index].logoEmpresa);
   


  }

  


  onSubmitNew() {
  

    this.datosPortfolio.agregarExperiencia(this.expeNewForm.value).subscribe(
      () => {
        location.reload();
      }
    );
  }



  onSubmitEdit() {
    

    this.datosPortfolio.editarExperiencia(this.expeEditForm.value).subscribe(() => {
      location.reload();
    }
    );

  }


  

 

  borrarExperiencia(index: number) {
    let experiencia: Experiencia = this.experienciaList[index];
    if (confirm("¿Está seguro que desea borrar la experiencia seleccionada?")) {
      this.datosPortfolio.borrarExperiencia(experiencia.idExperiencia).subscribe((data) => {
        location.reload();
      }
      );
  
    }

  }
}
