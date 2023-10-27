import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent {

  mostrarCarros : Boolean = false;
  patioId : Number | undefined;

  private route = inject(ActivatedRoute);

  constructor(
    private router : Router){
  }

  ngOnInit(){
    this.mostrarCarros = true;

    this.route.params.subscribe((params) => {

    this.patioId = +params['patioId'];
    console.log('ID do Pátio:', this.patioId);
  });}

  onCliclMostrarPatios(){
    this.router.navigate(['/protected/patios/refresh']).then(() => {
      this.router.navigate(['/protected/patios']);
    });
  }
}
