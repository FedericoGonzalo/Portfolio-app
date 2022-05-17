import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
proyectoList:any;
  constructor(private datosPortFolio:PortfolioService) { }

  ngOnInit(): void {
  this.datosPortFolio.obtenerDatos().subscribe(data=>{console.log(data),
  this.proyectoList=data.proyectos;})
  
  }

}
