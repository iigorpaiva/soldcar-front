import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatioResponse } from './../../../_interfaces/patio-Interfaces';
import { PatioService } from './../../../_services/patio/patio.service';

@Component({
  selector: 'app-patios',
  templateUrl: './patios.component.html',
  styleUrls: ['./patios.component.scss']
})
export class PatiosComponent {

  patioList !: PatioResponse[];
  mostrarPatios : Boolean = true;
  mostrarCarros : Boolean = false;


  constructor(
    private patioService  : PatioService,
    public dialog: MatDialog,
    private router : Router){
  }

  ngOnInit(){
    this.mostrarPatios = true;
    this.buscarTodosOsPatios();
  }

  buscarTodosOsPatios(){
    return this.patioService.buscarTodosOsPatios().subscribe((data: any) => {
      this.patioList = data;
    })
  }

  onClickEntrarNoPatio(){
    this.mostrarPatios = false;
    this.mostrarCarros = true;
    this.router.navigate(['protected/patios/carros'])
  }

}
