import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Proyecto } from 'src/app/modelos/proyecto';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
proyectoList:Proyecto[]=[];
newProyectoForm: FormGroup;
editProyectoForm:FormGroup;

  constructor(private datosPortFolio:PortfolioService,
              private newFormBuilder: FormBuilder,
              private editFormBuilder: FormBuilder,) { 
             this.newProyectoForm=this.newFormBuilder.group({
              nombre: ['TITULO', [Validators.required]],
              fechaRealizacion:  ['9/5/1945', [Validators.required]],
              descripcion: ['DESCRIPCION DEL PROYECTO', [Validators.required]],
              urlProyecto: ['https://www.google.com/', [Validators.required]],
              urlImagenProyecto: ['https://p4.wallpaperbetter.com/wallpaper/279/539/729/grumpy-cat-anime-cat-random-access-memories-wallpaper-preview.jpg', [Validators.required]],

             });

             this.editProyectoForm=this.editFormBuilder.group({
              idProyecto: ['', [Validators.required]],
              nombre:['', [Validators.required]],
              fechaRealizacion: ['', [Validators.required]],
              descripcion:['', [Validators.required]],
              urlProyecto:['', [Validators.required]],
              urlImagenProyecto:['', [Validators.required]],
             })


              }

  ngOnInit(): void {
  this.datosPortFolio.obtenerProyectos().subscribe(data=>{
    //console.log(data),
  this.proyectoList=data;})
  
  }

onSubmitProyecto(){
  this.datosPortFolio.agregarProyecto(this.newProyectoForm.value).subscribe(data=>{
   console.log(this.newProyectoForm.value),
   location.reload();
})
}



onSubmitEditProyecto(){
this.datosPortFolio.editarProyecto(this.editProyectoForm.value).subscribe(data=>{
  console.log(this.editProyectoForm.value),
this.ngOnInit();
})
}
mostrarDatosProyecto(index:number)
{
  

  this.editProyectoForm.get("idProyecto")?.setValue(this.proyectoList[index].idProyecto);
  this.editProyectoForm.get("nombre")?.setValue(this.proyectoList[index].nombre);
  this.editProyectoForm.get(" fechaRealizacion")?.setValue(this.proyectoList[index].fechaRealizacion);
  this.editProyectoForm.get("descripcion")?.setValue(this.proyectoList[index].descripcion);
  this.editProyectoForm.get("urlProyecto")?.setValue(this.proyectoList[index]. urlProyecto);
  this.editProyectoForm.get("urlImagenProyecto")?.setValue(this.proyectoList[index].urlImagenProyecto);

/* this.editProyectoForm.setValue({
    idProyecto:this.proyecto.idProyecto,
    nombre:proyecto.nombre,
    fechaRealizacion:proyecto.fechaRealizacion,
    descripcion:proyecto.descripcion,
    urlProyecto:proyecto.urlProyecto,
    urlImagenProyecto:proyecto.urlImagenProyecto,
  })*/
}

borrarProyecto(index:number){
let proyecto:Proyecto=this.proyectoList[index];
if (confirm("¿Está seguro que desea borrar la Proyecto seleccionado?")) {
  this.datosPortFolio.borrarProyecto(proyecto.idProyecto).subscribe((data) => {

    this.ngOnInit();
  })
}


}

}
