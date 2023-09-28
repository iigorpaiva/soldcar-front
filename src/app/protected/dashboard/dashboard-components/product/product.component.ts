import { UserService } from '../../../_services/user.service';
import { SoldcarUser } from './../../../_models/user';
import { NavigationEnd, Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['id', 'login', 'email', 'nome', 'sobrenome', 'role'];
  dataSource : MatTableDataSource<SoldcarUser> = new MatTableDataSource<SoldcarUser>([]);

  isProtectedTableRoute: boolean = false;

  constructor(
    private router: Router,
    private UserService: UserService,
    private changeDetectorRef: ChangeDetectorRef
    ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isProtectedTableRoute = event.url === '/protected/table';
      }
    });
  }

  ngOnInit(): void {
    this.buscaTodosOsUsuarios();
  }

  buscaTodosOsUsuarios() {
    this.UserService.buscarTodosOsUsuarios().subscribe((usuarios) => {
      this.dataSource = usuarios;
      console.log("usuarios: ", usuarios);
      console.log("datasource: ", this.dataSource.data);
      this.changeDetectorRef.detectChanges();
    });
  }

}
