import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RegisterComponent } from 'src/app/protected/dashboard/dashboard-components/usuarios/register/register.component';
import { SoldcarUser } from '../../../_interfaces/user-interfaces';
import { UserService } from '../../../_services/user/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

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
    this.isProtectedTableRoute = this.router.url === '/protected/usuarios';
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
      this.buscaTodosOsUsuarios();
    });
  }

}
