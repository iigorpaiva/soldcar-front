import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';
import { RegisterComponent } from 'src/app/protected/dashboard/dashboard-components/product/register/register.component';
import { UserService } from '../../../_services/user.service';
import { SoldcarUser } from './../../../_models/user';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  animal!: string;
  name!: string;

  displayedColumns: string[] = ['id', 'login', 'email', 'nome', 'sobrenome', 'role'];
  dataSource : MatTableDataSource<SoldcarUser> = new MatTableDataSource<SoldcarUser>([]);

  isProtectedTableRoute: boolean = false;

  constructor(
    public dialog: MatDialog,
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
      this.changeDetectorRef.detectChanges();
    });
  }


  openDialog(): void {
    let dialogRef = this.dialog.open(RegisterComponent, {
      width: '400px',
      data: { data: this.dataSource }
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.dataSource = result;
    });
  }

}
