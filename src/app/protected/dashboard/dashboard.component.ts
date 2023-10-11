import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    private router: Router
  ) {
    // Inscreva-se no evento NavigationEnd
    this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      console.log('Rota atual:', event.url);
    }
  });
  }

  logout() {
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
    this.router.navigate(['../../']);
  }

}
