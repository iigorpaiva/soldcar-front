import { Component, Inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { CustomValidators } from 'src/app/public/custom-validator';
import { AuthService } from 'src/app/public/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'})
export class RegisterComponent {

  registerForm = new UntypedFormGroup({
    email: new UntypedFormControl(null, [Validators.required, Validators.email]),
    login: new UntypedFormControl(null, [Validators.required]),
    nome: new UntypedFormControl(null, [Validators.required]),
    sobrenome: new UntypedFormControl(null, [Validators.required]),
    password: new UntypedFormControl(null, [Validators.required]),
    passwordConfirm: new UntypedFormControl(null, [Validators.required])
  },
    // add custom Validators to the form, to make sure that password and passwordConfirm are equal
    { validators: CustomValidators.passwordsMatching }
  )

  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
    private authService: AuthService,
    private router: Router,
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
