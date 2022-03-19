import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  users:any;
  constructor(private perfiles:PortfolioService) { }

  ngOnInit(): void {
    this.perfiles.getUsers().subscribe(data => {
     console.log(data);
      this.users = data;
    });
  }
}