import { AuthService } from './../../services/auth.service';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomValidators } from '../../custom-validator';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
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
    private router: Router,
    private authService: AuthService
  ) { }

  register() {
    if (!this.registerForm.valid) {
      return;
    }
    this.authService.register(this.registerForm.value).pipe(
      // If registration was successfull, then navigate to login route
      tap(() => this.router.navigate(['../login']))
    ).subscribe();
  }

}
