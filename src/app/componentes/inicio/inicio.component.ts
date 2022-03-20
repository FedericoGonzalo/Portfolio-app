import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usersList:any;
  constructor(private datosPerfiles:PortfolioService) { }

  ngOnInit(): void {
    this.datosPerfiles.getUsers().subscribe(datos => {
     console.log(datos);
      this.usersList = datos.data;
    });
  }
}


