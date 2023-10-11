import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent {

  mostrarCarros : Boolean = false;

  ngOnInit(){
    this.mostrarCarros = true;
  }

  constructor(private router : Router){

  }

  onClickMostraPatios(){
    this.mostrarCarros = false;
    this.router.navigate(['/protected/patios'])
  }
}
