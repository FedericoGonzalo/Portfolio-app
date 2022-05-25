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

  experienciaList: Experiencia[] = [];

  expeForm: FormGroup;


  constructor(private datosPortfolio: PortfolioService,
    private formBuilder: FormBuilder) {


    this.expeForm = this.formBuilder.group({
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



  vaciarForm() {
    this.expeForm.setValue({

      idExperiencia: '',
      puesto: '',
      descripcion: '',
      empresa: '',
      fechaInicio: '',
      fechaFin: ''

    })
  }
  cargarEditForm(experiencia: Experiencia) {
    this.expeForm.get("idExperiencia")?.setValue(experiencia.idExperiencia);
    this.expeForm.get("puesto")?.setValue(experiencia.puesto);
    this.expeForm.get("descripcion")?.setValue(experiencia.descripcion);
    this.expeForm.get(" empresa")?.setValue(experiencia. empresa);
    this.expeForm.get(" fechaInicio")?.setValue(experiencia. fechaInicio);
    this.expeForm.get("fechaFin")?.setValue(experiencia.fechaFin);
    this.expeForm.get("logoEmpresa")?.setValue(experiencia.logoEmpresa);
   


  }

  


  onSubmitNew() {
    let experiencia: Experiencia = this.expeForm.value;

    this.datosPortfolio.agregarExperiencia(experiencia).subscribe(
      () => {
        this.ngOnInit;
      }
    );
  }



  onSubmit() {
    let experiencia: Experiencia = this.expeForm.value;

    this.datosPortfolio.editarExperiencia(experiencia).subscribe(() => {
      this.ngOnInit;
    }
    );

  }


  onNuevaExperiencia() {
    this.vaciarForm();
  }



  onEditExperiencia(index: number) {
    let experiencia: Experiencia = this.experienciaList[index];
    this.cargarEditForm(experiencia);
  }

  onDelExperiencia(index: number) {
    let experiencia: Experiencia = this.experienciaList[index];
    if (confirm("¿Está seguro que desea borrar la experiencia seleccionada?")) {
      this.datosPortfolio.borrarExperiencia(experiencia.idExperiencia).subscribe((data) => {
        this.ngOnInit;
      }
      );
  
    }

  }
}
