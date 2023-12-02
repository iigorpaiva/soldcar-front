import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LOCALSTORAGE_TOKEN_KEY, LOCALSTORAGE_USER_ROLE } from 'src/app/app.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  userRoles !: string[];
  isUserAdmin : boolean | undefined;

  constructor(
    private router : Router  ) {

    this.getUserRoles();

    this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {}
    });

  }

  logout() {
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
    this.router.navigate(['../../']);
  }

  getUserRoles(){
    const userRoles = localStorage.getItem(LOCALSTORAGE_USER_ROLE);
    const clonedRoles = userRoles?.slice(1, -1);
    const rolesArray = clonedRoles?.split(', ');

    this.isUserAdmin = rolesArray?.includes('ROLE_ADMIN');

    return rolesArray || [];
  }
}
