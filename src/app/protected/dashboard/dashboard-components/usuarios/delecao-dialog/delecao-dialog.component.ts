import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/protected/_services/user/user.service';

@Component({
  selector: 'app-delecao-dialog',
  templateUrl: './delecao-dialog.component.html',
  styleUrls: ['./delecao-dialog.component.scss']
})
export class DelecaoDialogComponent {

  userId!: number; // Variável para armazenar o userId
  loginUsuario !: string;

  constructor(
    public dialogRef: MatDialogRef<DelecaoDialogComponent>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: { idUsuario: number, nomeUsuario: string }) {
      this.userId = data.idUsuario;
      this.loginUsuario = data.nomeUsuario;
    }

  confirmar(userId: number): void {
    this.userService.excluirUsuario(userId).subscribe(
      () => {
        this.dialogRef.close(true);
      },
      (error) => {
        console.error('Erro ao excluir usuário:', error);
        // Feche o diálogo com resultado 'false' ou manipule o erro de acordo com sua lógica.
        this.dialogRef.close(false);
      }
    );
  }

  cancelar(): void {
    this.dialogRef.close(false); // Fechar a caixa de diálogo com um resultado 'false'.
  }
}
