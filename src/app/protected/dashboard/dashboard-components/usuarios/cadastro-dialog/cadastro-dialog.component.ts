import { Component, Inject } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { CustomValidators } from 'src/app/public/custom-validator';
import { AuthService } from './../../../../_services/auth/auth.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro-dialog.component.html'})
export class CadastroComponent {

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
    email: new UntypedFormControl(null, [Validators.required, Validators.email]),
    login: new UntypedFormControl(null, [Validators.required]),
    nome: new UntypedFormControl(null, [Validators.required]),
    sobrenome: new UntypedFormControl(null, [Validators.required]),
    password: new UntypedFormControl(null, [Validators.required, this.passwordRequirementsValidator.bind(this)]),
    passwordConfirm: new UntypedFormControl(null, [Validators.required]),
  },
    // add custom Validators to the form, to make sure that password and passwordConfirm are equal
    { validators: CustomValidators.passwordsMatching }
  )

  constructor(
    public dialogRef: MatDialogRef<CadastroComponent>,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  register() {
    if (!this.registerForm.valid) {
      return;
    }
    this.authService.register(this.registerForm.value).pipe(
      tap(() => {
        this.dialogRef.close();
      })
    ).subscribe();
  }

}
