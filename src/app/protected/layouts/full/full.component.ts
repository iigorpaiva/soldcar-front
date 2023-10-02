import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';

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

  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router) { }

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [
    {
      link: "/protected/home",
      icon: "home",
      menu: "Dashboard",
    },
    {
      link: "/protected/table",
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

}
