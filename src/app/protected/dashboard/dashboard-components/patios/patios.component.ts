import { Component } from '@angular/core';
import { PatioResponse } from './../../../_interfaces/patio-Interfaces';
import { PatioService } from './../../../_services/patio/patio.service';

@Component({
  selector: 'app-patios',
  templateUrl: './patios.component.html',
  styleUrls: ['./patios.component.scss']
})
export class PatiosComponent {

  patioList !: PatioResponse[];

  constructor(private patioService  : PatioService){
  }

  ngOnInit(){
    this.buscarTodosOsPatios();
  }

  buscarTodosOsPatios(){
    return this.patioService.buscarTodosOsPatios().subscribe((data: any) => {
      this.patioList = data;
    })
  }

}
