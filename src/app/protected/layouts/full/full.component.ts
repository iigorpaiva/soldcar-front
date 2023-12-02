import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LOCALSTORAGE_TOKEN_KEY, LOCALSTORAGE_USER_ROLE } from 'src/app/app.module';
import { AuthService } from 'src/app/public/services/auth.service';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {

  userLoginName!: string;
  userDetail!: string;
  search: boolean = false;

  isUserAdmin : boolean | undefined;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authService: AuthService) {
      this.getUserRoles();
    }

  ngOnInit(){
    this.checkUser();
  }

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [
    {
      link: "/protected/home",
      icon: "home",
      menu: "Dashboard",
    },
    {
      link: "/protected/usuarios",
      icon: "users",
      menu: "Usuários",
    },
    {
      link: "/protected/patios",
      icon: "flag",
      menu: "Pátios",
    }
  ]

  logout() {
    // Removes the jwt token from the local storage, so the user gets logged out & then navigate back to the "public" routes
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
    this.router.navigate(['public/login']);
  }

  checkUser(){
    this.userDetail = this.authService.getLoggedInUser();
    const subValue = this.userDetail['sub'];
    this.userLoginName = `${subValue}`;
  }

  getUserRoles(){
    const userRoles = localStorage.getItem(LOCALSTORAGE_USER_ROLE);
    const clonedRoles = userRoles?.slice(1, -1);
    const rolesArray = clonedRoles?.split(', ');

    this.isUserAdmin = rolesArray?.includes('ROLE_ADMIN');

    return rolesArray || [];
  }

}
