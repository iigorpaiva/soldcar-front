import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  navigateToCarros(patioId: Number) {
    this.router.navigate(['/protected/patios/carros', patioId]);
  }
}
