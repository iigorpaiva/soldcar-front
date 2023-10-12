import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CadastroComponent } from 'src/app/protected/dashboard/dashboard-components/usuarios/cadastro-dialog/cadastro-dialog.component';
import { SoldcarUser } from '../../../_interfaces/user-interfaces';
import { UserService } from '../../../_services/user/user.service';
import { DelecaoDialogComponent } from './delecao-dialog/delecao-dialog.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  animal!: string;
  name!: string;
  usuarioSelecionadoId: number | null = null;

  displayedColumns: string[] = ['id', 'login', 'email', 'nome', 'sobrenome', 'role', 'ações'];
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


  abrirDialogCadsatro(): void {
    let dialogRef = this.dialog.open(CadastroComponent, {
      width: '400px',
      data: { data: this.dataSource }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscaTodosOsUsuarios();
    });
  }

  abrirDelecaoDialog(idUsuario: number, nomeUsuario: string): void {
    if (idUsuario !== null) {
      const dialogRef = this.dialog.open(DelecaoDialogComponent, {
        data: { idUsuario, nomeUsuario }
      });

      dialogRef.afterClosed().subscribe(result => {
        this.buscaTodosOsUsuarios();
      });
    } else {
      // Lidar com o caso em que nenhuma linha foi selecionada
      console.log('Nenhum usuário selecionado para exclusão.');
    }

  }

}
