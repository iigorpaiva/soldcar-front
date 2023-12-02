import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarroResponse } from './../../../../_interfaces/carro-interface';
import { PatioService } from './../../../../_services/carro/carro.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent {

  carroList !: CarroResponse[];

  mostrarCarros : Boolean = false;
  patioId : Number | undefined;

  private route = inject(ActivatedRoute);

  constructor(
    private router : Router,
    private PatioService : PatioService){
  }

  ngOnInit(){
    this.mostrarCarros = true;

    this.route.params.subscribe((params) => {

    this.patioId = +params['patioId'];
    this.carregarCarros(this.patioId);
    console.log("carros carregados: ", this.carroList);
  });}

  onClickMostrarPatios(){
    this.router.navigate(['/protected/patios/refresh']).then(() => {
      this.router.navigate(['/protected/patios']);
    });
  }

  carregarCarros(patioId: Number){
    this.PatioService.buscarCarrosPorPatio(patioId).subscribe(carros => {
      this.carroList = carros;
      console.log('Carros retornados do serviço:', carros);
    });
  }

  removerPrefixoSrc(caminhoFotos: string): string {
    console.log("VAMO VER: ", caminhoFotos.replace('src/', '') + '/foto1.webp');
    // Remove o prefixo "src/" do caminho e concatena com "/foto1.webp"
    return caminhoFotos.replace('src/', '') + '/foto1.webp';
  }
}
