import { Component, Inject } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, ValidationErrors } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs';
import { SoldcarUser } from 'src/app/protected/_interfaces/user-interfaces';
import { UserService } from 'src/app/protected/_services/user/user.service';
import { CadastroComponent } from '../cadastro-dialog/cadastro-dialog.component';

@Component({
  selector: 'app-edicao-usuario-dialog',
  templateUrl: './edicao-usuario-dialog.component.html',
  styleUrls: ['./edicao-usuario-dialog.component.scss']
})
export class EdicaoUsuarioDialogComponent {

  private idUsuario !: Number;


  passwordRequirementsValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value;

    if (!/[A-Z]/.test(password)) {
      return { uppercaseRequired: true };
    }
    if (!/\d/.test(password)) {
      return { digitRequired: true };
    }
    if (password.length < 6) {
      return { minLengthRequired: true };
    }
    return null;
  }

  registerForm = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    email: new UntypedFormControl(null),
    login: new UntypedFormControl(null),
    nome: new UntypedFormControl(null),
    sobrenome: new UntypedFormControl(null)
  })

  soldcarUser !: SoldcarUser;

  constructor(public dialogRef: MatDialogRef<CadastroComponent>,
      private UserService: UserService,
      @Inject(MAT_DIALOG_DATA) public data: {
      id: number, login: string, email: string, nome: string, sobrenome: string,
      data: MatTableDataSource<SoldcarUser> }){

        this.registerForm.get('id')?.setValue(data.id);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  editarUsuario(){

    if (!this.registerForm.valid) {
      return;
    }
    let formData = this.registerForm.getRawValue();

    this.UserService.editarUsuario(formData).pipe(
      tap(() => {
        this.dialogRef.close();
      })
    ).subscribe();
  }

}
